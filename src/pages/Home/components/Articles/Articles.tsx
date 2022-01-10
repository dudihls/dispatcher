import { useCallback, useRef, useState } from "react";
import { Card } from "../../../../components/Card/Card";
import { useGetArticles } from "../../../../hooks/useGetArticles";
import { CardsContainer } from "./style";

type ArticlesProps = {
  searchQuery?: string | null;
};

export const Articles: React.FC<ArticlesProps> = ({ searchQuery }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const { hasMore, loading, articles } = useGetArticles({
    pageNumber: pageNumber,
    pageSize: 10,
    searchQuery,
  });

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

  return (
    <CardsContainer>
      {articles.map((articleProps: any, idx: number) => {
        if (articles.length === idx + 1)
          return (
            <div key={idx} ref={lastCardRef}>
              <Card {...articleProps} />
            </div>
          );
        return <Card key={idx} {...articleProps} />;
      })}
    </CardsContainer>
  );
};
