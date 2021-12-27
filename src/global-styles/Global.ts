import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

type ThemeType = typeof theme;

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`


*{
box-sizing: border-box;
  margin: 0;
}

html{
  background-color: ${({ theme }) => theme.colors.background};
  width: auto;
  font-family: 'Roboto';
}
body {
 
}


`;
