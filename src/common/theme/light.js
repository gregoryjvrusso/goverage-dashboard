const breakpoints = ["40em", "52em", "64em", "80em"];
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const fontFamily = "Roboto, Arial, Helvetica, sans-serif";

export default {
  name: "light theme",
  color: "#000000",
  breakpoints,
  space,
  fontFamily,
  colors: {
    texts: {
      base: "#000057",
      cellHover: "#b3b372",
      lineHover: "#44475a",
      searchClick: "yellow",
      warning: "#ff5555",
      success: "#748c83",
      default: "#6272a4",
    },
    backgrounds: {
      base: "#f8f8f2",
      card: "#282a36",
      warning: "#ffbfbf",
      hideous: "#ffddbf",
      attention: "#faffbf",
      moderate: "#bae396",
      success: "#bfffbf",
    },
  },
};
