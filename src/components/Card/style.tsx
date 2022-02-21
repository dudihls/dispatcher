import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const TagsContainer = styled.div<{ direction: number }>`
  position: absolute;
  display: flex;

  top: 17px;
  @media ${({ theme }) => theme.device.tablet} {
    top: 9px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    top: 159px;
  }
  ${({ direction }) =>
    direction
      ? ` left: 16px;
    `
      : ` right: 16px;
    `}
  div:not(:last-child) {
    margin-inline-end: 10px;
  }
`;
export const ImgContainer = styled.div<{ direction?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 242px;
  width: 243px;
  min-width: 244px;

  @media ${({ theme }) => theme.device.mobile} {
    height: 148px;
    width: 344px;
    border-radius: 20px 20px 0px 0px;
  }
`;

export const PlaceHolderContainer = styled(ImgContainer)`
  width: 100%;
  height: 100%;
  border: 1px solid #d9dbe9;

  background-color: ${({ theme }) => theme.colors.purple};
  ${({ direction }) =>
    direction
      ? `      border-radius: 0px 20px 20px 0px;
      border-left:none;
    `
      : ` border-radius: 20px 0px 0px 20px;
      border-right:none;
    `}
  @media ${({ theme }) => theme.device.mobile} {
    border-radius: 20px 20px 0px 0px;
    border: 1px solid #d9dbe9;
    border-bottom: none;
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

export const LoadingContainer = styled.div<{
  loading: number;
  isLoader: boolean;
  direction: number;
}>`
  display: ${({ isLoader, loading }) =>
    isLoader ? (loading ? "flex" : "none") : loading ? "none" : "flex"};
  justify-content: center;
  border: 1px solid #d9dbe9;

  ${({ direction }) =>
    direction
      ? `      border-radius: 0px 20px 20px 0px;
      border-left:none;
    `
      : ` border-radius: 20px 0px 0px 20px;
      border-right:none;
    `}
  align-items: center;
  width: 100%;
  height: 100%;
  ${({ direction }) =>
    direction
      ? `      border-radius: 0px 20px 20px 0px;
    `
      : ` border-radius: 20px 0px 0px 20px;
   
    `}
`;

export const StyledImage = styled.img.attrs(({ src }: { src: string }) => ({
  src,
}))<{ direction?: number }>`
  height: 100%;
  border: 1px solid #d9dbe9;

  width: 100%;

  object-fit: cover;
  ${({ direction }) =>
    direction
      ? `      border-radius: 0px 20px 20px 0px;
      border-left:none;
    `
      : ` border-radius: 20px 0px 0px 20px;
      border-right:none;
   
    `}
  @media ${({ theme }) => theme.device.mobile} {
    border-radius: 20px 20px 0px 0px;
    border: 1px solid #d9dbe9;
    border-bottom: none;
  }
`;

export const StyledPlaceHolder = styled.img<{ direction: number }>`
  height: 50%;
  width: 50%;
  object-fit: contain;

  ${({ direction }) =>
    direction
      ? `      border-radius: 0px 20px 20px 0px;
    `
      : ` border-radius: 20px 0px 0px 20px;
   
    `}
  @media ${({ theme }) => theme.device.mobile} {
    border-radius: 20px 20px 0px 0px;
  }
`;

export const StyledLayout = styled.div`
  z-index: 1;
  position: relative;
  display: flex;

  p {
    text-align: ${({ dir }) => (dir === "rtl" ? "right" : "left")};
  }
  height: 242px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    min-height: 449px;
    max-height: 449px;
    width: 344px;
  }
`;

export const ContentLayout = styled.div<{ direction: number }>`
  display: flex;
  padding: 16px;
  width: 100%;
  height: 100%;
  border: 1px solid #d9dbe9;
  ${({ direction }) =>
    direction
      ? `      border-radius: 20px 0px 0px 20px;
    `
      : ` border-radius: 0px 20px 20px 0px;
   
    `}
  flex-direction: column;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 8.5px 16px 0 17px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 9px 16px 12px;
    border-radius: 0px 0px 20px 20px;
  }
`;

export const StyledButtonContainer = styled.div<{ direction: number }>`
  position: absolute;
  ${({ direction }) =>
    direction
      ? ` left: 16px;
    `
      : ` right: 16px;
    `}
  bottom: 16px;

  width: 226px;
  @media ${({ theme }) => theme.device.tablet} {
    bottom: 8.5px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    position: static;
    margin-top: auto;
  }
`;

export const StyledIcon = styled(Icon)<{ isReversed: boolean }>`
  ${({ isReversed }) => !isReversed && "transform: rotate(180deg);"};
  width: 20px;
  height: 20px;
`;

export const StyledLabel = styled.p<{
  type?: "subtitle" | "content" | "header";
}>`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
