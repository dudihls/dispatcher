import styled from "styled-components";

type LayoutProps = {
  direction: "row" | "col",
  sidePadding?: number
};

export const StyledFlexLayout = styled.div<LayoutProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${(p) => p.direction === "col" && "column"};
  padding: 0px ${(p) => p.sidePadding && p.sidePadding+'px'};
`;
