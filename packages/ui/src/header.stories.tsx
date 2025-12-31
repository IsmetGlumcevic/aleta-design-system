import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header";
import { IconButton } from "./icon-button";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
};

export default meta;

export const Default: StoryObj<typeof Header> = {
  args: {
    leftAction: (
      <IconButton icon={<span>☰</span>} />
    ),
    logo: (
      <span className="font-bold text-lg">
        ALETA
      </span>
    ),
    rightActions: [
      <IconButton key="1" icon={<span>🔍</span>} />,
      <IconButton key="2" icon={<span>👤</span>} />,
    ],
  },
};
