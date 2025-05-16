// BottomNavBar.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@testing-library/react";
import { expect, userEvent } from "@storybook/test";
import BottomNavBar from "~/components/Layout/BottomNavbar/BottomNavBar";
import { sections } from "~/components/Layout/BottomNavbar/BottomNavbarContainer";

const meta: Meta<typeof BottomNavBar> = {
  component: BottomNavBar,
  title: "Components/BottomNavBar",
};

export default meta;

type Story = StoryObj<typeof BottomNavBar>;

export const BottomNavBarStory: Story = {
  args: {
    sections: sections,
    currentPathname: "/",
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText("Sleep")).toBeInTheDocument();
    expect(canvas.getByText("Analytics")).toBeInTheDocument();
    expect(canvas.getByText("Settings")).toBeInTheDocument();

    expect(canvas.getByText("Sleep").closest("a")).toHaveAttribute("href", "/");
    expect(canvas.getByText("Analytics").closest("a")).toHaveAttribute(
      "href",
      "/analytics"
    );
    expect(canvas.getByText("Settings").closest("a")).toHaveAttribute(
      "href",
      "/settings"
    );
  },
};
