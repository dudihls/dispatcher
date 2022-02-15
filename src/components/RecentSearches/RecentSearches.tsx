import { Icon } from "../Icon/Icon";
import {
  Container,
  HeaderWrapper,
  IconWrapper,
  MoblieButton,
  MoblieHeaderWrapper,
  MoblieWrapper,
  RowWrapper,
  ScrollContainer,
  StyledButton,
  StyledContent,
  StyledHeadline,
  StyledMoblieHeadline,
} from "./style";
import exit from "../../assets/Icons/exit.svg";

type RecentSearchesProps = {
  onClickSearch: (value: string) => any;
  onClear: () => any;
  searches: string[];
  onDeleteSearch: (idx: number) => any;
  isMoblie?: boolean;
};

export const RecentSearches: React.FC<RecentSearchesProps> = ({
  onClickSearch,
  searches,
  onClear,
  onDeleteSearch,
  isMoblie,
}) => {
  return isMoblie ? (
    <MoblieWrapper>
      <MoblieHeaderWrapper>
        <StyledMoblieHeadline>Recent Searches</StyledMoblieHeadline>
        <MoblieButton
          type="button"
          onClick={(ev) => {
            ev.stopPropagation();
            onClear();
          }}
        >
          Clear
        </MoblieButton>
      </MoblieHeaderWrapper>
      <ScrollContainer>
        {searches.map((search: string, idx: number) => (
          <RowWrapper key={idx} onClick={() => onClickSearch(search)}>
            <StyledContent>{search}</StyledContent>
            <IconWrapper
              onClick={(ev) => {
                ev.stopPropagation();
                onDeleteSearch(idx);
              }}
            >
              <Icon src={exit} size="xs" />
            </IconWrapper>
          </RowWrapper>
        ))}
      </ScrollContainer>
    </MoblieWrapper>
  ) : (
    <Container>
      <HeaderWrapper>
        <StyledHeadline>Recent Searches</StyledHeadline>
        <StyledButton
          type="button"
          onClick={(ev) => {
            ev.stopPropagation();
            onClear();
          }}
        >
          Clear
        </StyledButton>
      </HeaderWrapper>
      {searches.map((search: string, idx: number) => (
        <RowWrapper key={idx} onClick={() => onClickSearch(search)}>
          <StyledContent>{search}</StyledContent>
          <Icon
            onClick={(ev) => {
              ev.stopPropagation();
              onDeleteSearch(idx);
            }}
            src={exit}
            size="xs"
          />
        </RowWrapper>
      ))}
    </Container>
  );
};
