import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { countryCodeToString } from "../../../../services/utils";
import { RootState } from "../../../../store";
import { filtersActions } from "../../../../store/filters-slice";
import { StyledHeader } from "./style";

export const Header: React.FC = () => {
  const [userCountryStorage, setUserCountryStorage] = useLocalStorage(
    "user_country",
    ""
  );
  const dispatch = useDispatch();
  const { country, endpoint } = useSelector(
    (state: RootState) => state.filters
  );

  useEffect(() => {
    if (userCountryStorage) {
      dispatch(
        filtersActions.setCountry({
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
  }, [userCountryStorage, dispatch, setUserCountryStorage, endpoint]);
  return (
    <>
      {country && <StyledHeader>Top Headlines in {country.name}</StyledHeader>}
    </>
  );
};
