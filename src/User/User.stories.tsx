import { MdManageAccounts, MdLogout } from "react-icons/md";
import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { IUser, User } from ".";
import { IMenuSection, parameters, props } from "./props";

const story = {
  title: "data/User",
  components: [User],
  parameters,
  argTypes: props,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto" }}>
          <div></div>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

const sections: IMenuSection[] = [
  {
    id: "section-1",
    links: [
      {
        id: "link-1",
        title: "Cambiar cliente",
        iconBefore: <MdManageAccounts />,
        path: "/account",
      },
    ],
  },
  {
    id: "section-2",
    actions: [
      {
        id: "action-1",
        title: "Cerrar sesión",
        description: "Log out from your account",
        iconBefore: <MdLogout />,
        action: () => console.log("Logged out"),
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
  menu: sections,
};

export default story;
export { Default };
