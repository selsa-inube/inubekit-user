import { User, IUserProps } from ".";

import { props, parameters } from "./props";

const story = {
  title: "data/User",
  components: [User],
  parameters,
  argTypes: props,
};

export const Default = (args: IUserProps) => <User {...args} />;
Default.args = {
  userName: "Leonardo Garzón",
  client: "Sistemas Enlínea S.A",
  size: "large",
};

export default story;
