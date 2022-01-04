import { FilterRow } from "./FilterRow/FilterRow";
import { HeaderWrapper, StyledHeader, TopWrapper } from "./style";

type MobileFilterMenuProps = {
  filterList: { header: string; value: string }[];
  onClickHeader: (idx: number) => any;
};

export const MobileFilterMenu: React.FC<MobileFilterMenuProps> = ({
  filterList,
  onClickHeader,
}) => (
  <TopWrapper>
    <HeaderWrapper>
      <StyledHeader>Filters</StyledHeader>
    </HeaderWrapper>
    {filterList.map(({ header, value }, idx) => (
      <FilterRow
        header={header}
        value={value ? value : "All"}
        isDefaultValue={!value}
        onClickRow={() => onClickHeader(idx)}
        key={idx}
      />
    ))}
  </TopWrapper>
);
