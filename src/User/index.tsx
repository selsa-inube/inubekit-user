import { Avatar } from "@inubekit/avatar";
import { Text } from "@inubekit/text";
import { Stack } from "@inubekit/stack";
import { inube } from "@inubekit/foundations";
import { Size } from "./props";

const { spacing } = inube;
export interface IUserProps {
  userName: string;
  client: string;
  size?: Size;
}

const User = (props: IUserProps) => {
  const { userName, client, size = "large" } = props;

  return (
    <Stack justifyContent="flex-start" alignItems="center" gap={spacing.s200}>
      {size === "large" && (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={spacing.s050}
        >
          <Text
            as="span"
            appearance="dark"
            type="label"
            size="medium"
            textAlign={"center"}
          >
            {userName}
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
