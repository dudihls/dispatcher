import styled from "styled-components";
import { colors } from "../global-vars";

type ButtonProps = {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  type: "submit";
  onclick?: (...args: any[]) => any;
};

export const StyledButton = styled.button.attrs(
  ({ type, onclick }: ButtonProps) => ({
    type: type === "submit" ? type : "button",
    onClick: onclick,
  })
)<ButtonProps>`
  ${(p) => {
    switch (p.size) {
      case "md":
        return `

    `;
      case "lg":
        return `
        width: 226px;
        height: 36px;

    `;
      case "sm":
      default:
        return `
    padding: 4px 16px;

    `;
    }
  }}
  font-size: 14px;
  background: ${(p) =>
    p.variant === "secondary" ? colors.secondary : colors.primary};
  color: ${(p) => (p.variant === "secondary" ? "black" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.25px;
  border-radius: 20px;
  border: none;
  &:hover,
  &:active {
    background: ${(p) =>
      p.variant === "secondary" ? colors.secondaryHover : colors.primaryHover};
  }
  cursor: pointer;
`;
