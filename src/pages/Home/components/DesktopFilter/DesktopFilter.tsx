import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DropDown } from "../../../../components/Dropdown/Dropdown";
import { countryOptions, langList } from "../../../../services/utils";
import { RootState } from "../../../../store";
import { filtersActions, Option } from "../../../../store/filters-slice";
import { StyledContainer } from "./style";

interface DesktopFilterProps {
  isTopHeadlines: boolean;
}

export const DesktopFilter: React.FC<DesktopFilterProps> = ({
  isTopHeadlines,
}) => {
  const { sourcesList, country, category, selectedSource, sortBy, language } =
    useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();

  const countryFilter = useMemo(
    () => ({
      initialValue: "Country",
      currValue: country,
      options: countryOptions,
      onChange: (country: Option) =>
        dispatch(filtersActions.setCountry(country)),
    }),
    [country, dispatch]
  );

  const categoryFilter = useMemo(
    () => ({
      initialValue: "Category",
      currValue: category,
      options: [
        "Business",
        "Entertainment",
        "General",
        "Health",
        "Science",
        "Sports",
        "Technology",
      ].map((option) => ({ name: option, value: option })),
      onChange: (category: Option) =>
        dispatch(filtersActions.setCategory(category)),
    }),
    [category, dispatch]
  );

  const sourceFilter = useMemo(
    () => ({
      initialValue: "Sources",
      currValue: selectedSource,
      options: sourcesList,
      onChange: (source: Option) =>
        dispatch(filtersActions.setSelectedSource(source)),
    }),
    [sourcesList, selectedSource, dispatch]
  );

  const sortByFilter = useMemo(
    () => ({
      initialValue: "Sort by",
      currValue: sortBy,
      options: [
        { name: "Relevancy", value: "relevancy" },
        { name: "Popularity", value: "popularity" },
        { name: "Published at", value: "publishedAt" },
      ],
      onChange: (sortBy: Option) => dispatch(filtersActions.setSortBy(sortBy)),
    }),
    [dispatch, sortBy]
  );

  const langFilter = useMemo(
    () => ({
      initialValue: "Language",
      currValue: language,
      options: langList,
      onChange: (language: Option) =>
        dispatch(filtersActions.setLanguage(language)),
    }),
    [dispatch, language]
  );
  const dateFilter = useMemo(
    () => ({
      initialDate: new Date(),
      onSubmitDate: (startDate: Date | null, endDate: Date | null) => {
        const payload = {
          startDate: startDate?.toDateString(),
          endDate: endDate?.toDateString(),
        };
        dispatch(filtersActions.setDate(payload));
      },
    }),
    [dispatch]
  );

  return (
    <StyledContainer>
      {isTopHeadlines ? (
        <>
          <DropDown {...countryFilter} />
          <DropDown {...categoryFilter} />
          <DropDown {...sourceFilter} />
        </>
      ) : (
        <>
          <DropDown {...sortByFilter} />
          <DropDown {...dateFilter} />
          <DropDown {...sourceFilter} />
          <DropDown {...langFilter} />
        </>
      )}
    </StyledContainer>
  );
};
