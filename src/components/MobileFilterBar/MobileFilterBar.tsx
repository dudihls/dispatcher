import { Icon } from "../Icon/Icon";
import { FilterIcon, StyledContainer, StyledSortWrapper } from "./style";
import filter from "../../assets/Icons/filter.svg";
import dropdown from "../../assets/Icons/dropdown.svg";

type MobileFilterProps = {
  onToggleFilter: () => any;
};

export const MobileFilterBar: React.FC<MobileFilterProps> = ({
  onToggleFilter,
}) => {
  return (
    <StyledContainer>
      <StyledSortWrapper>
        Sort By
        <Icon src={dropdown} />
      </StyledSortWrapper>
      <FilterIcon src={filter} onClick={onToggleFilter} />
    </StyledContainer>
  );
};
