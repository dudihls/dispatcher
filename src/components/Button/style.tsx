import styled from "styled-components";

type ButtonProps = {
  size?: "sm" | "md" | "lg";
  toUpperCase?: boolean;
  variant?: "primary" | "secondary";
  justify?: "around" | "between" | "center";
};

export const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  ${({ size }) => {
    switch (size) {
      case "sm":
        return `height: 20px;`
      case "lg":
        return `height: 72px;`
      case "md":
      default:
        return `height: 36px;`
    }
  }}
  text-transform: ${(p) => p.toUpperCase && "uppercase"};
  font-size: 14px;
  font-family: inherit;
  font-weight: 500;
  background: ${({ variant, theme }) =>
    variant === "secondary" ? theme.colors.secondary : theme.colors.primary};
  color: ${(p) => (p.variant === "secondary" ? "black" : "white")};
  display: flex;
  align-items: center;
  justify-content: ${(p) =>
    p.justify === "around"
      ? "space-around"
      : p.justify === "between"
      ? "space-between"
      : "center"};
  letter-spacing: 0.25px;
  border-radius: 20px;
  border: none;
  &:hover,
  &:active {
    background: ${({ theme, variant }) =>
      variant === "secondary"
        ? theme.colors.secondaryHover
        : theme.colors.primaryHover};
  }
  cursor: pointer;
`;
