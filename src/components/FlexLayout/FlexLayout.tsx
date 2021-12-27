import React from "react";
import { StyledFlexLayout } from "./style";

type FlexLayoutProps = {
  direction?: "row" | "col",
  sidePadding?: number,
  tp?:number,
  rp?:number,
  bp?:number,
  lp?:number
};

export const FlexLayout: React.FC<FlexLayoutProps> = (props) => {
  return <StyledFlexLayout {...props}>{props.children}</StyledFlexLayout>;
};
