import { NotFoundContainer, NotFoundGraph, StyledLabel } from "./style";

export const NotFound = () => (
  <NotFoundContainer>
    <NotFoundGraph src={require("../../assets/imgs/notFoundGraph.png")} />
    <StyledLabel>No data to display</StyledLabel>
  </NotFoundContainer>
);
