import { Meta, StoryObj } from "@storybook/react";
import SleepOption from "../../../../app/components/Layout/Hero/Sleep/SleepOption";
import "../../../../app/styles/app.css";

const meta: Meta<typeof SleepOption> = {
  title: "Sleep Option Component",
  component: SleepOption,
  decorators: [
    (Story) => {
      return (
        <div style={{ maxWidth: "33.33%" }}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof SleepOption>;

export const IdealOption: Story = {
  args: {
    sleepOption: {
      time: "10:00 PM",
      cycles: 6,
      type: "Ideal",
    },
  },
export const GoodOption: Story = {
  args: {
    sleepOption: {
      time: "11:15 PM",
      cycles: 5,
      type: "Good",
    },
  },
};

export const OkayOption: Story = {
  args: {
    sleepOption: {
      time: "12:45 AM",
      cycles: 4,
      type: "Okay",
    },
  },
};
