import { FilterIcon, StyledContainer, StyledSortWrapper } from "./style";
import filter from "../../assets/Icons/filter.svg";

type MobileFilterProps = {
  onToggleFilter: () => any;
};

export const MobileFilterBar: React.FC<MobileFilterProps> = ({
  onToggleFilter,
}) => {
  return (
    <StyledContainer>
      <StyledSortWrapper></StyledSortWrapper>
      <FilterIcon src={filter} onClick={onToggleFilter} />
    </StyledContainer>
  );
};
