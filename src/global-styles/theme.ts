const size = {
  mobile: "767.98px",
  tablet: "991.98px",
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
};

export const theme = {
  colors: {
    primary: `#0058B9`,
    primaryHover: `#3379c6`,
    secondary: `#D9DBE9`,
    secondaryHover: `#e1e2ed`,
    lightGray: `#F8F8FF`,
    lightGray2: `#F3F3FF`,
    lightPurple: `#5A5A89`,
    inputHolder: `#5A5A8980`,
    purple: `#262146`,
    inputBorder: "#d9dbe9",
    background: `#F8F8FF`,
    lightPurple2: `#636393b0`,
  },
  device,
  spacing: (number: number) => 8 * Math.pow(2, number - 1) + "px",
};
