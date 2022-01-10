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

export const stringToCountryCode: CountryMap = _inverse(countryCodeToString);

function _inverse(obj: CountryMap) {
  var retobj: CountryMap = {};
  for (var key in obj) {
    retobj[obj[key]] = key;
  }
  return retobj;
}

export const countryOptions = Object.keys(countryCodeToString).map(
  (k) => countryCodeToString[k]
);
