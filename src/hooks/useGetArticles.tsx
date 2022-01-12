import axios, { Canceler } from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  ArticlesCards,
  ArticleType,
} from "../pages/Home/components/Articles/types";
import { parseArticleToCard } from "../services/articleService";
import { RootState } from "../store";

interface useGetArticlesI {
  pageNumber: number;
  pageSize: number;
  setPageNumber: (prevPage: number) => any;
}

export const useGetArticles = ({
  pageNumber,
  pageSize,
  setPageNumber,
}: useGetArticlesI): {
  hasMore: boolean;
  loading: boolean;
  firstLoad: boolean;
  articles: ArticlesCards;
} => {
  const [articles, setArticles] = useState<ArticlesCards>([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const { country, searchQuery, category, endpoint } = useSelector(
    (state: RootState) => state.filters
  );

  useEffect(() => {
    setArticles([]);
    setPageNumber(1);
    setFirstLoad(true);
  }, [searchQuery, category, country, endpoint,setPageNumber]);

  useEffect(() => {
    let cancel: Canceler;
    setLoading(true);
    axios({
      method: "GET",
      url: `https://newsapi.org/v2/${endpoint}`,
      params: {
        page: pageNumber,
        pageSize,
        country: endpoint === "top-headlines" ? country : null,
        apiKey: process.env.REACT_APP_API_KEY,
        q: searchQuery,
        category,
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
        setFirstLoad(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        console.log(err);
      });

    return () => cancel();
  }, [pageNumber, searchQuery, country, category, endpoint, pageSize]);

  return { hasMore, articles, loading, firstLoad };
};
