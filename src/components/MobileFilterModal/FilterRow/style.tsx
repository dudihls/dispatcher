import styled from "styled-components";

export const StyledFilterRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 7%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const StyledName = styled.p`
  color: ${({ theme }) => theme.colors.lightPurple};
  font-size: 14px;
`;
export const StyledValue = styled.p<{ isFirst: boolean }>`
  color: ${({ theme, isFirst }) =>
    theme.colors.lightPurple + (isFirst ? "D9" : "80")};
  font-size: 14px;
`;
