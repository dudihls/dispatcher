import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-end: 20px;
`;

export const MobileSearchIcon = styled.div`
  display: none;
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`;
