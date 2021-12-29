import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 74px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.purple};
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.tablet} {
    width: 81%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: auto;
  }
`;

export const Logo = styled.img`
  height: 100%;
`;
