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
  { value: "", name: "All" },
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

const countryObjectToArray = Object.entries(countryCodeToString).map(
  ([k, v]) => ({ name: v, value: k })
);

export const countryOptions = [{ name: "All", value: "" }].concat(
  countryObjectToArray
);

export const categoryOptions = [{ name: "All", value: "" }].concat(
  [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ].map((option) => ({ name: option, value: option }))
);

export enum EndPoints {
  HEADLINES = "top-headlines",
  EVERYTHING = "everything",
}

export const checkRTL = (s: string): boolean => {
  var ltrChars =
      "A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF" +
      "\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF",
    rtlChars = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC",
    rtlDirCheck = new RegExp("^[^" + ltrChars + "]*[" + rtlChars + "]");

  return rtlDirCheck.test(s);
};
