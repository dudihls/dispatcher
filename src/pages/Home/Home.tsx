import { theme } from "../../global-styles/theme";
import { GlobalStyles } from "../../global-styles/Global";
import { Navbar } from "../../components/Navbar/Navbar";
import { lazy, Suspense, useCallback, useMemo, useState } from "react";
import { DesktopFilter } from "./components/DesktopFilter/DesktopFilter";
import { Modal } from "../../components/Modal/Modal";
import { MobileFilterModal } from "../../components/MobileFilterModal/MobileFilterModal";
import { MobileFilterBar } from "../../components/MobileFilterBar/MobileFilterBar";
import { AreaGraph, BarGraph, DoughnutGraph } from "../../components/Graphs";
import {
  AppHeader,
  FiltersContainer,
  GraphArticlesContainer,
  GraphsContainer,
  Layout,
  MainLayout,
  SimpleWrapper,
  Spacer,
} from "./style";
import { EndPoints } from "../../services/utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { filtersActions } from "../../store/filters-slice";
import { CardsSkeletonList } from "../../components/Skeletons/CardsSkeleton/CardSkeletonList";
import { Header } from "./components/Header/Header";
import { MoblieSearchModal } from "../../components/MoblieSearchModal/MoblieSearchModal";
import { useMediaQuery } from "react-responsive";
import { ArticlesCards } from "./components/Articles/types";
import dayjs from "dayjs";

const LazyArticles = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import("./components/Articles/Articles");
});

const mappingGraphResultObjectToArray = (result: {
  [key: string]: number;
}): GraphData => {
  return Object.keys(result).map((name) => {
    const value = result[name];
    let data: { name: string; value: number };
    data = { name, value };
    return data;
  });
};

const barDataMock = [
  {
    name: "Sports",
    value: 4000,
  },

  {
    name: "News",
    value: 5000,
  },
  {
    name: "Covid-19",
    value: 5000,
  },
  {
    name: "Weather",
    value: 5000,
  },
  { name: "Software", value: 1234 },
  { name: "Economy", value: 12349 },
  { name: "Politics", value: 3333 },
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

type GraphData = { name: string; value: number }[];

export const Home: React.FC = () => {
  console.log("render");

  const [dougnutData, setDougnutData] = useState<{
    data: GraphData;
    sum: number;
  } | null>(null);
  const [areaData, setAreaData] = useState<GraphData | null>(null);
  const [barData, setBarData] = useState<GraphData | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const createGraphsData = useCallback((articles: ArticlesCards) => {
    if (articles.length === 0) {
      setAreaData(null);
      setDougnutData(null);
      setBarData(null);
      return;
    }

    let sum = 0;
    var dougnhutResult: { [key: string]: number } = {};
    var areResult: { [key: string]: number } = {
      Jan: 0,
      Feb: 0,
      Mar: 0,
      Apr: 0,
      May: 0,
      Jun: 0,
      Jul: 0,
      Aug: 0,
      Sep: 0,
      Oct: 0,
      Nov: 0,
      Dec: 0,
    };
    articles.forEach((article) => {
      sum++;

      if (!dougnhutResult.hasOwnProperty(article.source)) {
        dougnhutResult[article.source] = 1;
      } else dougnhutResult[article.source] += 1;

      let property = dayjs(article.date).format(`MMM`);
      areResult[property] += 1;
    });

    let dougnutData = mappingGraphResultObjectToArray(dougnhutResult);
    let areaData = mappingGraphResultObjectToArray(areResult);

    setDougnutData({ data: dougnutData, sum });
    setAreaData(areaData);
    setBarData(barDataMock);
    setIsLoading(false);
  }, []);

  const [modal, setModal] = useState<boolean>(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  const isMobile = useMediaQuery({
    query: theme.device.mobile,
  });
  const isDesktop = useMediaQuery({
    query: theme.device.desktop,
  });

  const dispatch = useDispatch();
  const {
    endpoint: { value: endpoint },
  } = useSelector((state: RootState) => state.filters);

  const isTopHeadlines = useMemo(
    () => endpoint === EndPoints.HEADLINES,
    [endpoint]
  );

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  return (
    <Layout>
      <GlobalStyles />
      <AppHeader>
        <Navbar
          onClickSearchIcon={() => setIsSearchModalOpen((prev) => !prev)}
          onSubmitSearch={(val) => dispatch(filtersActions.setSearchQuery(val))}
          onChangeEndpoint={(endpoint) =>
            dispatch(filtersActions.changeEndpoint(endpoint))
          }
        />
        {isMobile && (
          <MoblieSearchModal
            onSubmit={(val) => dispatch(filtersActions.setSearchQuery(val))}
            isOpen={isSearchModalOpen}
            onClose={() => {
              dispatch(filtersActions.setSearchQuery(""));
              setIsSearchModalOpen((prev) => !prev);
            }}
          />
        )}
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
          <DesktopFilter isTopHeadlines={isTopHeadlines} />
        </FiltersContainer>
        <SimpleWrapper direction="col">
          <Spacer />
          {isTopHeadlines && <Header />}
          <GraphArticlesContainer width="100%">
            <Suspense fallback={<CardsSkeletonList amount={8} />}>
              <LazyArticles createGraphsData={createGraphsData} />
            </Suspense>
            {isDesktop && (
              <GraphsContainer>
                <DoughnutGraph
                  isLoading={isLoading}
                  innerText={dougnutData?.sum + ""}
                  header="Sources"
                  data={dougnutData?.data}
                  colorPalette={theme.graphColorPalette.doughnut}
                />
                <AreaGraph
                  isLoading={isLoading}
                  header="Dates"
                  data={areaData}
                ></AreaGraph>
                <BarGraph isLoading={isLoading} data={barData} header="Tags" />
              </GraphsContainer>
            )}
          </GraphArticlesContainer>
        </SimpleWrapper>
      </MainLayout>
    </Layout>
  );
};
