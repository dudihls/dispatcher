import { createSlice } from "@reduxjs/toolkit";
import { EndPoints } from "../services/utils";

interface IFilters {
  endpoint: EndPoints.HEADLINES | EndPoints.EVERYTHING;
  category: string | null;
  date: {
    startDate: Date | null;
    endDate: Date | null;
  };
  country: string | null;
  sourcesList: { name: string; value: string }[];
  selectedSource: string | null;
  sortBy: "relevancy" | "popularity" | "publishedAt";
  language: string | null;
  searchQuery: string | null;
}

const initialState = {
  endpoint: EndPoints.HEADLINES,
  category: null,
  date: {
    startDate: null,
    endDate: null,
  },
  country: null,
  sourcesList: [],
  selectedSource: null,
  sortBy: "publishedAt",
  language: null,
  searchQuery: "",
} as IFilters;

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeEndpoint(state, action) {
      switch (action.payload) {
        case EndPoints.HEADLINES:
          return (state = {
            ...initialState,
            endpoint: EndPoints.HEADLINES,
            searchQuery: state.searchQuery,
          });
        case EndPoints.EVERYTHING:
          return (state = {
            ...initialState,
            endpoint: EndPoints.EVERYTHING,
            searchQuery: state.searchQuery,
          });
      }
    },
    setCountry(state, action) {
      return { ...state, country: action.payload, selectedSource: null };
    },
    setSearchQuery(state, action) {
      if (action.payload !== state.searchQuery)
        state.searchQuery = action.payload;
    },
    setCategory(state, action) {
      return { ...state, category: action.payload, selectedSource: null };
    },
    setSelectedSource(state, action) {
      console.log(action.payload);

      return {
        ...state,
        selectedSource: action.payload,
        country: null,
        category: null,
      };
    },
    setSourcesList(state, action) {
      state.sourcesList = [...action.payload];
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice;
