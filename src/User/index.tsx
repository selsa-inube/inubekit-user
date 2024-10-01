import { Avatar } from "@inubekit/avatar";
import { Text } from "@inubekit/text";
import { Stack } from "@inubekit/stack";
import { IMenuItem, Menu } from "@inubekit/menu";
import { IUserSize } from "./props";
import { useState } from "react";
import { StyledMenuContainer } from "./styles";

interface ISection {
  title?: string;
  links: IMenuItem[];
  divider?: boolean;
}

interface IUser {
  username: string;
  client: string;
  size?: IUserSize;
  menuSections: ISection[];
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
          <Menu
            userName={username}
            businessUnit={client}
            avatar={true}
            sections={menuSections}
          />
        </StyledMenuContainer>
      )}
    </>
  );
};

export { User };

export type { IUser };
