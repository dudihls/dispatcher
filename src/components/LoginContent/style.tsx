import styled from "styled-components";
import { FlexLayout } from "../FlexLayout/FlexLayout";
import { Icon } from "../Icon/Icon";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.tablet} {
    align-items: center;
    padding: 24px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.lightPurple};
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
`;

export const StyledHeader = styled.span`
  font-weight: 300;
  font-size: 48px;
  white-space: nowrap;
  margin-block-end: 16px;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 42px;
    margin-top: 16px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 32px;
  }
`;

export const StyledContent = styled.span`
  font-weight: 200;
  font-size: 36px;
  line-height: 50px;
  @media ${({ theme }) => theme.device.tablet} {
    white-space: pre-wrap;
    margin-block-end: 24px;
    font-size: 32px;
    text-align: center;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 22px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  width: 70%;
  margin-left: 60px;
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: 0;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
`;
export const StyledIcon = styled(Icon)`
  transform: rotate(180deg);
`;

export const Spacer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightGray2};
  margin: 24px 0;
`;
