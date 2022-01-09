import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const TagsContainer = styled.div`
  position: absolute;
  display: flex;
  top: 17px;
  @media ${({ theme }) => theme.device.tablet} {
    top: 9px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    top: 159px;
  }
  right: 16px;
  div:not(:last-child) {
    margin-inline-end: 10px;
  }
`;

export const StyledTag = styled.div`
  font-family: Poppins;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 1px 10px;
  color: ${({ theme }) => theme.colors.lightPurple};
  background-color: ${({ theme }) => theme.colors.lightGray2};
`;

export const StyledImage = styled.img.attrs(({ src }: { src: string }) => ({
  src,
}))`
  height: 242px;
  width: 244px;
  border-radius: 20px 0px 0px 20px;
  object-fit: cover;
  @media ${({ theme }) => theme.device.mobile} {
    height: 149px;
    width: 343px;
    border-radius: 20px 20px 0px 0px;
  }
`;

export const StyledLayout = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  height: 242px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid #d9dbe9;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    height: 449px;
    width: 343px;
  }
`;

export const ContentLayout = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 8.5px 16px 0 17px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 9px 16px 12px;
  }
`;

export const StyledButtonContainer = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 226px;
  @media ${({ theme }) => theme.device.tablet} {
    bottom: 8.5px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    position: static;
  }
`;

export const StyledIcon = styled(Icon)`
  transform: rotate(180deg);
`;

export const StyledLabel = styled.p<{
  type?: "subtitle" | "content" | "header";
}>`
  /* font-family: "Roboto", sans-serif; */
  margin: 0;
  ${({ type, theme }) => {
    switch (type) {
      case "header":
        return `font-size: 18px;
              font-weight: 700;
              line-height: 21px;`;
      case "content":
        return `color: ${theme.colors.purple};
                  font-size: 14px;
                  font-style: normal;
                  line-height: 16px;`;
      case "subtitle":
      default:
        return `
            color: ${theme.colors.textGray};
            font-size: 14px;
            line-height: 22px;
            letter-spacing: 0.25px;
            text-align: left;
`;
    }
  }}
  margin-bottom: 19px;
  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 13.75px;
  }
  @media ${({ theme }) => theme.device.moblie} {
    margin-bottom: 10px;
  }
`;
