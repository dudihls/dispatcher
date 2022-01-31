import axios from "axios";
import { filtersActions } from "./filters-slice";

const URL = "https://newsapi.org/v2/top-headlines/sources";

export const fetchSourcesList = (isEverything: boolean) => {
  return async (dispatch: any, getState: any) => {
    const {
      country: { value: country },
      category: { value: category },
    } = getState().filters;
    try {
      console.log(isEverything);
      const response = await axios({
        url: URL,
        method: "GET",
        params: isEverything
          ? {
              apiKey: process.env.REACT_APP_API_KEY,
            }
          : {
              country,
              category,
              apiKey: process.env.REACT_APP_API_KEY,
            },
      });

      const sources = response.data.sources.map(
        (source: { id: string; name: string }) => ({
          value: source.id,
          name: source.name,
        })
      );
      dispatch(filtersActions.setSourcesList(sources));
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };
};
