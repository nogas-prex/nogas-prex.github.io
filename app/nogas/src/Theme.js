import { createTheme, MuiCssBaseline } from '@mui/material';
// import CssBaseline from "@material-ui/core/CssBaseline";
import AtlasGroteskBold from "./fonts/AtlasGroteskBold.otf";
import EquinoxBold from "./fonts/Equinox Bold.otf";
import AtlasGroteskRegular from './fonts/AtlasGrotesk-Regular.otf'
import { formatMuiErrorMessage } from '@mui/utils';

const atlasGroteskBold = {
    src: `
    local('AtlasGroteskBold'),
    url(${AtlasGroteskBold}) format('otf')
  `,
};

const equinoxBold = {
  src: `
    local('Equinox Bold'),
    url(${EquinoxBold}) format('otf')
    `,
};

export const EquinoxTheme = createTheme({
  typography: {
        fontFamily: ['Equinox', 
            'sans serif'
        ].join(","),
    landingTitle: {
      fontWeight: 700,
      fontSize: "18vw",
      color: "#00a360",
      textShadow: "15px 15px #ccc",
      letterSpacing: "0.25em",
    },

    landingSubtitle: {
      textTransform: "uppercase",
      color: "#ccc",
      fontSize: "4vw",
    },
  },
});

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
            fontSize: "18vw",
            color: "#00a360",
            textShadow: "15px 15px #ccc",
            letterSpacing: '0.25em',                 
        },
        
        landingSubtitle: {
            textTransform: "uppercase",
            color: "#000",
            fontSize: "4vw",
            fontFamily: `Equinox, sans-sarif `
        },
        sectionTitle: {
            fontSize: "2.3rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "black",
        },
        sectionSubtitle: {
            fontSize: "1.8rem",
            fontWeight: "450",
            color: "black",
        },
        bodyBlack: {
            textAlign: "justify",
            fontSize: "1.3em",
            fontWeight: 300,
            color: "black",
        },
        sectionTitleWhite: {
            fontSize: "2.3rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "white",
        },
        sectionSubtitleWhite: {
            fontSize: "1.5rem",
            fontWeight: "450",
            color: "white",
        },
        bodyWhite: {
            textAlign: "justify",
            fontSize: "1.1em",
            fontWeight: 300,
            color: "white",
        },
        mdStat: {
            textAlign: "justify",
            fontSize: "2.3em",
            fontWeight: "600",
            color: "white",
        },
        mdStatText: {
            textAlign: "justify",
            fontSize: "1em",
            fontWeight: "250",
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
            // textDecoration: "underline",
            fontWeight: 650,
            color: "black",
            fontSize: "2.8rem",
        },
        sectionTitleUnderlineWhite: {
            // textDecoration: "underline",
            fontWeight: 650,
            color: "white",
            fontSize: "2.8rem",
        },
        landingBodyWhite: {
            fontWeight: 400,
            textAlign: "left",
            float: "left",
            color: "white",
            fontSize: "2em",
            paddingBottom: "1em",
            fontWeight: 250,
        },
        landingBody: {
            fontWeight: 400,
            textAlign: "left",
            float: "left",
            color: "black",
            fontSize: "2em",
            paddingBottom: "1em",
            fontWeight: 350,
        },
    },
});