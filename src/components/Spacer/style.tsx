import styled from "styled-components";

interface SpacerProps {
  size?: 1 | 2;
  margin?: 1 | 2;
  isVertical?: boolean;
}
export const StyledSpacer = styled.div<SpacerProps>`
  width: 1px;
  border: ${({ size }) => (size === 1 ? "0.5px" : "1px")} solid
    ${({ theme }) => theme.colors.lightGray2};
  margin: ${({ margin }) => (margin === 1 ? "0.5px" : "1px")} 0;
  transform: ${({ isVertical }) => isVertical && "rotate(90deg)"};
`;
