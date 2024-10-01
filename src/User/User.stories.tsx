import { ISection } from "@inubekit/menu";

import { MdManageAccounts, MdLogout } from "react-icons/md";
import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { IUser, User } from ".";
import { parameters, props } from "./props";

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

const sections: ISection[] = [
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
    links: [
      {
        title: "Cerrar sesión",
        iconBefore: <MdLogout />,
        path: "#",
        onClick: () => alert("Logged out"),
      },
    ],
    divider: true,
  },
];

const Default = (args: IUser) => <User {...args} />;
Default.args = {
  username: "Leonardo Garzón",
  client: "Sistemas Enlínea S.A",
  size: "large",
  menuSections: sections,
};

export default story;
export { Default };
