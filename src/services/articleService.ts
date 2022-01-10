import { ArticleType } from "../pages/Home/components/Articles/types";

export const parseArticleToCard = (article: ArticleType) => {
  const { content, description, urlToImage, source, title, publishedAt } =
    article;

  return {
    img: urlToImage,
    content: content || description,
    date: "new Date(publishedAt)",
    header: title,
    source: source?.name,
  };
};
