import styled from "styled-components";

export const SearchContainer = styled.form<{ hasFocus: boolean }>`
  position: relative;
  display: flex;
  background-color: white;
  margin: 12px 0;
  border-radius: 10px;
  min-width: 423px;
  align-items: center;
  justify-content: center;
  flex-grow: ${({ hasFocus }) => hasFocus && 0.25};
  transition: all 0.45s ease-in-out;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
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
