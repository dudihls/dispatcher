import React from "react";
import { IconContainer, StyledIcon } from "./style";

type IconProps = {
  src: string;
  color?: "black" | "white" | "purple";
  size?: "xs" | "sm";
  margin?: number;
  ml?: number;
  mr?: number;

  onClick?: (...args: any) => any;
};

export const Icon: React.FC<IconProps> = ({
  ml,
  mr,
  margin,
  size,
  ...props
}) => {
  return (
    <IconContainer mr={mr} ml={ml} margin={margin} size={size}>
      <StyledIcon {...props} />
    </IconContainer>
  );
};
