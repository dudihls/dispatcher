import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1500px;
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 800px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 360px;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 10%;
  padding-right: 10%;
  @media ${({ theme }) => theme.device.tablet} {
    width: 97.5%;
    margin-left: 2.5%;
    padding-right: 2.5%;
  }
`;

export const SimpleWrapper = styled.div<{ direction?: "col" | "row" }>`
  display: flex;
  align-items: flex-start;
  flex-direction: ${({ direction }) => direction === "col" && "column"};
  @media ${({ theme }) => theme.device.mobile} {
    align-self: center;
  }
`;

export const Spacer = styled.div`
  width: 100%;
  margin-block-end: 20px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray2};
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

export const AppHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FiltersContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

export const GraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline-start: 40px;
  & > div:not(:last-child) {
    margin-block-end: 24px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

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

export const StyledHeader = styled.p`
  font-size: 24px;
  margin-block-end: 20px;
  @media ${({ theme }) => theme.device.tablet} {
    margin-block-start: 20px;
  }
`;
