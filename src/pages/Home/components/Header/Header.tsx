import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { countryCodeToString, EndPoints } from "../../../../services/utils";
import { RootState } from "../../../../store";
import { filtersActions } from "../../../../store/filters-slice";
import { StyledHeader, StyledTotalResults } from "./style";

export const Header: React.FC<{
  totalResults: number;
}> = ({ totalResults }) => {
  const [userCountryStorage, setUserCountryStorage] = useLocalStorage(
    "user_country",
    ""
  );
  const dispatch = useDispatch();
  const { country, endpoint, category, selectedSource } = useSelector(
    (state: RootState) => state.filters
  );

  useEffect(() => {
    if (
      endpoint.value !== EndPoints.HEADLINES ||
      country.value ||
      category.value ||
      selectedSource.value
    )
      return;
    if (userCountryStorage) {
      dispatch(
        filtersActions.setIntialCountry({
          name: countryCodeToString[userCountryStorage],
          value: userCountryStorage,
        })
      );
      return;
    }

    axios
      .get(
        `https://ipinfo.io/json?token=${process.env.REACT_APP_IP_INFO_TOKEN}`
      )
      .then((res) => {
        const { country } = res.data;
        const userCountryCode = country.toLowerCase();
        setUserCountryStorage(userCountryCode);
      });
  }, [
    userCountryStorage,
    dispatch,
    setUserCountryStorage,
    endpoint,
    country,
    category,
    selectedSource,
  ]);
  return country.value ? (
    <StyledHeader>Top Headlines {country.name}</StyledHeader>
  ) : (
    <StyledTotalResults>{totalResults} Total results</StyledTotalResults>
  );
};
