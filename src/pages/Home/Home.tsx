import { theme } from "../../global-styles/theme";
import { GlobalStyles } from "../../global-styles/Global";
import { Navbar } from "../../components/Navbar/Navbar";
import { lazy, Suspense, useMemo, useState } from "react";
import { DesktopFilter } from "./components/DesktopFilter/DesktopFilter";
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
} from "./style";
import { EndPoints } from "../../services/utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { filtersActions } from "../../store/filters-slice";
import { CardsSkeletonList } from "../../components/Skeletons/CardsSkeleton/CardSkeletonList";
import { Header } from "./components/Header/Header";

const LazyArticles = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import("./components/Articles/Articles");
});

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
  console.log("render");

  const [modal, setModal] = useState<boolean>(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const {
    endpoint: { value: endpoint },
  } = useSelector((state: RootState) => state.filters);

  const isTopHeadlines = useMemo(
    () => endpoint === EndPoints.HEADLINES,
    [endpoint]
  );

  // const DesktopFilters = useMemo(
  //   () => (isTopHeadlines ? topHeadlinesFilters : everythingFilters),
  //   [isTopHeadlines, topHeadlinesFilters, everythingFilters]
  // );

  return (
    <Layout>
      <GlobalStyles />
      <AppHeader>
        <Navbar
          onSubmitSearch={(val) => dispatch(filtersActions.setSearchQuery(val))}
          onChangeEndpoint={(endpoint) =>
            dispatch(filtersActions.changeEndpoint(endpoint))
          }
        />
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
          <SimpleWrapper width="100%">
            <Suspense fallback={<CardsSkeletonList amount={8} />}>
              <LazyArticles />
            </Suspense>
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
