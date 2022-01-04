import { ThemeProvider } from "styled-components";
import { Hero } from "../../components/Hero/Hero";
import { LoginContent } from "../../components/LoginContent/LoginContent";
import { GlobalStyles } from "../../global-styles/Global";
import { theme } from "../../global-styles/theme";
import { Container } from "./style";

export const Login: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Container>
      <Hero />
      <LoginContent/>
    </Container>
  </ThemeProvider>
);
