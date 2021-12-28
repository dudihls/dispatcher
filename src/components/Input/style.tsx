import styled from "styled-components";

interface InputProps {
  width?: number;
  height?: number;
  noBorder?: boolean;
}

export const StyledInput = styled.input<InputProps>`
  ::placeholder {
    color: ${({ theme }) => theme.colors.inputHolder};
  }
  outline: none;
  color: ${({ theme }) => theme.colors.lightPurple};
  width: ${(p) => (p.width ? p.width + "px" : "100%")};
  height: ${(p) => (p.height ? p.height + "px" : "100%")};
  font-family: Roboto;
  font-size: 14px;
  padding: 8px;
  border-radius: 10px;
  border: ${({noBorder,theme}) => !noBorder ? "1px solid "+theme.colors.inputBorder : 'none'};
`;
