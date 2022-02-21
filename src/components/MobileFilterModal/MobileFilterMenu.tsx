import { useMemo, useState } from "react";
import { EndPoints } from "../../services/utils";
import { FilterRow } from "./FilterRow/FilterRow";
import { EndPointFilter, FilterProps } from "./MobileFilterModal";
import { Body, HeaderWrapper, StyledHeader, TopWrapper } from "./style";
import Alert from "@mui/material/Alert";
import { DateFilterRow } from "./FilterRow/DateFilterRow";

type MobileFilterMenuProps = {
  filterList: FilterProps[];
  currDate: { startDate: Date | null; endDate: Date | null };
  onClickHeader: (filter: FilterProps | EndPointFilter) => any;
  endPointFilter: EndPointFilter;
  onSubmitDate: (startDate: Date | null, endDate: Date | null) => any;
};

export const MobileFilterMenu: React.FC<MobileFilterMenuProps> = ({
  filterList,
  endPointFilter,
  onClickHeader,
  currDate,
  onSubmitDate,
}) => {
  const [msg, setMsg] = useState("");
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
          setMsg("You can't mix source field with other fields.");
          return filters;
        }
        if (countryVal || categoryVal) {
          filters = filters.map((f) =>
            f.id === "source" ? { ...f, isDisabled: true } : f
          );
          setMsg("You can't mix other fields with source field.");
          return filters;
        }
      }
      return filters;
    }, [filterList, endPointFilter]);

  return (
    <TopWrapper>
      <HeaderWrapper>
        <StyledHeader>Filters</StyledHeader>
      </HeaderWrapper>
      <Body>
        <FilterRow
          header={endPointFilter.header}
          value={endPointFilter.current.name}
          onClickRow={() => onClickHeader(endPointFilter)}
          key={-1}
        />
        {filtersToDisplay.map((filter, idx) =>
          filter.id === "date" ? (
            <DateFilterRow
              onSubmitDate={onSubmitDate}
              currDate={currDate}
              header={filter.header}
            />
          ) : (
            <FilterRow
              header={filter.header}
              value={filter.current?.value ? filter.current.name : "All"}
              isDefaultValue={!filter.current}
              onClickRow={() => onClickHeader(filter)}
              key={idx}
              isDisabled={filter.isDisabled}
            />
          )
        )}
        {msg && <Alert severity="info">{msg}</Alert>}
      </Body>
    </TopWrapper>
  );
};
