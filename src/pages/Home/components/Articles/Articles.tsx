import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "../../../../components/Card/Card";
import { CardsSkeletonList } from "../../../../components/Skeletons/CardsSkeleton/CardSkeletonList";
import { useGetArticles } from "../../../../hooks/useGetArticles";
import { CardsContainer } from "./style";
import { ArticleCard, ArticlesCards } from "./types";

type ArticlesProps = { createGraphsData: (articles: ArticlesCards) => any };

const Articles: React.FC<ArticlesProps> = ({ createGraphsData }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const { hasMore, loading, articles, firstLoad } = useGetArticles({
    pageNumber,
    pageSize: 10,
    setPageNumber,
  });

  useEffect(() => {
    articles && createGraphsData(articles);
  }, [articles, createGraphsData]);

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
  ) : (
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
  );
};

export default Articles;
