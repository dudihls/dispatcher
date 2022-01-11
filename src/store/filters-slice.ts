import { createSlice } from "@reduxjs/toolkit";
import { EndPoints } from "../services/utils";

interface IFilters {
  endpoint: "top-headlines" | "everything";
  category: string | null;
  date: {
    startDate: Date | null;
    endDate: Date | null;
  };
  country: string | null;
  sources: string | string[] | null;
  sortBy: string | null;
  language: string | null;
  searchQuery: string | null;
}

const initialState = {
  endpoint: "top-headlines",
  category: null,
  date: {
    startDate: null,
    endDate: null,
  },
  country: null,
  sources: null,
  sortBy: null,
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
            endpoint: "top-headlines",
            searchQuery: state.searchQuery,
            country: state.country,
          });
        case EndPoints.EVERYTHING:
          return (state = {
            ...initialState,
            endpoint: "everything",
            searchQuery: state.searchQuery,
            country: state.country,
          });
      }
    },
    setCountry(state, action) {
      state.country = action.payload;
    },
    setSearchQuery(state, action) {
      if (action.payload !== state.searchQuery)
        state.searchQuery = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice;
