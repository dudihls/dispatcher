import styled from "styled-components";

type IconProps = {
  color?: "white" | "black" | "purple";
  src: string;
};

export const StyledIcon = styled.img.attrs(({ src }: IconProps) => ({
  src: src,
}))<IconProps>`
  ${(p) => {
    switch (p.color) {
      case "white":
        return `filter: brightness(3)`;
      case "purple":
      default:
        return;
      case "black":
        return `filter: invert(0%) sepia(97%) saturate(8%) hue-rotate(325deg) brightness(113%) contrast(100%)`;
    }
  }}
`;

type IconContainerProps = {
  margin?: number;
  ml?: number;
  size?: "sm" | "md";
};

export const IconContainer = styled.div<IconContainerProps>`
  height: ${({ size }) => (size === "md" ? "30px" : "24px")};
  width: ${({ size }) => (size === "md" ? "30px" : "24px")};
  margin: ${({ margin }) => margin + "px"};
  margin-inline-end: ${({ ml }) => ml + "px"};
  display: flex;
  align-items: center;
  justify-content: center;
`;
