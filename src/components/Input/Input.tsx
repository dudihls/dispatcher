import React, { forwardRef } from "react";
import { StyledInput } from "./style";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  noBorder?: boolean;
  isValid?: boolean;
}

const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = (
  props,
  ref
) => {
  
  return <StyledInput type="text" ref={ref} {...props} />;
};

export default forwardRef(Input);
