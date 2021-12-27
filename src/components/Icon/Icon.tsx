import React from "react";
import { StyledIcon } from "./style";

type IconProps = {
  src: string;
  color?: "black" | "white" | "purple";
};

export const Icon: React.FC<IconProps> = (props : IconProps) => {
  return <StyledIcon {...props} />;
};
