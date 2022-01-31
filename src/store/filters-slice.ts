import { createSlice } from "@reduxjs/toolkit";
import { EndPoints } from "../services/utils";

export type Option = {
  name: string | null;
  value: string | null;
};

export type EndPointType =
  | { value: EndPoints.EVERYTHING; name: "Everything" }
  | { value: EndPoints.HEADLINES; name: "Top Headlines" };

interface IFilters {
  endpoint: EndPointType;
  category: Option;
  date: {
    startDate: string | null;
    endDate: string | null;
  };
  country: Option;
  sourcesList: { name: string; value: string }[];
  selectedSource: Option;
  sortBy: Option;
  language: Option;
  searchQuery: string | null;
}

const initialOption: Option = { name: null, value: null };

const initialState = {
  endpoint: { value: EndPoints.HEADLINES, name: "Top Headlines" },
  category: initialOption,
  date: {
    startDate: null,
    endDate: null,
  },
  country: initialOption,
  sourcesList: [],
  selectedSource: initialOption,
  sortBy: initialOption,
  language: initialOption,
  searchQuery: "",
} as IFilters;

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeEndpoint(state, action) {
      const { value } = action.payload;
      if (value === state.endpoint.value) return;
      switch (value) {
        case EndPoints.HEADLINES:
          return (state = {
            ...initialState,
            endpoint: action.payload,
            searchQuery: state.searchQuery,
          });
        case EndPoints.EVERYTHING:
          return (state = {
            ...initialState,
            endpoint: action.payload,
            searchQuery: state.searchQuery,
          });
      }
    },
    setCountry(state, action) {
      return {
        ...state,
        country: action.payload,
        selectedSource: initialState.selectedSource,
      };
    },
    setSearchQuery(state, action) {
      if (action.payload !== state.searchQuery)
        state.searchQuery = action.payload;
    },
    setCategory(state, action) {
      return {
        ...state,
        category: action.payload,
        selectedSource: initialOption,
      };
    },
    setSelectedSource(state, action) {
      return {
        ...state,
        selectedSource: action.payload,
        country: initialOption,
        category: initialOption,
      };
    },
    setSourcesList(state, action) {
      state.sourcesList = [...action.payload];
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice;
