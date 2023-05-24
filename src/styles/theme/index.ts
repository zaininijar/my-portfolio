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
        bg: "white",
        color: "gray.800",
      },
    },
  },
  fonts: {
    heading: `'Fira Code', sans-serif`,
    body: `'Fira Code', sans-serif`,
  },
  colors: {},
});
