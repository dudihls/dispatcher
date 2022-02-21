import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  min-width: 340px;
  display: flex;
  flex-direction: row;
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
`;
