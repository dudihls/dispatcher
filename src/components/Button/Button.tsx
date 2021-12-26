// import Icon from "../Icon/Icon";
import React from "react";
import { StyledButton } from "./style";

type ButtonProps = {
  size?: "sm" | "md" | "lg";
  type?: "submit";
  variant?: "primary" | "secondary";
  onclick?: () => {};
};

export const Button: React.FC<ButtonProps> = (props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);
