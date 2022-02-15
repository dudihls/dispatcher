import datejs from "dayjs";
import { ArticleType } from "../pages/Home/components/Articles/types";

const optionalTags: { [key: string]: string[] } = {
  Sports: [
    "mma",
    "arena",
    "athlete",
    "athletics",
    "award",
    "beat",
    "captain",
    "catch",
    "champion",
    "competition",
    "defeat",
    "cup",
    "fitness",
    "score",
    "league",
    "vs.",
    "vs",
    "basketball",
    "win",
    "lose",
    "Highlights",
  ],
  Health: [
    "covid",
    "medical",
    "disease",
    "treatment",
    "corona",
    "virus",
    "doctor",
    "food",
    "spine",
    "lung",
    "smoking",
    "vaping",
    "symptoms",
    "pain",
    "קורונה",
    "בריאות",
    "סימפטומים",
    "וירוס",
  ],
  Weather: [],
  // Software: [],
  // Economy: [],
};

export const parseArticleToCard = (article: ArticleType) => {
  const { content, description, urlToImage, source, title, publishedAt, url } =
    article;
  const tags: string[] = [];
  Object.keys(optionalTags).forEach((k) => {
    const optinalWords: string[] = optionalTags[k];
    try {
      optinalWords.forEach((word) => {
        if (tags.length === 3) throw new Error("break");
        const regularExpression = new RegExp(`([\\W])${word}([\\W])`, "i");
        if (
          (description && description.match(regularExpression)) ||
          title.match(regularExpression) ||
          (content && content.match(regularExpression))
        ) {
          tags.push(k);
          throw new Error("break");
        }
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        if (e.message !== "break") throw e;
      } else throw e;
    }
  });

  return {
    tags: tags,
    img: urlToImage,
    content: content || description,
    date: new Date(publishedAt),
    header: title,
    source: source?.name,
    onClick: () => window.open(url, "_blank"),
  };
};

export const parseDate = (date: Date) => {
  return datejs(date).format("ddd MMM D, YYYY");
};
