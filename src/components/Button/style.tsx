import styled from "styled-components";
import { ButtonProps } from "./ButtonProps";
import { colors } from "../global-vars";

export const StyledButton = styled.button<ButtonProps>`
  background: ${p => p.variant === "primary" ? colors.primary : colors.secondary};
  color : ${p => p.variant === "primary" ? 'white': 'black'};
  padding: 30px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
`;
