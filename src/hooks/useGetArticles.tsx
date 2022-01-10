import axios, { Canceler } from "axios";
import { useEffect, useState } from "react";
import {
  ArticlesCards,
  ArticleType,
} from "../pages/Home/components/Articles/types";
import { parseArticleToCard } from "../services/articleService";

interface useGetArticlesI {
  endPoint?: "top-headlines" | "everything";
  pageNumber: number;
  pageSize: number;
  searchQuery?: string | null;
}

export const useGetArticles = ({
  endPoint = "top-headlines",
  pageNumber,
  pageSize,
  searchQuery,
}: useGetArticlesI): {
  hasMore: boolean;
  loading: boolean;
  articles: ArticlesCards;
} => {
  const [articles, setArticles] = useState<ArticlesCards>([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setArticles([]);
  }, [searchQuery]);

  useEffect(() => {
    let cancel: Canceler;
    setLoading(true);
    axios({
      method: "GET",
      url: `https://newsapi.org/v2/${endPoint}`,
      params: {
        page: pageNumber,
        pageSize,
        country: "us",
        apiKey: process.env.REACT_APP_API_KEY,
        q: searchQuery,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        const { articles } = res.data;
        setArticles((prevArticles: ArticlesCards) => [
          ...prevArticles,
          ...articles.map((article: ArticleType) =>
            parseArticleToCard(article)
          ),
        ]);
        setHasMore(articles.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        console.log(err);
      });

    return () => cancel();
  }, [pageNumber, searchQuery]);

  return { hasMore, articles, loading };
};
