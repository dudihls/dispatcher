import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  position: absolute;
  width: 100%;
  top: 55px;
  max-height: 140px;
  border-radius: 10px;
  overflow: auto;
  z-index: 2;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
`;

export const RowWrapper = styled.div`
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverDropDown};
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 16px;
`;

export const StyledContent = styled.p`
  color: ${({ theme }) => theme.colors.lightPurple};
  font-weight: 400;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.lightPurple};
  padding: 16px;
  font-size: 12px;
`;

export const StyledButton = styled.button`
  text-transform: uppercase;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  font-weight: 700;
  font-size: inherit;
  color: ${({ theme }) => theme.colors.lightPurple};
`;

export const StyledHeadline = styled.p`
  font-weight: 500;
`;
