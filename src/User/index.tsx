import { Avatar } from "@inubekit/avatar";
import { Text } from "@inubekit/text";
import { Stack } from "@inubekit/stack";
import { IUserSection, IUserSize } from "./props";
import { useState } from "react";
import { StyledMenuContainer } from "./styles";
import { Menu } from "@inubekit/menu";
import { MenuUser } from "@inubekit/menu";
import { MenuSection } from "@inubekit/menu";
import { MenuLink } from "@inubekit/menu";
import { MenuAction } from "@inubekit/menu";

interface IUser {
  username: string;
  client: string;
  size?: IUserSize;
  menuSections: IUserSection[];
}

const User = (props: IUser) => {
  const { username, client, size = "large", menuSections } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
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
              textAlign={"center"}
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
                textAlign={"center"}
              >
                {client}
              </Text>
            )}
          </Stack>
        )}

        <Avatar onClick={toggleMenu} />
      </Stack>

      {isOpen && (
        <StyledMenuContainer>
          <Menu>
            <MenuUser userName={username} businessUnit={client} avatar={true} />
            {menuSections.map((section, index) => (
              <MenuSection
                key={index}
                title={section.title}
                divider={section.divider}
              >
                {section.links &&
                  section.links.map((link, linkIndex) => (
                    <MenuLink
                      key={linkIndex}
                      title={link.title}
                      path={link.path}
                      iconBefore={link.iconBefore}
                      iconAfter={link.iconAfter}
                      disabled={link.disabled}
                    />
                  ))}
                {section.actions &&
                  section.actions.map((action, actionIndex) => (
                    <MenuAction
                      key={actionIndex}
                      title={action.title}
                      description={action.description}
                      iconBefore={action.iconBefore}
                      iconAfter={action.iconAfter}
                      disabled={action.disabled}
                      onClick={action.onClick}
                    />
                  ))}
              </MenuSection>
            ))}
          </Menu>
        </StyledMenuContainer>
      )}
    </>
  );
};

export { User };

export type { IUser };
