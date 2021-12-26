import styled from "styled-components";
import { Button } from "../Button/Button";
import { colors, device } from "../global-vars";

export const TagsContainer = styled.div`
  position: absolute;
  display: flex;
  top: 17px;
  @media ${device.tablet} {
    top: 9px;
  }
  @media ${device.mobile} {
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
  padding: 3px 10px;
  color: ${colors.lightPurple};
  background-color: ${colors.lightGray2};
`;

export const StyledImage = styled.img.attrs(({ src }: { src: string }) => ({
  src,
}))`
  height: 242px;
  width: 244px;
  border-radius: 20px 0px 0px 20px;
  object-fit: cover;
  @media ${device.mobile} {
    height: 149px;
    width: 343px;
    border-radius: 20px 20px 0px 0px;
  }
`;

export const StyledLayout = styled.div`
  position: relative;
  display: flex;
  height: 242px;
  width: 986px;
  border-radius: 20px;
  background-color: white;
  border: 1px solid #d9dbe9;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  @media ${device.tablet} {
    height: 242px;
    width: 728px;
  }
  @media ${device.mobile} {
    flex-direction: column;
    height: 449px;
    width: 343px;
  }
`;

export const ContentLayout = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  @media ${device.tablet} {
    padding: 8.5px 16px 0 17px;
  }
  @media ${device.mobile} {
    width: 311px;
    padding: 9px 16px 12px;
  }
`;

export const StyledButton = styled(Button).attrs(
  ({ onclick }: { onclick: () => {} }) => ({
    onclick: onclick,
    size: "lg",
  })
)`
  position: absolute;
  right: 16px;
  bottom: 16px;
  text-transform: uppercase;
  font-weight: 500;
  @media ${device.tablet} {
    bottom: 8.5px;
  }
  img {
    margin-inline-start: 10px;
    transform: rotate(180deg);
  }
  @media ${device.mobile} {
    width: 311px;
    right: 16;
    bottom: 12;
    img {
      margin-inline-start: 0;
    }
    justify-content: space-around;
  }
`;

export const StyledLabel = styled.p<{
  type?: "subtitle" | "content" | "header";
}>`
  font-family: "Roboto", sans-serif;
  margin: 0;
  ${(p) => {
    switch (p.type) {
      case "header":
        return `font-size: 18px;
              font-weight: 700;
              line-height: 21px;`;
      case "content":
        return `
                  color: ${colors.lightPurple} ;
                  font-size: 14px;
                  font-style: normal;
                  line-height: 16px;`;
      case "subtitle":
      default:
        return `
            color: rgba(90, 90, 137, 0.5);
            font-size: 14px;
            line-height: 22px;
            letter-spacing: 0.25px;
            text-align: left;
`;
    }
  }}
  margin-bottom: 19px;
  @media ${device.tablet} {
    margin-bottom: 13.75px;
  }
  @media ${device.mobile} {
    margin-bottom: 10px;
  }
`;
