import back from "../../assets/Icons/back.svg";
import {
  ContentLayout,
  StyledIcon,
  StyledImage,
  StyledLabel,
  StyledLayout,
  StyledTag,
  TagsContainer,
  StyledButtonContainer,
  ImgContainer,
  StyledPlaceHolder,
  LoadingContainer,
  PlaceHolderContainer,
} from "./style";
import { Button } from "../Button/Button";
import { parseDate } from "../../services/articleService";
import logo from "../../assets/imgs/logo.svg";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { checkRTL } from "../../services/utils";
export type CardProps = {
  img: string;
  content: string;
  date: Date;
  tags?: string[];
  header: string;
  source: string;
  onClick?: (...args: any[]) => any;
};

export const Card: React.FC<CardProps> = ({
  img,
  tags,
  header,
  content,
  source,
  date,
  onClick,
}) => {
  const [image, setImage] = useState<string | null>(img);
  const [loading, setLoading] = useState(true);
  const isRtl = checkRTL(header) || checkRTL(content);
  return (
    <StyledLayout dir={isRtl ? "rtl" : "ltr"}>
      <ImgContainer direction={+isRtl}>
        {image ? (
          <>
            <LoadingContainer
              direction={+isRtl}
              isLoader={true}
              loading={+loading}
            >
              <ClipLoader />
            </LoadingContainer>
            <LoadingContainer
              loading={+loading}
              direction={+isRtl}
              isLoader={false}
            >
              <StyledImage
                direction={+isRtl}
                onError={() => setImage(null)}
                src={image}
                onLoad={() => setLoading(false)}
              ></StyledImage>
            </LoadingContainer>
          </>
        ) : (
          <PlaceHolderContainer direction={+isRtl}>
            <StyledPlaceHolder
              direction={+isRtl}
              src={logo}
            ></StyledPlaceHolder>
          </PlaceHolderContainer>
        )}
      </ImgContainer>
      <ContentLayout direction={+isRtl}>
        {tags && (
          <TagsContainer direction={+isRtl}>
            {tags.map((tag, idx) => (
              <StyledTag key={idx}>{tag}</StyledTag>
            ))}
          </TagsContainer>
        )}
        <StyledLabel type="subtitle">{parseDate(date)}</StyledLabel>
        <StyledLabel type="header">{header}</StyledLabel>
        <StyledLabel type="subtitle">{source}</StyledLabel>
        <StyledLabel type="content">{content}</StyledLabel>
        <StyledButtonContainer direction={+isRtl}>
          <Button toUpperCase justify="center" onClick={onClick}>
            Navigate to dispatch
            <StyledIcon
              isReversed={isRtl}
              color="white"
              mr={10}
              src={back}
            ></StyledIcon>
          </Button>
        </StyledButtonContainer>
      </ContentLayout>
    </StyledLayout>
  );
};
