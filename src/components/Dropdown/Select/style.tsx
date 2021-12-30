import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 14px;
`;

export const MenuHeader = styled.div<{ noBorder?: boolean }>`
  cursor: pointer;
  height: 100%;
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
  z-index: 2;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  max-height: 126px;
  overflow: auto;
`;

export const MenuItem = styled.div`
  color: ${({ theme }) => theme.colors.lightPurple};
  padding: 9px;
  :hover {
    background: #dfe0eb69;
  }
`;


