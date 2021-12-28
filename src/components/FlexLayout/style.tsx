import styled from "styled-components";

type LayoutProps = {
  direction?: "row" | "col";
  tp?: number;
  rp?: number;
  bp?: number;
  lp?: number;
  justify?: "space-around" | "space-between" | "center";
};

export const StyledFlexLayout = styled.div<LayoutProps>`
  width: 100%;
  height: 100%;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  display: flex;
  align-items: center;
  flex-direction: ${(p) => p.direction === "col" && "column"};
  padding-top: ${(p) => p.tp && p.tp + "px"};
  padding-right: ${(p) => p.rp && p.rp + "px"};
  padding-bottom: ${(p) => p.bp && p.bp + "px"};
  padding-left: ${(p) => p.lp && p.lp + "px"};
`;
