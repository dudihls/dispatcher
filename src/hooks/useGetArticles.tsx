import axios, { Canceler } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ArticlesCards,
  ArticleType,
} from "../pages/Home/components/Articles/types";
import { parseArticleToCard } from "../services/articleService";
import { EndPoints } from "../services/utils";
import { RootState } from "../store";
import { fetchSourcesList } from "../store/filters-actions";

interface useGetArticlesI {
  pageNumber: number;
  pageSize: number;
  setPageNumber: (prevPage: number) => any;
}

const baseURL = "https://newsapi.org/v2";

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
  const { country, searchQuery, category, endpoint, selectedSource } =
    useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    setArticles([]);
    setPageNumber(1);
    setFirstLoad(true);
  }, [searchQuery, category, country, endpoint, setPageNumber]);

  useEffect(() => {
    dispatch(fetchSourcesList());
  }, [category, country, dispatch]);

  useEffect(() => {
    let cancel: Canceler;
    let params = {};

    if (endpoint === EndPoints.HEADLINES) {
      params = {
        page: pageNumber,
        pageSize,
        country: country,
        apiKey: process.env.REACT_APP_API_KEY,
        q: searchQuery,
        category: category,
        sources: selectedSource,
      };
    } else {
      params = {
        sortBy: "publishedAt",
        page: pageNumber,
        pageSize,
        apiKey: process.env.REACT_APP_API_KEY,
        q: searchQuery,
        sources: selectedSource,
      };
    }

    console.log(params);

    setLoading(true);

    axios({
      method: "GET",
      url: `${baseURL}/${endpoint}`,
      params,
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
        const { data } = err.response;
        data && console.log(data);
      });

    return () => cancel();
  }, [
    pageNumber,
    searchQuery,
    country,
    category,
    endpoint,
    pageSize,
    selectedSource,
  ]);

  return { hasMore, articles, loading, firstLoad };
};
