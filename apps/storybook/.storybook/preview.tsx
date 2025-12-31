import type { Decorator } from "@storybook/react";
import "../src/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "default",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "default", title: "Default" },
        { value: "dark", title: "Dark" },
        { value: "brandB", title: "Brand B" },
      ],
    },
  },
};

export const decorators: Decorator[] = [
  (Story, context) => {
    const theme = context.globals.theme as string;

    return (
      <div data-theme={theme === "default" ? undefined : theme}>
        <Story />
      </div>
    );
  },
];
