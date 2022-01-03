import React, { useState } from "react";
import { StyledInput } from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  noBorder?: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
  const [val, setval] = useState("ew");
  const changeHandler = (ev: any) => {
    setval(ev.target.value);
  };

  return (
    <StyledInput type="text" onChange={changeHandler} value={val} {...props} />
  );
};
