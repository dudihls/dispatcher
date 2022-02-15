import { useMemo } from "react";
import { EndPoints } from "../../services/utils";
import { FilterRow } from "./FilterRow/FilterRow";
import { EndPointFilter, FilterProps } from "./MobileFilterModal";
import { Body, HeaderWrapper, StyledHeader, TopWrapper } from "./style";

type MobileFilterMenuProps = {
  filterList: FilterProps[];
  onClickHeader: (filter: FilterProps | EndPointFilter) => any;
  endPointFilter: EndPointFilter;
};

export const MobileFilterMenu: React.FC<MobileFilterMenuProps> = ({
  filterList,
  endPointFilter,
  onClickHeader,
}) => {
  const filtersToDisplay: (FilterProps & { isDisabled?: boolean })[] =
    useMemo(() => {
      let filters = [...filterList];
      if (endPointFilter.current.value === EndPoints.HEADLINES) {
        const countryVal = filterList.find((f) => f.id === "country")!.current
          .value;
        const categoryVal = filterList.find((f) => f.id === "category")!.current
          .value;
        const sourceVal = filterList.find((f) => f.id === "source")!.current
          .value;

        if (sourceVal) {
          filters = filters.map((f) =>
            f.id === "country" || f.id === "category"
              ? { ...f, isDisabled: true }
              : f
          );
          return filters;
        }
        if (countryVal || categoryVal) {
          filters = filters.map((f) =>
            f.id === "source" ? { ...f, isDisabled: true } : f
          );
          return filters;
        }
      }
      return filters;
    }, [filterList, endPointFilter]);

  return (
    <TopWrapper>
      <HeaderWrapper>
        <StyledHeader>Filters</StyledHeader>
        {console.log(filterList)}
      </HeaderWrapper>
      <Body>
        <FilterRow
          header={endPointFilter.header}
          value={endPointFilter.current.name}
          onClickRow={() => onClickHeader(endPointFilter)}
          key={-1}
        />
        {filtersToDisplay.map((filter, idx) => (
          <FilterRow
            header={filter.header}
            value={filter.current?.value ? filter.current.name : "All"}
            isDefaultValue={!filter.current}
            onClickRow={() => onClickHeader(filter)}
            key={idx}
            isDisabled={filter.isDisabled}
          />
        ))}
      </Body>
    </TopWrapper>
  );
};
