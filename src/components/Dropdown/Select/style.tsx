import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 175px;
  font-size: 14px;
`;

export const MenuHeader = styled.button<{ noBorder?: boolean }>`
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: white;
  border: ${({ noBorder, theme }) =>
    !noBorder ? "1px solid " + theme.colors.inputBorder : "none"};
  padding: 0 15px;
  color: ${({ theme }) => theme.colors.lightPurple};
`;

export const MenuList = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  max-height: 126px;
  overflow: auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
`;

export const MenuItem = styled.div`
  color: ${({ theme }) => theme.colors.lightPurple};
  padding: 9px;
  :hover {
    background: ${({ theme }) => theme.colors.hoverDropDown};
  }
`;
