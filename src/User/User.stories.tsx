import { MdManageAccounts, MdLogout } from "react-icons/md";
import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { IUser, User } from ".";
import { IUserSection, parameters, props } from "./props";

const story = {
  title: "data/User",
  components: [User],
  parameters,
  argTypes: props,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const sections: IUserSection[] = [
  {
    links: [
      {
        title: "Cambiar cliente",
        iconBefore: <MdManageAccounts />,
        path: "#",
        onClick: () => alert("Client changed"),
      },
    ],
  },
  {
    actions: [
      {
        title: "Cerrar sesión",
        description: "Log out from your account",
        iconBefore: <MdLogout />,
        onClick: () => console.log("Logged out"),
      },
    ],
    divider: true,
  },
];

const Default: StoryFn<IUser> = (args: IUser) => <User {...args} />;
Default.args = {
  username: "Leonardo Garzón",
  client: "Sistemas Enlínea S.A",
  size: "large",
  menuSections: sections,
};

export default story;
export { Default };
