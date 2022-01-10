import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  height: 1300px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  & > div:not(:last-child) {
    margin-block-end: 24px;
  }
`;

