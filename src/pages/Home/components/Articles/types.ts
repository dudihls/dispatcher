import { CardProps } from "../../../../components/Card/Card";

export type ArticleType = {
  content: string;
  description: string;
  urlToImage: string;
  source: { id: string; name: string };
  title: string;
  publishedAt: string;
  url: string;
  onClick: (...args: any) => any;
};

export type ArticlesCards = CardProps[];

export type ArticleCard = CardProps;
