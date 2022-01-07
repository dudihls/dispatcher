import { Hero } from "../../components/Hero/Hero";
import { LoginContent } from "../../components/LoginContent/LoginContent";
import { Container } from "./style";

export const Login: React.FC = () => (
  <Container>
    <Hero />
    <LoginContent />
  </Container>
);
