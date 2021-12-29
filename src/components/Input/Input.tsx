import React from "react";
import { StyledInput } from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  noBorder?: boolean;
}

export const Input: React.FC<InputProps> = (props) => (
  <StyledInput {...props} />
);
