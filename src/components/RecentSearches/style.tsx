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
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0px 14px 0px 10px;
    margin: 0 6px;
    border-bottom: 1px solid #d9dbe980;
  }
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

export const MoblieWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.lightPurple};
`;

export const MoblieHeaderWrapper = styled.div`
  height: 8%;
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  align-items: center;
`;

export const MoblieButton = styled.button`
  color: ${({ theme }) => theme.colors.lightPurple};
  background-color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  font-size: 12px;
  padding: 4px;
  width: 50px;
  height: 30px;
`;
export const StyledMoblieHeadline = styled(StyledHeadline)`
  font-size: 14px;
`;

export const IconWrapper = styled.div`
  padding: 16px 0px 20px 0px;
`;
