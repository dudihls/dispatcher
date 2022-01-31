import styled from "styled-components";

type IconProps = {
  color?: "white" | "black" | "purple";
  src: string;
};

export const StyledIcon = styled.img.attrs(({ src }: IconProps) => ({
  src,
}))<IconProps>`
  ${(p) => {
    switch (p.color) {
      case "white":
        return `filter: brightness(3);`;
      case "purple":
      default:
        return;
      case "black":
        return `filter: invert(0%) sepia(97%) saturate(8%) hue-rotate(325deg) brightness(113%) contrast(100%);`;
    }
  }}
  width: 100%;
  height: 100%;
`;

type IconContainerProps = {
  margin?: number;
  ml?: number;
  mr?: number;
  size?: "xs" | "sm";
};

export const IconContainer = styled.div<IconContainerProps>`
  height: ${({ size }) => (size === "xs" ? "12px" : "24px")};
  width: ${({ size }) => (size === "xs" ? "12px" : "24px")};
  margin: ${({ margin }) => margin && margin + "px"};
  margin-inline-end: ${({ ml }) => ml && ml + "px"};
  margin-inline-start: ${({ mr }) => mr && mr + "px"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
