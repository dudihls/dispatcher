import { Icon } from "../Icon/Icon";
import {
  Container,
  HeaderWrapper,
  RowWrapper,
  StyledButton,
  StyledContent,
  StyledHeadline,
} from "./style";
import exit from "../../assets/Icons/exit.svg";

type RecentSearchesProps = {
  onClickSearch: (value: string) => any;
  onClear: () => any;
  searches: string[];
  onDeleteSearch: (idx: number) => any;
};

export const RecentSearches: React.FC<RecentSearchesProps> = ({
  onClickSearch,
  searches,
  onClear,
  onDeleteSearch,
}) => {
  return (
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
