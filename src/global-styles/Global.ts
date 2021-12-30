import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

type ThemeType = typeof theme;

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`


*{
box-sizing: border-box;
  margin: 0;
}

.react-datepicker__header {
  background-color: ${({ theme }) => theme.colors.lightPurple};
  div{
    color: white !important;
  }
}
.react-datepicker__day--selected ,.react-datepicker__day--in-range{
  background-color: ${({ theme }) => theme.colors.lightPurple};
  &:hover{
    background-color:  ${({ theme }) => theme.colors.purple};
  }
}
.react-datepicker__day--in-selecting-range{
  background-color:  ${({ theme }) => theme.colors.lightPurple2} !important;

}

html{
  background-color: ${({ theme }) => theme.colors.background};
  width: auto;
  font-family: 'Roboto';
}
body {
 
}


`;
