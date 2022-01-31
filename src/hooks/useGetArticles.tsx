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

  const {
    country: { value: country },
    searchQuery,
    sortBy: { value: sortBy },
    category: { value: category },
    endpoint: { value: endpoint },
    selectedSource: { value: selectedSource },
    date: { startDate, endDate },
    language: { value: lang },
  } = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    setArticles([]);
    setPageNumber(1);
    setFirstLoad(true);
  }, [
    searchQuery,
    setPageNumber,
    sortBy,
    country,
    category,
    endpoint,
    selectedSource,
    endDate,
    startDate,
    lang,
  ]);

  useEffect(() => {
    dispatch(fetchSourcesList(endpoint === EndPoints.EVERYTHING));
  }, [category, country, dispatch, endpoint]);

  useEffect(() => {
    if (!pageNumber) return;
    let cancel: Canceler;
    let params = {};
    const apiKey = process.env.REACT_APP_API_KEY;

    if (endpoint === EndPoints.HEADLINES) {
      params = {
        page: pageNumber,
        pageSize,
        country: country,
        apiKey,
        q: searchQuery,
        category: category,
        sources: selectedSource,
      };
    } else {
      params = {
        sortBy: sortBy,
        page: pageNumber,
        pageSize,
        apiKey,
        q: searchQuery,
        sources: selectedSource,
        from: startDate,
        to: endDate,
        language: lang,
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
    sortBy,
    country,
    category,
    endpoint,
    pageSize,
    startDate,
    endDate,
    lang,
    selectedSource,
  ]);

  return { hasMore, articles, loading, firstLoad };
};
