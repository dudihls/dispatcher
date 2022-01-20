interface CountryMap {
  [key: string]: string;
}

export const countryCodeToString: CountryMap = {
  ar: "Argentina",
  gr: "Greece",
  nl: "Netherlands",
  za: "South Africa",
  au: "Hong Kong",
  nz: "New Zealand",
  kr: "South Korea",
  at: "Austria",
  hu: "Hungary",
  ng: "Nigeria",
  se: "Sweden",
  be: "Belgium",
  in: "India",
  no: "Norway",
  ch: "Switzerland",
  br: "Brazil",
  id: "Indonesia",
  ph: "Philippines",
  tw: "Taiwan",
  bg: "Bulgaria",
  ie: "Ireland",
  pl: "Poland",
  th: "Thailand",
  ca: "Canada",
  il: "Israel",
  pt: "Portugal",
  tr: "Turkey",
  cn: "China",
  it: "Italy",
  ro: "Romania",
  ae: "UAE",
  co: "Colombia",
  jp: "Japan",
  ru: "Russia",
  ua: "Ukraine",
  cu: "Cuba",
  lv: "Latvia",
  sa: "Saudi Arabia",
  gb: "United Kingdom",
  cz: "Czech Republic",
  lt: "Lithuania",
  rs: "Serbia",
  us: "United States",
  eg: "Egypt",
  my: "Malaysia",
  sg: "Singapore",
  ve: "Venuzuela",
  fr: "France",
  mx: "Mexico",
  sk: "Slovakia",
};

export const langList = [
  { value: "ar", name: "Arabic" },
  { value: "de", name: "German" },
  { value: "en", name: "English" },
  { value: "es", name: "Spanish" },
  { value: "fr", name: "French" },
  { value: "he", name: "Hebrew" },
  { value: "it", name: "Italian" },
  { value: "nl", name: "Dutch" },
  { value: "no", name: "Norwegian" },
  { value: "pt", name: "Portuguese" },
  { value: "ru", name: "Russian" },
  { value: "se", name: "Northern Sami" },
  { value: "ud", name: "UD" },
  { value: "zh", name: "Chinese" },
];

export const countryOptions = Object.entries(countryCodeToString).map(
  ([k, v]) => ({ name: v, value: k })
);

export enum EndPoints {
  HEADLINES = "top-headlines",
  EVERYTHING = "everything",
}
