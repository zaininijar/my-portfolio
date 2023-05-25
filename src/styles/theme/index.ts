import { extendTheme } from "@chakra-ui/react";
import { config } from "./config";
import { foundations } from "./foundations";

export const theme = extendTheme({
  config,
  ...foundations,
  // components,
  styles: {
    global: {
      body: {
        bg: "#03001C",
        color: "white",
      },
    },
  },
  fonts: {
    heading: `'Fira Code', sans-serif`,
    body: `'Fira Code', sans-serif`,
  },
  colors: {
    dark: '#03001C',
    primary: '#301E67',
    secondary: '#5B8FB9',
    light: '#B6EADA',
  },
});
