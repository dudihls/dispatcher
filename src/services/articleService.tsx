import { Link } from "react-router-dom";
import { ArticleType } from "../pages/Home/components/Articles/types";

export const parseArticleToCard = (article: ArticleType) => {
  const { content, description, urlToImage, source, title, publishedAt, url } =
    article;

  return {
    img: urlToImage,
    content: content || description,
    date: new Date(publishedAt),
    header: title,
    source: source?.name,
    onClick: () => window.open(url, "_blank"),
  };
};

export const parseDate = (date: Date) => {
  const dateString = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return dateString.replace(",", "");
};
