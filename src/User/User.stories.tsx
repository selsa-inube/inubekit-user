import { User, IUser } from ".";

import { props, parameters } from "./props";

const story = {
  title: "data/User",
  components: [User],
  parameters,
  argTypes: props,
};

const Default = (args: IUser) => <User {...args} />;
Default.args = {
  username: "Leonardo Garzón",
  client: "Sistemas Enlínea S.A",
  size: "large",
};

export default story;
export { Default };
