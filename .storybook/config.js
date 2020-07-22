import { configure, addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { dark, light } from "../src/common/theme/"

const themes = [dark, light];

addDecorator(withThemesProvider(themes));

configure(require.context('../src/', true, /\.stories\.js$/), module);
