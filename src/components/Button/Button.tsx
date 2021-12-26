// import Icon from "../Icon/Icon";
import { StyledButton } from "./style";

type ButtonProps = {
  children: string;
  size?: "sm" | "md" | "lg";
  type?: "submit";
  variant?: "primary" | "secondary";
  icon?: JSX.Element;
};

export const Button = (props: ButtonProps) => (
  <StyledButton {...props}>
    {props.children}
    {props.icon && props.icon}
  </StyledButton>
);
