import { createTheme } from '@mui/material';

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
    subtitle: {
      fontSize: "3em",
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
      color:'white'
    },
  },
});