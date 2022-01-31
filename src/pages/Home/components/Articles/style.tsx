import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 1300px;
  @media ${({ theme }) => theme.device.tablet} {
    height: calc(100vh - 186px);
  }
  & > div:not(:last-child) {
    margin-block-end: 24px;
  }
`;
