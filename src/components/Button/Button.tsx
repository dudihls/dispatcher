// import Icon from "../Icon/Icon";
import React from "react";
import { StyledButton } from "./style";

type ButtonProps = {
  size?: "sm" | "md" | "lg";
  type?: "submit";
  variant?: "primary" | "secondary";
  onClick?: (...args: any[]) => any;
};

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);
