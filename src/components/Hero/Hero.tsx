import { Container, Image, ImageContainer } from "./style";
import HeroLogo from "../../assets/imgs/HeroLogo.png";
export const Hero: React.FC = () => (
  <Container>
    <ImageContainer>
      <Image src={HeroLogo} alt="logo" />
    </ImageContainer>
  </Container>
);
