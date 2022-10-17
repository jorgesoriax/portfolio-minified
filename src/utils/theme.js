import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#e3f2fe",
    100: "#badffe",
    200: "#8eccff",
    300: "#5eb7fe",
    400: "#35a7ff",
    500: "#0099fe",
    600: "#008af0",
    700: "#0078dd",
    800: "#0067cb",
    900: "#0048ab",
  },
};
const fonts = {
  heading: `"Open Sans", sans-serif`,
  body: `"Inter", sans-serif`,
};
const config = {
  initialColorMode: "system",
  useSystemColorMode: false,
};
const styles = {
  global: (props) => ({
    "html, body": {
      color: props.colorMode === "dark" ? "white" : "#2d3748",
    },
  }),
};
const theme = extendTheme({ colors, fonts, config, styles });

export default theme;
