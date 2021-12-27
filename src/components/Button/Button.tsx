import React from "react";
import { StyledButton } from "./style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  height?: number;
  variant?: "primary" | "secondary";
  toUpperCase?: boolean;
  justify?: "around" | "between" | "center";
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);
