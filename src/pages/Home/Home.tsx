import { Card } from "../../components/Card/Card";
import { theme } from "../../global-styles/theme";
import { GlobalStyles } from "../../global-styles/Global";
import { Navbar } from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { DesktopFilter } from "../../components/DesktopFilter/DesktopFilter";
import { Modal } from "../../components/Modal/Modal";
import { MobileFilterModal } from "../../components/MobileFilterModal/MobileFilterModal";
import { MobileFilterBar } from "../../components/MobileFilterBar/MobileFilterBar";
import { AreaGraph, BarGraph, DoughnutGraph } from "../../components/Graphs";
import {
  AppHeader,
  FiltersContainer,
  GraphsContainer,
  Layout,
  MainLayout,
  SimpleWrapper,
  Spacer,
  StyledHeader,
} from "./style";
import { Articles } from "./components/Articles/Articles";
import axios from "axios";
import {
  countryCodeToString,
  countryOptions,
  stringToCountryCode,
} from "../../services/utils";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const doughnutData = [
  { name: "a", value: 12 },
  { name: "b", value: 19 },
  { name: "c", value: 3 },
  { name: "d", value: 5 },
];
const barData = [
  {
    name: "APR",
    value: 4000,
  },

  {
    name: "AUG",
    value: 5000,
  },
  {
    name: "AUG",
    value: 5000,
  },
  {
    name: "AUG",
    value: 5000,
  },
  { name: "asshjf", value: 1234 },
  { name: "bsadf", value: 12349 },
  { name: "cs", value: 3333 },
  { name: "dff", value: 25 },
];
const areaData = [
  {
    name: "Jan",
    value: 2400,
  },
  {
    name: "Fab",
    value: 2210,
  },
  {
    name: "Mar",
    value: 2290,
  },
  {
    name: "APR",
    value: 4000,
  },

  {
    name: "AUG",
    value: 5000,
  },
  {
    name: "AUG",
    value: 5000,
  },
  {
    name: "AUG",
    value: 5000,
  },
];

const filters = [
  {
    header: "Search in",
    value: "Everything",
    options: ["Everything", "Top headings"],
  },
  {
    header: "Sources",
    value: "",
    options: ["CSS", "ACDME", "CNN", "JavaScript"],
  },
];

export const Home: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string | null>();
  const [userCountry, setUserCountry] = useState<string | null>(null);
  const [userCountryStorage, setUserCountryStorage] = useLocalStorage(
    "user_country",
    ""
  );

  const topHeadlinesFilters = [
    {
      initialValue: "Country",
      options: countryOptions,
    },
    { initialValue: "Category", options: ["23"] },
    {
      initialValue: "Sources",
      options: ["Fetch"],
    },
  ];

  useEffect(() => {
    if (userCountryStorage) {
      setUserCountry(userCountryStorage);
      return;
    }
    console.log("run");

    axios
      .get(
        `https://ipinfo.io/json?token=${process.env.REACT_APP_IP_INFO_TOKEN}`
      )
      .then((res) => {
        const { country } = res.data;
        const userCountryCode = country.toLowerCase();
        setUserCountryStorage(userCountryCode);
        setUserCountry(userCountryCode);
      });
  }, []);

  return (
    <Layout>
      <GlobalStyles />
      <AppHeader>
        <Navbar onSubmitSearch={(val) => setSearchValue(val)} />
        {modal && (
          <Modal
            ToggleModal={() => {
              setModal(false);
              setIsMobileFilterOpen(false);
            }}
          />
        )}
        <MobileFilterModal filters={filters} open={isMobileFilterOpen} />
        <MobileFilterBar
          onToggleFilter={() => {
            setModal(true);
            setIsMobileFilterOpen(true);
          }}
        />
      </AppHeader>
      <MainLayout>
        <FiltersContainer>
          <DesktopFilter dropdowns={topHeadlinesFilters} />
        </FiltersContainer>
        <SimpleWrapper direction="col">
          <Spacer />
          <StyledHeader>
            Top Headlines in {userCountry && countryCodeToString[userCountry]}
          </StyledHeader>
          <SimpleWrapper>
            <Articles searchQuery={searchValue} />

            <GraphsContainer>
              <DoughnutGraph
                innerText="Sum"
                header="Sources"
                data={doughnutData}
                colorPalette={theme.graphColorPalette.doughnut}
              />
              <AreaGraph header="Dates" data={areaData}></AreaGraph>
              <BarGraph data={barData} header="Tags" />
            </GraphsContainer>
          </SimpleWrapper>
        </SimpleWrapper>
      </MainLayout>
    </Layout>
  );
};
