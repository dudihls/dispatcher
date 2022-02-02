import { NotFoundContainer, NotFoundGraph, StyledLabel } from "./style";
import notFoundGraphSrc from "../../assets/imgs/notFoundGraph.png";

export const NotFound = () => (
  <NotFoundContainer>
    <NotFoundGraph src={notFoundGraphSrc} />
    <StyledLabel>No data to display</StyledLabel>
  </NotFoundContainer>
);
