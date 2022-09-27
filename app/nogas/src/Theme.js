import { createTheme } from '@mui/material';
import BAHNSCHRIFT from './fonts/BAHNSCHRIFT 1.TTF'
import BAHNSCHRIFT2 from "./fonts/BAHNSCHRIFT 1.TTF";

const banschrift = {
  src: `
    local('BAHNSCHRIFT'),
    url(${BAHNSCHRIFT2}) format('ttf')
  `,
};

export const NOGASTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00A360",
    },
    secondary: {
      main: "#696969",
    },
    text: {
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Bahnschrift"],
    subtitle: {
      fontSize: "3em",
    },
    h1: {
      fontFace: [banschrift],
    },
    h4: {
      textDecoration: "underline",
      fontWeight: 700,
    },
    body1: {
      textAlign: "justify",
      fontSize: "1.5em",
      color: "white",
    },
    body2: {
      textAlign: "justify",
      fontSize: "1.5em",
      color: "black",
    },
    body3: {
      fontSize: "1.1em",
      color: "black",
    },
    h3White: {
      textAlign: "justify",
      fontSize: "1.5em",
      color: "white",
    },
  },
});