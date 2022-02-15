import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "../../../../components/Card/Card";
import { CardsSkeletonList } from "../../../../components/Skeletons/CardsSkeleton/CardSkeletonList";
import { useGetArticles } from "../../../../hooks/useGetArticles";
import {
  CardsContainer,
  Container,
  ResultNotFound,
  StyledLabel,
} from "./style";
import { ArticleCard, ArticlesCards } from "./types";
import notFoundArticles from "../../../../assets/imgs/notFoundArticles.png";
type ArticlesProps = {
  createGraphsData: (articles: ArticlesCards, firstLoad: boolean) => any;
};

const Articles: React.FC<ArticlesProps> = ({ createGraphsData }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const { hasMore, loading, articles, firstLoad } = useGetArticles({
    pageNumber,
    pageSize: 10,
    setPageNumber,
  });

  useEffect(() => {
    createGraphsData(articles, firstLoad);
  }, [firstLoad, createGraphsData, articles]);

  const observer = useRef<IntersectionObserver>();
  const lastCardRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return firstLoad ? (
    <>
      <CardsSkeletonList amount={8} />
    </>
  ) : articles.length > 0 ? (
    <CardsContainer>
      {articles.map((articleProps: ArticleCard, idx: number) => {
        if (articles.length === idx + 1)
          return (
            <div key={idx} ref={lastCardRef}>
              <Card {...articleProps} />
            </div>
          );
        return <Card key={idx} {...articleProps} />;
      })}
      {loading && <h1>loading...</h1>}
    </CardsContainer>
  ) : (
    <Container>
      <ResultNotFound src={notFoundArticles} />
      <StyledLabel>We couldn’t find any matches for your query</StyledLabel>
    </Container>
  );
};

export default Articles;
