import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  background-color: white;
  margin: 12px 0;
  border-radius: 10px;
  min-width: 423px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

export const SelectContainer = styled.div`
  min-width: 140px;
  max-width: 170px;
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
