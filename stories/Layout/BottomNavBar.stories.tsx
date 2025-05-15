// BottomNavBar.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import BottomNavBar from "../../app/components/Layout/BottomNavBar";
import { act, within } from "@testing-library/react";
import { expect, userEvent } from "@storybook/test";

const meta: Meta<typeof BottomNavBar> = {
  component: BottomNavBar,
  title: "Components/BottomNavBar",
};

export default meta;

type Story = StoryObj<typeof BottomNavBar>;

export const BottomNavBarStory: Story = {
  args: {
    pathname: "/",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await act(async () => {
      await userEvent.click(canvas.getByText("Sleep"));
    });

    // expect(canvas.getByText("Sleep")).toBeInTheDocument();
    // expect(canvas.getByText("Analytics")).toBeInTheDocument();
    // expect(canvas.getByText("Settings")).toBeInTheDocument();

    // expect(canvas.getByText("Sleep").closest("a")).toHaveAttribute("href", "/");
    // expect(canvas.getByText("Analytics").closest("a")).toHaveAttribute(
    //   "href",
    //   "/analytics"
    // );
    // expect(canvas.getByText("Settings").closest("a")).toHaveAttribute(
    //   "href",
    //   "/settings"
    // );
  },
};
