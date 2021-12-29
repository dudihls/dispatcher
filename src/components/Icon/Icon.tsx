import React from "react";
import { IconContainer, StyledIcon } from "./style";

type IconProps = {
  src: string;
  color?: "black" | "white" | "purple";
  size?: "sm" | "md";
  margin?: number;
  ml?: number;
};

export const Icon: React.FC<IconProps> = ({ ml, margin, size, ...props }) => {
  return (
    <IconContainer ml={ml} margin={margin} size={size}>
      <StyledIcon {...props} />
    </IconContainer>
  );
};
