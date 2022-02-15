import styled from "styled-components";

export const StyledFilterRow = styled.div<{ isDisabled: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 25px 7%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  ${({ isDisabled }) =>
    isDisabled
      ? `
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.4;
  `
      : ``}
`;

export const StyledName = styled.p`
  color: ${({ theme }) => theme.colors.lightPurple};
  font-size: 14px;
`;
export const StyledValue = styled.p<{ isDefault?: boolean }>`
  color: ${({ theme, isDefault }) =>
    theme.colors.lightPurple + (isDefault ? "80" : "D9")};
  font-size: 14px;
`;
