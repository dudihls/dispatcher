import { Hero } from "../../components/Hero/Hero";
import { LoginContent } from "../../components/LoginContent/LoginContent";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <Hero />
      <LoginContent onContinue={() => navigate("/home")} />
    </Container>
  );
};
