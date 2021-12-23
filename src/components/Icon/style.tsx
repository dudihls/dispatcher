import styled from "styled-components";

type IconProps = {
  color?: "white" | "black" | "purple",
  src: string
};

export const StyledIcon = styled.img.attrs(({src}: IconProps)  => ({
      src: src
}))<IconProps>`
  ${(p) => {
    switch (p.color) {
      case "white":
        return `filter: brightness(3)`;
      case "purple":
        return
      case "black":
      default:
             return `filter: invert(0%) sepia(97%) saturate(8%) hue-rotate(325deg) brightness(113%) contrast(100%)`;

    }
  }}
`;
