import { ButtonProps } from "./ButtonProps";
import { StyledButton } from "./style";

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} >{props.children}</StyledButton>;
};
