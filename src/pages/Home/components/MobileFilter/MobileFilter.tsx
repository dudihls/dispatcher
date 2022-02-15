import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MobileFilterModal } from "../../../../components/MobileFilterModal/MobileFilterModal";
import {
  countryOptions,
  EndPoints,
  langList,
} from "../../../../services/utils";
import { RootState } from "../../../../store";
import { filtersActions } from "../../../../store/filters-slice";
import { EndPointType, Option } from "../../../../types";
const URL = "https://newsapi.org/v2/top-headlines/sources";

export const MoblieFilter: React.FC<{
  onClose: () => any;
  isOpen: boolean;
}> = ({ onClose, isOpen }) => {
  const {
    searchQuery,
    country,
    endpoint,
    category,
    selectedSource,
    sortBy,
    language,
  } = useSelector((state: RootState) => state.filters);
  const [sourcesList, setSourcesList] = useState<Option[]>([
    { name: "All", value: "" },
  ]);

  const getSourcesList = useCallback(async () => {
    return axios({
      url: URL,
      method: "GET",
      params: { apiKey: process.env.REACT_APP_API_KEY },
    }).then((res) => {
      return res.data.sources.map((source: { id: string; name: string }) => ({
        value: source.id,
        name: source.name,
      }));
    });
  }, []);

  useEffect(() => {
    (async () => {
      if (sourcesList.length > 1) return;
      const sources = await getSourcesList();
      setSourcesList((prev) => prev.concat(sources));
    })();
  }, [getSourcesList,sourcesList.length]);

  const dispatch = useDispatch();

  const filters = {
    [EndPoints.EVERYTHING]: [
      {
        id: "sortBy",
        header: "Sort By",
        current: sortBy,
        options: [
          { name: "Relevancy", value: "relevancy" },
          { name: "Popularity", value: "popularity" },
          { name: "Published at", value: "publishedAt" },
        ],
      },
      {
        id: "source",
        header: "Sources",
        current: selectedSource,
        options: sourcesList,
      },
      {
        id: "lang",
        header: "Language",
        current: language,
        options: langList,
      },
      {
        id: "dates",
        header: "Dates",
        current: { name: "", value: null },
        options: [],
      },
    ],
    [EndPoints.HEADLINES]: [
      {
        id: "country",
        header: "Country",
        current: country,
        options: countryOptions,
      },
      {
        id: "category",
        header: "Category",
        current: category,
        options: [{ name: "All", value: "" }].concat(
          [
            "Business",
            "Entertainment",
            "General",
            "Health",
            "Science",
            "Sports",
            "Technology",
          ].map((option) => ({ name: option, value: option }))
        ),
      },
      {
        id: "source",
        header: "Sources",
        current: selectedSource,
        options: sourcesList,
      },
    ],
  };

  const onSubmit: (
    endPointOption: EndPointType,
    filtersOptions: { [key: string]: Option }
  ) => any = (endpoint, results) => {
    dispatch(filtersActions.setMobileFilter({ endpoint, results }));
    onClose();
  };

  return (
    <MobileFilterModal
      isOnSearchMode={!!searchQuery}
      endPointFilter={{
        header: "Search in",
        options: [
          { name: "Everything", value: EndPoints.EVERYTHING },
          { name: "Top Headlines", value: EndPoints.HEADLINES },
        ],
        current: endpoint,
      }}
      onSubmitResults={onSubmit}
      filters={filters}
      open={isOpen}
    />
  );
};
