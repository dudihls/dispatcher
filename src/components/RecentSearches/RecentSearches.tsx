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
  searches: string[];
  onClear: () => any;
  onDeleteSearch: (idx: number) => any;
  onClickSearch: (idx: number) => any;
};

export const RecentSearches: React.FC<RecentSearchesProps> = ({
  searches,
  onDeleteSearch,
  onClear,
  onClickSearch,
}) => {
  return (
    <Container>
      <HeaderWrapper>
        <StyledHeadline>Recent Searches</StyledHeadline>
        <StyledButton onClick={onClear}>Clear</StyledButton>
      </HeaderWrapper>
      {searches.map((search, idx) => (
        <RowWrapper key={idx} onClick={() => onClickSearch(idx)}>
          <StyledContent>{search}</StyledContent>
          <Icon onClick={() => onDeleteSearch(idx)} src={exit} size="xs" />
        </RowWrapper>
      ))}
    </Container>
  );
};
