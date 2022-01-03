import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const StyledContainer = styled.div`
  @media ${({ theme }) => theme.device.desktop} {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  height: 44px;
  border: 1px solid #d9dbe9;
  padding: 10px 14px;
`;

export const StyledSortWrapper = styled.div`
  color: ${({ theme }) => theme.colors.lightPurple};
  font-family: Roboto;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 78px;
  cursor: pointer;
`;

export const FilterIcon = styled(Icon)`
  cursor: pointer;
`;
