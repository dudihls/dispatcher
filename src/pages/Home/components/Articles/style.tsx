import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 1300px;
  padding-right: ${({ theme }) => theme.spacing(2)};
  @media ${({ theme }) => theme.device.tablet} {
    padding-right: 0;
    height: 100%;
  }
  & > div:not(:last-child) {
    margin-block-end: 24px;
  }
`;

export const ResultNotFound = styled.img`
  width: 133px;
  height: 133px;
  margin-block-end: 12px;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 800px;
  @media ${({ theme }) => theme.device.tablet} {
    height: 300px;
  }
`;

export const StyledLabel = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lightPurple};

  text-align: center;
`;
