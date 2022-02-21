import { theme } from "../../global-styles/theme";
import { GlobalStyles } from "../../global-styles/Global";
import { Navbar } from "../../components/Navbar/Navbar";
import { lazy, Suspense, useCallback, useMemo, useState } from "react";
import { DesktopFilter } from "./components/DesktopFilter/DesktopFilter";
import { Modal } from "../../components/Modal/Modal";
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
import { MoblieFilter } from "./components/MobileFilter/MobileFilter";
import { Alert, Snackbar } from "@mui/material";

const LazyArticles = lazy(() => import("./components/Articles/Articles"));

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

type GraphData = { name: string; value: number }[];

export const Home: React.FC = () => {
  const [dougnutData, setDougnutData] = useState<{
    data: GraphData;
    sum: number;
  } | null>(null);
  const [areaData, setAreaData] = useState<GraphData | null>(null);
  const [barData, setBarData] = useState<GraphData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState<boolean>(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const isMobile = useMediaQuery({
    query: theme.device.mobile,
  });
  const isDesktop = useMediaQuery({
    query: theme.device.desktop,
  });
  const dispatch = useDispatch();

  const createGraphsData = useCallback((articles: ArticlesCards, firstLoad) => {
    if (firstLoad) {
      setIsLoading(true);
      return;
    }

    if (articles.length === 0) {
      setAreaData(null);
      setDougnutData(null);
      setBarData(null);
      setIsLoading(false);
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
    var barResult: { [key: string]: number } = {
      Sports: 0,
      Tech: 0,
      Health: 0,
      "Covid-19": 0,
      Business: 0,
      Vehicles: 0,
    };

    articles.forEach((article) => {
      sum++;

      if (!dougnhutResult.hasOwnProperty(article.source)) {
        dougnhutResult[article.source] = 1;
      } else dougnhutResult[article.source] += 1;

      let property = dayjs(article.date).format(`MMM`);
      areResult[property] += 1;

      article.tags && article.tags.forEach((t) => (barResult[t] += 1));
    });

    let dougnutData = mappingGraphResultObjectToArray(dougnhutResult);
    let areaData = mappingGraphResultObjectToArray(areResult);
    let barData = mappingGraphResultObjectToArray(barResult);

    setDougnutData({ data: dougnutData, sum });
    setAreaData(areaData);
    setBarData(barData);
    setIsLoading(false);
  }, []);

  const { endpoint, toaster } = useSelector(
    (state: RootState) => state.filters
  );

  const isTopHeadlines = useMemo(
    () => endpoint.value === EndPoints.HEADLINES,
    [endpoint]
  );
  const onCloseToaster = () => {
    dispatch(filtersActions.setToaster({ msg: toaster.msg, isOpen: false }));
  };

  return (
    <Layout>
      <GlobalStyles />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={toaster.isOpen}
        onClose={onCloseToaster}
        autoHideDuration={3000}
      >
        <Alert onClose={onCloseToaster} severity="info" sx={{ width: "100%" }}>
          {toaster.msg}
        </Alert>
      </Snackbar>
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
        <MoblieFilter
          isOpen={isMobileFilterOpen}
          onClose={() => {
            setIsMobileFilterOpen(false);
            setModal(false);
          }}
        />
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
          <Header totalResults={totalResults} />
          <GraphArticlesContainer width="100%">
            <Suspense fallback={<CardsSkeletonList amount={8} />}>
              <LazyArticles
                setTotalResults={setTotalResults}
                createGraphsData={createGraphsData}
              />
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
