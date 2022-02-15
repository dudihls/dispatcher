import { createSlice } from "@reduxjs/toolkit";
import { EndPoints } from "../services/utils";
import { EndPointType, Option } from "../types";

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
  fullSourceList: { name: string; value: string }[];
}

const initialOption: Option = { name: "All", value: "" };

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
  fullSourceList: [],
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
      if (action.payload === state.country) return;
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
      if (action.payload === state.category) return;
      return {
        ...state,
        category: action.payload,
        selectedSource: initialOption,
      };
    },
    setIntialCountry(state, action) {
      state.country = action.payload;
    },
    setSelectedSource(state, action) {
      if (action.payload === state.selectedSource) return;
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
    setFullSourceList(state, action) {
      state.fullSourceList = [...action.payload];
    },
    setLanguage(state, action) {
      if (action.payload === state.language) return;
      state.language = action.payload;
    },
    setSortBy(state, action) {
      if (action.payload === state.sortBy) return;

      state.sortBy = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
    setMobileFilter(state, action) {
      const { endpoint, results } = action.payload;

      switch (endpoint.value) {
        case EndPoints.HEADLINES:
          return (state = {
            ...initialState,
            searchQuery: state.searchQuery,
            country: results.country,
            endpoint: endpoint,
            category: results.category,
            selectedSource: results.source,
          });
        case EndPoints.EVERYTHING:
          return (state = {
            ...initialState,
            searchQuery: state.searchQuery,
            sortBy: results.sortBy,
            endpoint: endpoint,
            language: results.lang,
            selectedSource: results.source,
          });
      }
    },
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice;
