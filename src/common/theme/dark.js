const breakpoints = ["40em", "52em", "64em", "80em"];
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const fontFamily = "Roboto, Arial, Helvetica, sans-serif";

export default {
  name: "dark theme",
  color: "#000000",
  breakpoints,
  space,
  fontFamily,
  colors: {
    texts: {
      base: "#f8f8f2",
      cellHover: "#b3b372",
      lineHover: "#44475a",
      searchClick: "#0b49bf",
      warning: "#ff5555",
      success: "#748c83",
      default: "#6272a4",
    },
    backgrounds: {
      base: "#21222c",
      card: "#282a36",
      warning: "#df3b00",
      hideous: "#df6800",
      attention: "#df6f20",
      moderate: "#84c14e",
      success: "#77e11b",
    },
  },
};
