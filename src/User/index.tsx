import { Avatar } from "@inubekit/avatar";
import { Text } from "@inubekit/text";
import { Stack } from "@inubekit/stack";
import { IUserSize } from "./props";

interface IUser {
  username: string;
  client: string;
  size?: IUserSize;
}

const User = (props: IUser) => {
  const { username, client, size = "large" } = props;

  return (
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
      <Avatar />
    </Stack>
  );
};

export { User };

export type { IUser };
