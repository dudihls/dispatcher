import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/global-styles/theme";

addDecorator(withThemesProvider([theme]), ThemeProvider);

const customViewports = {
  Mobile: {
    name: "Mobile",
    styles: {
      width: "375px",
      height: "670px",
    },
  },
  Tablet: {
    name: "Tablet",
    styles: {
      width: "769px",
      height: "1025px",
    },
  },
  Desktop: {
    name: "Desktop",
    styles: {
      width: "2000px",
      height: "1500px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};
