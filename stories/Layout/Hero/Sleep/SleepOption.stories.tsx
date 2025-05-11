import { Meta, StoryObj } from "@storybook/react";
import SleepOption from "../../../../app/components/Layout/Hero/Sleep/SleepOption";
import "../../../../app/styles/app.css";
import { within } from "@testing-library/react";
import { expect } from "@storybook/test";

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
      time: "09:45 PM",
      cycles: 6,
      type: "Ideal",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Ideal")).toBeInTheDocument();
    const SleepInfo = canvas.getByTestId("sleep-info");
    expect(SleepInfo).toHaveTextContent("6 sleep cycles • 9h");
  },
};

export const GoodOption: Story = {
  args: {
    sleepOption: {
      time: "11:15 PM",
      cycles: 5,
      type: "Good",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Good")).toBeInTheDocument();
    const SleepInfo = canvas.getByTestId("sleep-info");
    expect(SleepInfo).toHaveTextContent("5 sleep cycles • 7h 30m");
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Okay")).toBeInTheDocument();
    const SleepInfo = canvas.getByTestId("sleep-info");
    expect(SleepInfo).toHaveTextContent("4 sleep cycles • 6h");
  },
};
