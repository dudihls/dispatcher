import styled from "styled-components";

export const Container = styled.div<{ open: boolean }>`
  position: fixed;
  width: ${({ open }) => (open ? "48%" : "0%")};
  @media ${({ theme }) => theme.device.mobile} {
    width: ${({ open }) => (open ? "70%" : "0%")};
  }
  overflow: hidden;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 10001;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 300ms ease-in-out;
`;

export const StyledHeader = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lightPurple};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  padding-left: 7%;
  height: 9%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`;

export const Body = styled.div`
  display: flex;
  height: 91%;
  flex-direction: column;
  overflow-y: auto;
`;

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 86px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const ButtonWrapper = styled.div`
  width: 50%;
`;
