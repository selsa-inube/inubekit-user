const sizes = ["small", "large"] as const;
type IUserSize = (typeof sizes)[number];

interface IMenuSection {
  id: string;
  title?: string;
  divider?: boolean;
  links?: ILink[];
  actions?: IAction[];
}

interface ILink {
  id: string;
  title: string;
  path: string;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  disabled?: boolean;
}

interface IAction {
  id: string;
  title: string;
  description?: string;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  disabled?: boolean;
  action: () => void;
}

const parameters = {
  docs: {
    description: {
      component:
        "Component that allows the user to identify himself and locate himself next to the business unit",
    },
  },
};

const props = {
  username: {
    description:
      "specify the name of the user to be displayed in the component. Allows customising the visual identification of the user within the application interface.",
    table: {
      defaultValue: { summary: "MdPersonOutline" },
    },
  },
  client: {
    description:
      "indicates the name of the customer or company associated with the user.",
    table: {
      defaultValue: { summary: "MdPersonOutline" },
    },
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description:
      "determines the size of the user component in the interface. The avatar will always be visible, but the name and client will be visible according to the size of the component.",
    table: {
      defaultValue: { summary: "large" },
    },
  },
  menu: {
    description:
      "An array of sections that contain either links or actions for the user menu. Each section can have a title, links, actions, and a divider.",
    table: {
      type: { summary: "IMenuSection" },
    },
  },
};

export { props, parameters };
export type { IUserSize, IMenuSection, ILink, IAction };
