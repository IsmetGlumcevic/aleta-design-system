import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: "Primary button",
    variant: "primary",
  },
};

export const Danger: StoryObj<typeof Button> = {
  args: {
    children: "Danger button",
    variant: "danger",
  },
};
