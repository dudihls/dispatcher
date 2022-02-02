import styled from "styled-components";

export const SearchLayout = styled.form<{ isOpen: boolean }>`
  position: fixed;
  z-index: 100;
  height: 74px;
  background-color: white;
  width: 100%;
  /* transform: ${({ isOpen }) =>
    isOpen ? "top:0" : "translateY(100%) translateY(+74px)"}; */
  top: ${({ isOpen }) => (isOpen ? "0" : "-74px")};
  display: flex;

  transition: top 500ms ease-in-out;
`;

export const RecentSearchesLayout = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 100;
  height: calc(100% - 74px);
  top: 74px;
  background-color: ${({ theme }) => theme.colors.lightGray2};
  width: 100%;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(100%)"};
  transition: all 500ms ease-in-out;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  padding: 0 16px;
  align-items: center;
  width: 100%;
`;

export const StyledSearchLabel = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.lightPurple};
  font-size: 14px;
  font-weight: 500;
`;
