import datejs from "dayjs";
import { ArticleType } from "../pages/Home/components/Articles/types";

const optionalTags: { [key: string]: string[] } = {
  Sports: [
    "mma",
    "Hockey",
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
    "מכבי",
    "הפועל",
    "Djokovic",
  ],
  "Covid-19": ["corona", "Covid-19", "covid", "Moderna", "fizer"],
  Health: [
    "covid",
    "medical",
    "disease",
    "treatment",
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
    "vitamin",
  ],
  Tech: [
    "gaming",
    "nividia",
    "dell",
    "apple",
    "samsung",
    "product",
    "tech",
    "technoligy",
    "unicorn",
    "high-tech",
    "ai",
    "Nintendo",
    "RPG",
    "app",
    "google",
    "install",
    "cyber",
    "PC",
    "computer",
    "Digital",
    "facebook",
    "amazon",
  ],
  Business: [
    "buisness",
    "כלכליסט",
    "mask",
    "money",
    "הנפקה",
    "nasdaq",
    "stock",
    "fb",
  ],
  Vehicles: [
    "Vehicles",
    "Vehicle",
    "car",
    "lexus",
    "honda",
    "mazda",
    "toyota",
    "ferarri",
    "wheel",
    "car",
    "cars",
    "autonimic",
    "engine",
    "engines",
    "electric",
    "Autocar",
    "skoda",
    "audi",
  ],
};

export const parseArticleToCard = (article: ArticleType) => {
  const { content, description, urlToImage, source, title, publishedAt, url } =
    article;
  const tags: string[] = [];
  Object.keys(optionalTags).forEach((k) => {
    const optinalWords: string[] = optionalTags[k];
    try {
      optinalWords.forEach((word) => {
        if (tags.length === 2) throw new Error("break");
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

  let contentToSet: string = description || content;

  return {
    tags: tags,
    img: urlToImage,
    content: description || content,
    date: new Date(publishedAt),
    header: title,
    source: source?.name,
    onClick: () => window.open(url, "_blank"),
  };
};

export const parseDate = (date: Date) => {
  return datejs(date).format("ddd MMM D, YYYY");
};
