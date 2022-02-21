import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1400px;
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 800px;
    height: 100%;
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
  margin-block-end: 40px;
  @media ${({ theme }) => theme.device.tablet} {
    margin-block-end: 0;
    width: 97.5%;
    margin-left: 2.5%;
    height: calc(100% - 118px);
    padding-right: 2.5%;
  }
`;

export const SimpleWrapper = styled.div<{
  direction?: "col" | "row";
  width?: "100%";
}>`
  width: ${({ width }) => width && width};
  display: flex;
  align-items: flex-start;
  flex-direction: ${({ direction }) => direction === "col" && "column"};
  @media ${({ theme }) => theme.device.mobile} {
    align-self: center;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: calc(100% - 68px);
  }
`;

export const GraphArticlesContainer = styled(SimpleWrapper)`
  @media ${({ theme }) => theme.device.tablet} {
    height: 100%;
  }
`;

export const Spacer = styled.div`
  width: 100%;
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

`;
