import { useState, useRef, useEffect } from "react";
import { Avatar } from "@inubekit/avatar";
import { Text } from "@inubekit/text";
import { Stack } from "@inubekit/stack";
import {
  Menu,
  MenuUser,
  MenuSection,
  MenuLink,
  MenuAction,
} from "@inubekit/menu";
import { IMenuSection, IUserSize } from "./props";
import { StyledMenuContainer, StyledUser } from "./styles";

interface IUser {
  username: string;
  client: string;
  size?: IUserSize;
  menu: IMenuSection[];
}

const User = (props: IUser) => {
  const { username, client, size = "large", menu } = props;
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      avatarRef.current &&
      !avatarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up the listener
    };
  }, [isOpen]);

  return (
    <StyledUser onClick={toggleMenu} ref={avatarRef}>
      <Stack justifyContent="flex-start" alignItems="center" gap="16px">
        {size === "large" && (
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="4px"
          >
            <Text
              as="span"
              appearance="dark"
              type="label"
              size="medium"
              textAlign="center"
              weight="bold"
            >
              {username}
            </Text>
            {client && (
              <Text
                as="span"
                appearance="gray"
                type="body"
                size="small"
                textAlign="center"
              >
                {client}
              </Text>
            )}
          </Stack>
        )}
        <Avatar />
      </Stack>

      {isOpen && (
        <StyledMenuContainer ref={menuRef}>
          <Menu>
            <MenuUser userName={username} businessUnit={client} avatar />
            {menu.map((section) => (
              <MenuSection
                key={section.id}
                title={section.title}
                divider={section.divider}
              >
                {section.links &&
                  section.links.map((link) => (
                    <MenuLink
                      key={link.id}
                      title={link.title}
                      path={link.path}
                      iconBefore={link.iconBefore}
                      iconAfter={link.iconAfter}
                      disabled={link.disabled}
                    />
                  ))}
                {section.actions &&
                  section.actions.map((action) => (
                    <MenuAction
                      key={action.id}
                      title={action.title}
                      description={action.description}
                      iconBefore={action.iconBefore}
                      iconAfter={action.iconAfter}
                      disabled={action.disabled}
                      action={action.action}
                    />
                  ))}
              </MenuSection>
            ))}
          </Menu>
        </StyledMenuContainer>
      )}
    </StyledUser>
  );
};

export { User };
export type { IUser };
