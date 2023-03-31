import { Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/AppBar";
import CaseStudyLanding from "../components/caseStudies/caseStudyLanding";
import Carousel from "react-material-ui-carousel";
import { ImageItem } from "../components/ImageCarousel";
import { Button } from "@mui/material";
import { HashLink } from "react-router-hash-link";
export default function DesignEngine() {
    const carouselItems = [
      {
        name: "Existing",
        img: "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/4_Equitable+Access/Existing+Scenario.png",
      },
      {
        name: "Optimized Scenario",
        img: "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/4_Equitable+Access/Proposed+Scenario.png",
      },
      {
        name: "Proximity Analysis",
        img: "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/4_Equitable+Access/Proximity+Analysis.png",
      },
      {
        name: "Mobility Image",
        img: "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/4_Equitable+Access/Autonomous+Ready.png",
      },
    ];
  return (
    <div>
      <ResponsiveAppBar />
      <div id="design-engine-landing">
        <CaseStudyLanding
          image={
            "https://nogas-swar.s3.amazonaws.com/img/8_Design+Engine+Home+Page/Cover_Fixed.png"
          }
          title="NOGAS DESIGN ENGINE"
          subtitle="Tools for Practitioners"
          body={[
            `The cutting-edge design engine behind NOGAS relies on advanced
             computational design and optimization algorithms, which are
              customized for the suburban context. Click the button below to
               download tutorials, and explore NOGAS further.`,
          ]}
          button={{
            text: "Browse Tutorials",
            link: "https://www.youtube.com/channel/UCfDW_vna8wDYHMQ3PwWlWaQ",
          }}
        />
      </div>

      <Grid
        container
        direction="row"
        sx={{ height: "100vh", backgroundColor: "#111120" }}
      >
        <Grid item xs={12} md={8} sx={{ placeSelf: "center" }}>
          <img
            src={
              "https://nogas-swar.s3.amazonaws.com/img/8_Design+Engine+Home+Page/Mirage_GIF.gif"
            }
            style={{ width: "50%" }}
          />
        </Grid>
        <Grid item xs={12} md={4} sx={{ backgroundColor: "000" }}>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="stretch"
            textAlign={"left"}
            spacing={10}
            sx={{ padding: "2em", marginTop: "3em" }}
          >
            <Grid item sx={{ height: "33%", color: "white" }}>
              <Typography variant="h3">OASIS</Typography>
              <Typography>
                The Optimized Autonomous Suburban Integration System model
                (OASIS) uses existing demographic and spatial data to simulate
                multi-objective neighborhood-scale land use scenarios.
              </Typography>
              <Button>
                <HashLink to="/oasis/#oasis-main">Learn More</HashLink>
              </Button>
            </Grid>
            <Grid item sx={{ height: "33%", color: "white" }}>
              <Typography variant="h3">MIRAGE</Typography>
              <Typography>
                The Multi-Indicator Relational Assessment Generation Engine
                model (MIRAGE) takes outputs from OASIS and simulates
                block-scale optimization scenarios using site-specific
                objectives and constraints.
              </Typography>
              <Button>
                <HashLink to="/mirage/#mirage-main">Learn More</HashLink>
              </Button>
            </Grid>
            <Grid item sx={{ height: "33%", color: "white" }}>
              <Typography variant="h3">DESIGN ITERATION & OUTPUTS</Typography>
              <Typography>
                Based on the optimized exports from OASIS and MIRAGE, urban
                design proposals are developed to communicate key social,
                spatial, and material strategies that respond to stakeholder
                objectives.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{ color: "white" }}
          direction="row"
          container
          alignItems="center"
          justifyContent="center"
          textAlign={"center"}
        >
        </Grid>
      </Grid>
    </div>
  );
}
