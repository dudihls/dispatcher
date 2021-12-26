import { Icon } from "../Icon/Icon";
import back from "../../assets/Icons/back.svg";
import {
  ContentLayout,
  StyledImage,
  StyledLabel,
  StyledLayout,
  StyledTag,
  TagsContainer,
} from "./style";
import { StyledButton } from "./style";

interface CardProps {
  img: string;
  content: string;
  date: string;
  tags?: string[];
  header: string;
  source: string;
  onclick?: () => {};
}

export const Card: React.FC<CardProps> = ({
  img,
  tags,
  header,
  content,
  source,
  date,
  onclick,
}: CardProps) => (
  <StyledLayout>
    <StyledImage src={img}></StyledImage>
    <ContentLayout>
      {tags && (
        <TagsContainer>
          {tags.map((tag) => (
            <StyledTag>{tag}</StyledTag>
          ))}
        </TagsContainer>
      )}
      <StyledLabel type="subtitle">{date}</StyledLabel>
      <StyledLabel type="header">{header}</StyledLabel>
      <StyledLabel type="subtitle">{source}</StyledLabel>
      <StyledLabel type="content">{content}</StyledLabel>
      <StyledButton onclick={onclick}>
        Navigate to dispatch <Icon color="white" src={back}></Icon>
      </StyledButton>
    </ContentLayout>
  </StyledLayout>
);

//     <StyledGrayLabel label={header} />
//     <StyledContent content={content} />
//     <StyledGrayLabel label={source} />
//     <Button>{button}</Button>
