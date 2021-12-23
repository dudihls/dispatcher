import { StyledButton } from "./style";

type ButtonProps = {
  children: string,
  size: 'sm' | 'md' | 'lg',
  type?: 'submit',
  variant: 'primary' | 'secondary'
}

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} >{props.children}</StyledButton>;
};
