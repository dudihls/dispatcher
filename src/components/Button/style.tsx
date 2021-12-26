import styled from "styled-components";
import { colors } from "../global-vars";

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg',
  variant?: 'primary' | 'secondary'
}


export const StyledButton = styled.button<ButtonProps>`
${p => {switch (p.size) {
  case 'md':
    return `
    padding: 8px 32px;

    `
  case 'lg':
    return `
    padding: 8px 64px;

    `
  case 'sm': default:
    return `
    padding: 4px 16px;

    `
 }}}
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  background: ${p => p.variant === "secondary" ?  colors.secondary: colors.primary};
  color : ${p => p.variant === "secondary" ? 'black': 'white'};
  display:flex;
  align-items:center;
  justify-content: center;
  letter-spacing: 0.25px;  
  border-radius: 20px;
  border: none;
  &:hover,&:active{
    background: ${p => p.variant === "secondary" ? colors.secondaryHover : colors.primaryHover};
  }
  cursor: pointer;
`;
