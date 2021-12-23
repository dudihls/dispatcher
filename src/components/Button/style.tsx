import styled from "styled-components";
import { colors } from "../global-vars";

type ButtonProps = {
  children: string,
  size: 'sm' | 'md' | 'lg',
  type?: 'submit',
  variant: 'primary' | 'secondary'
}

export const StyledButton = styled.button<ButtonProps>`
  background: ${p => p.variant === "primary" ? colors.primary : colors.secondary};
  color : ${p => p.variant === "primary" ? 'white': 'black'};
  padding: 30px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
`;
