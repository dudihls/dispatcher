import styled from "styled-components";
import { Input } from "../Input/Input";

export const SearchContainer = styled.div`
  display: flex;
  background-color: white;
  margin: 12px 0;
  border-radius: 10px;
  min-width: 423px;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export const StyledInput = styled(Input)`
  transition: all 0.45s ease-in-out;
  &:focus {
    width: 400px;
  }
`;

export const SelectContainer = styled.div`
  min-width: 150px;
  height: 40px;
  border-left: 0.5px solid ${({ theme }) => theme.colors.lightGray2};
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
