import { MouseEvent, useEffect, useMemo, useState } from "react";
import { ButtonWrapper, Container, StyledFooter } from "./style";
import { Button } from "../Button/Button";
import { MobileFilterMenu } from "./MobileFilterMenu";
import { MobileFilterOptions } from "./MobileFilterOptions";
import { createPortal } from "react-dom";
import { EndPoints } from "../../services/utils";
import { EndPointType, Option } from "../../types";

export type FilterProps = {
  id: string;
  header: string;
  options: Option[];
  current: Option;
};

export type EndPointFilter = {
  header: string;
  options: EndPointType[];
  current: EndPointType;
};

export type Filters = {
  [key in EndPoints]: FilterProps[];
};
interface MobileFilterModalProps {
  isOnSearchMode: boolean;
  endPointFilter: EndPointFilter;
  filters: Filters;
  open: boolean;
  onSubmitResults?: (
    endPointOption: EndPointType,
    filtersOptions: { [key: string]: Option }
  ) => any;
}

export const MobileFilterModal: React.FC<MobileFilterModalProps> = ({
  open,
  filters,
  onSubmitResults,
  endPointFilter,
  isOnSearchMode,
}) => {
  const [isFilterMenu, setIsFilterMenu] = useState<Boolean>(true);
  const [headlinesfiltersToSubmit, setHeadlinesFiltersToSubmit] = useState(
    filters[EndPoints.HEADLINES]
  );
  const [everythingfiltersToSubmit, setEverythingFiltersToSubmit] = useState(
    filters[EndPoints.EVERYTHING]
  );
  const [endPointFilterState, setEndPointFilterState] =
    useState<EndPointFilter>(endPointFilter);
  const [currFilterToDisplay, setCurrFilterToDisplay] = useState<
    FilterProps | EndPointFilter
  >();
  const isHeadlines = useMemo(
    () => endPointFilterState.current.value === EndPoints.HEADLINES,
    [endPointFilterState]
  );

  useEffect(() => {
    if (open) {
      setHeadlinesFiltersToSubmit(filters[EndPoints.HEADLINES]);
      setEverythingFiltersToSubmit(filters[EndPoints.EVERYTHING]);
      setEndPointFilterState(endPointFilter);
      setIsFilterMenu(true);
    }
  }, [open, filters, endPointFilter]);

  const toggleIsFilterMenu = () => setIsFilterMenu(!isFilterMenu);

  const onClickHeader = (filter: FilterProps | EndPointFilter) => {
    setCurrFilterToDisplay(filter);
    toggleIsFilterMenu();
  };
  const isEndPointType = (
    option: Option | EndPointType
  ): option is EndPointType =>
    option.value === EndPoints.EVERYTHING ||
    option.value === EndPoints.HEADLINES;

  const onClickOption = (option: Option | EndPointType, header: string) => {
    if (isEndPointType(option)) {
      setEndPointFilterState((prev) => {
        return { ...prev, current: option };
      });
    } else {
      if (endPointFilterState.current.value === EndPoints.EVERYTHING) {
        const newEverythingFiltersToSet = everythingfiltersToSubmit.map(
          (filter) =>
            header === filter.header ? { ...filter, current: option } : filter
        );
        setEverythingFiltersToSubmit(newEverythingFiltersToSet);
      } else {
        const newHeadlinesFiltersToSet = headlinesfiltersToSubmit.map(
          (filter) =>
            header === filter.header ? { ...filter, current: option } : filter
        );
        setHeadlinesFiltersToSubmit(newHeadlinesFiltersToSet);
      }
    }
    toggleIsFilterMenu();
  };

  const filterToSubmit = useMemo(
    () => (isHeadlines ? headlinesfiltersToSubmit : everythingfiltersToSubmit),
    [isHeadlines, headlinesfiltersToSubmit, everythingfiltersToSubmit]
  );

  const onSubmit = (ev: MouseEvent) => {
    ev.preventDefault();

    const filterToSubmitParsed = filterToSubmit.reduce(
      (a, filter) => ({ ...a, [filter.id]: filter.current }),
      {}
    );
    onSubmitResults &&
      onSubmitResults(endPointFilterState.current, filterToSubmitParsed);
  };

  const isButtonDisabled = useMemo(() => {
    if (isHeadlines) return !filterToSubmit.some((f) => !!f.current.value);
    else {
      const sourceVal = filterToSubmit.find((f) => f.id === "source")!.current
        .value;
      if (!sourceVal && !isOnSearchMode) {
        return true;
      } else return false;
    }
  }, [filterToSubmit, isHeadlines, isOnSearchMode]);

  const root = document.getElementById("root")!;

  return createPortal(
    <Container open={open}>
      {isFilterMenu ? (
        <>
          <MobileFilterMenu
            endPointFilter={endPointFilterState}
            filterList={filterToSubmit}
            onClickHeader={onClickHeader}
          />
          <StyledFooter>
            <ButtonWrapper>
              <Button
                isDisabled={isButtonDisabled}
                size="md"
                onClick={onSubmit}
              >
                VIEW RESULTS
              </Button>
            </ButtonWrapper>
          </StyledFooter>
        </>
      ) : (
        currFilterToDisplay && (
          <MobileFilterOptions
            filter={currFilterToDisplay}
            onClickOption={onClickOption}
            onGoBack={toggleIsFilterMenu}
          />
        )
      )}
    </Container>,
    root
  );
};
