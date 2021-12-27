import { Icon } from "../Icon/Icon";
import back from "../../assets/Icons/back.svg";
import {
  ContentLayout,
  StyledIcon,
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
  onclick?: (...args: any[]) => any;
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
          {tags.map((tag,idx) => (
            <StyledTag key={idx}>{tag}</StyledTag>
          ))}
        </TagsContainer>
      )}
      <StyledLabel type="subtitle">{date}</StyledLabel>
      <StyledLabel type="header">{header}</StyledLabel>
      <StyledLabel type="subtitle">{source}</StyledLabel>
      <StyledLabel type="content">{content}</StyledLabel>
      <StyledButton onclick={onclick}>
        Navigate to dispatch <StyledIcon color="white" src={back}></StyledIcon>
      </StyledButton>
    </ContentLayout>
  </StyledLayout>
);
