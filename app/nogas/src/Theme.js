import { createTheme, MuiCssBaseline } from '@mui/material';
// import CssBaseline from "@material-ui/core/CssBaseline";
import AtlasGroteskBold from "./fonts/AtlasGroteskBold.otf";
import AtlasGroteskRegular from './fonts/AtlasGrotesk-Regular.otf'

const atlasGroteskBold = {
    src: `
    local('AtlasGroteskBold'),
    url(${AtlasGroteskBold}) format('otf')
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
    landingTitle: {
      fontWeight: 700,
      fontSize: "12em",
      color: "#00a360",
      textShadow: "15px 15px #ccc",
      
    },
    landingSubtitle: {
      textTransform: "uppercase",
      color: "#ccc",
      fontSize: "2em",
    },
    sectionTitle: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "black",
    },
    sectionSubtitle: {
      fontSize: "2rem",
      fontWeight: "regular",
      color: "black",
    },
    bodyBlack: {
      textAlign: "justify",
      fontSize: "1.1em",
      fontWeight: 500,
      color: "black",
    },

    sectionTitleWhite: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "white",
    },
    sectionSubtitleWhite: {
      fontSize: "2rem",
      fontWeight: "regular",
      color: "white",
    },
    bodyWhite: {
      textAlign: "justify",
      fontSize: "1.1em",
      fontWeight: 500,
      color: "white",
    },
    mdStat: {
      textAlign: "justify",
      fontSize: "1.9em",
      fontWeight: "600",
      color: "white",
    },
    mdStatText: {
      textAlign: "justify",
      fontSize: "1.3em",
      fontWeight: "400",
      color: "white",
    },
    iconCalloutStat: {
      textAlign: "justify",
      fontSize: "3.5em",
      fontWeight: "700",
      color: "white",
    },
    iconCalloutText: {
      textAlign: "justify",
      fontSize: "1.5em",
      fontWeight: "500",
      color: "white",
    },
    summaryStatText: {
      textAlign: "justify",
      fontSize: "2.2em",
      fontWeight: "500",
      color: "white",
    },
    sectionTitleUnderline: {
      textDecoration: "underline",
      fontWeight: 700,
      color: "black",
      fontSize: "2.5rem",
    },
    sectionTitleUnderlineWhite: {
      textDecoration: "underline",
      fontWeight: 700,
      color: "white",
      fontSize: "2.5rem",
    },
    landingBodyWhite: {
      fontWeight: 400,
      textAlign: "left",
      float: "left",
      color: "white",
      fontSize: "2em",
      paddingBottom: "1em",
    },
    landingBody: {
      fontWeight: 400,
      textAlign: "left",
      float: "left",
      color: "black",
      fontSize: "2em",
      paddingBottom: "1em",
    },
    //   h1: {
    //     fontFace: [AtlasGroteskRegular],
    //   },
    //   h4: {
    //     textDecoration: "underline",
    //     fontWeight: 700,
    //   },
    //   body1: {
    //     textAlign: "justify",
    //     fontSize: "1.5em",
    //     color: "white",
    //   },
    //   body2: {
    //     textAlign: "justify",
    //     fontSize: "1.5em",
    //     color: "black",
    //   },
    //   body3: {
    //     fontSize: "1.1em",
    //     color: "black",
    //   },
    //   h3White: {
    //     textAlign: "justify",
    //     fontSize: "1.5em",
    //     color: "white",
    // },
  },

  //   },
});