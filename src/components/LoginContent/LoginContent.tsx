import { Button } from "../Button/Button";
import {
  Container,
  ContentWrapper,
  Spacer,
  StyledContent,
  StyledHeader,
  StyledIcon,
  Wrapper,
} from "./style";
import back from "../../assets/Icons/back.svg";
export const LoginContent: React.FC<{ onContinue?: (...args: any) => any }> = ({
  onContinue,
}) => (
  <Container>
    <ContentWrapper>
      <Wrapper>
        <StyledHeader>Welcome to Dispatcher</StyledHeader>
        <StyledContent>
          Locate articles and breaking news headlines from news sources and
          blogs across the web
        </StyledContent>
      </Wrapper>
      <Wrapper>
        <Spacer />
        <Button onClick={onContinue} toUpperCase>
          continue <StyledIcon mr={8} color="white" src={back} />
        </Button>
      </Wrapper>
    </ContentWrapper>
  </Container>
);
