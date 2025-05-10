import { Meta, StoryObj } from "@storybook/react";
import Logo from "../../app/components/Layout/Logo";

const meta: Meta<typeof Logo> = {
  title: "Layout/Logo",
  component: Logo,
  parameters: {
    docs: {
      description: {
        compoent: "Nocta Logo",
      },
    },
    ally: {
      element: "#root",
      manual: false,
    },
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const LogoBase: Story = {
  args: {},
};
