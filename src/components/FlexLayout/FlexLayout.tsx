import { StyledFlexLayout } from "./style";

type FlexLayoutProps = {
  direction: "row" | "col",
  children: JSX.Element|JSX.Element[],
  sidePadding?: number
};

export const FlexLayout = ({ children, direction ,sidePadding}: FlexLayoutProps) => {
  return <StyledFlexLayout direction={direction} sidePadding={sidePadding}>{children}</StyledFlexLayout>;
};
