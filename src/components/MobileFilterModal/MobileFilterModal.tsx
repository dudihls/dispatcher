import { MouseEvent, useState } from "react";
import { ButtonWrapper, Container, StyledFooter } from "./style";
import { Button } from "../Button/Button";
import { MobileFilterMenu } from "./MobileFilterMenu";
import { MobileFilterOptions } from "./MobileFilterOptions";

export type FilterProps = {
  header: string;
  options: string[];
  value: string;
};

interface MobileFilterModalProps {
  filters: FilterProps[];
  open: boolean;
  onChangeOption?: (headerIdx: number, optionIdx: number) => any;
  onSubmitResults?: (filters: FilterProps[]) => any;
}

export const MobileFilterModal: React.FC<MobileFilterModalProps> = ({
  open,
  filters,
  onSubmitResults,
}) => {
  const [isFilterMenu, setIsFilterMenu] = useState<Boolean>(true);
  const [filtersToSubmit, setFiltersToSubmit] =
    useState<typeof filters>(filters);
  const [filterDisplayedIdx, setFilterDisplayedIdx] = useState<number>(0);

  const onChangeOption = (filterIdx: number, OptionIdx: number) => {
    const filterCopy = { ...filters[filterIdx] };
    filterCopy.value = filterCopy.options[OptionIdx];
    setFiltersToSubmit((prevFilters) => {
      prevFilters[filterIdx] = filterCopy;
      return prevFilters;
    });
  };

  const toggleIsFilterMenu = () => setIsFilterMenu(!isFilterMenu);

  const onClickHeader = (idx: number) => {
    toggleIsFilterMenu();
    setFilterDisplayedIdx(idx);
  };

  const onClickOption = (OptionIdx: number) => {
    onChangeOption(filterDisplayedIdx, OptionIdx);
    toggleIsFilterMenu();
  };

  const onSubmit = (ev: MouseEvent) => {
    ev.preventDefault();
    onSubmitResults && onSubmitResults(filtersToSubmit);
  };

  return (
    <Container open={open}>
      {isFilterMenu ? (
        <MobileFilterMenu
          filterList={filtersToSubmit}
          onClickHeader={onClickHeader}
        />
      ) : (
        <MobileFilterOptions
          filter={filtersToSubmit[filterDisplayedIdx]}
          onClickOption={onClickOption}
          onGoBack={toggleIsFilterMenu}
        />
      )}
      <StyledFooter>
        <ButtonWrapper>
          <Button size="md" onClick={onSubmit}>
            VIEW RESULTS
          </Button>
        </ButtonWrapper>
      </StyledFooter>
    </Container>
  );
};
