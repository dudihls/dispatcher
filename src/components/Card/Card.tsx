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
} from "./style";
import { Button } from "../Button/Button";

export type CardProps = {
  img: string;
  content: string;
  date: string;
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
}) => (
  <StyledLayout>
    <StyledImage src={img}></StyledImage>
    <ContentLayout>
      {tags && (
        <TagsContainer>
          {tags.map((tag, idx) => (
            <StyledTag key={idx}>{tag}</StyledTag>
          ))}
        </TagsContainer>
      )}
      <StyledLabel type="subtitle">{date}</StyledLabel>
      <StyledLabel type="header">{header}</StyledLabel>
      <StyledLabel type="subtitle">{source}</StyledLabel>
      <StyledLabel type="content">{content}</StyledLabel>
      <StyledButtonContainer>
        <Button toUpperCase justify="around" onClick={onClick}>
          Navigate to dispatch
          <StyledIcon color="white" src={back}></StyledIcon>
        </Button>
      </StyledButtonContainer>
    </ContentLayout>
  </StyledLayout>
);
