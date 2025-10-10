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
          title="NOGAS TOOLKIT"
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

      {/* --- DARK SECTION (OASIS / MIRAGE) --- */}
{/* --- DARK SECTION (OASIS / MIRAGE) --- */}
<Grid
  container
  sx={{
    bgcolor: "#111120",
    py: { xs: 3, md: 5 },            // smaller vertical padding
    px: { xs: 2, md: 4 },
  }}
  // center the whole block and cap width so it doesn't sprawl
  justifyContent="center"
>
  <Grid
    container
    item
    xs={12}
    md={12}
    lg={10}
    spacing={4}                     // modest column spacing
    alignItems="center"
  >
    {/* left: image */}
    <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
      <img
        src="https://nogas-swar.s3.amazonaws.com/img/8_Design+Engine+Home+Page/Mirage_GIF.gif"
        alt="MIRAGE"
        style={{
          width: "100%",            // fill its column
          maxWidth: 520,            // but don't get huge
          borderRadius: 12,
        }}
      />
    </Grid>

    {/* right: text */}
    <Grid item xs={12} md={6} sx={{ color: "white" }}>
      <Grid
        container
        direction="column"
        alignItems="stretch"
        // put items at the top with a predictable gap (no space-evenly)
        sx={{ gap: 3 }}
      >
        <Grid item>
          <Typography variant="h3" sx={{ mb: 1 }}>
            OASIS
          </Typography>
          <Typography>
            The Optimized Autonomous Suburban Integration System model (OASIS)
            uses existing demographic and spatial data to simulate
            multi-objective neighborhood-scale land use scenarios.
          </Typography>
          <Button sx={{ mt: 1 }}><HashLink to="/oasis/#oasis-main">Learn More</HashLink></Button>
        </Grid>

        <Grid item>
          <Typography variant="h3" sx={{ mb: 1 }}>
            MIRAGE
          </Typography>
          <Typography>
            The Multi-Indicator Relational Assessment Generation Engine model (MIRAGE)
            takes outputs from OASIS and simulates block-scale optimization scenarios
            using site-specific objectives and constraints.
          </Typography>
          <Button sx={{ mt: 1 }}><HashLink to="/mirage/#mirage-main">Learn More</HashLink></Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>
      {/* ^^^^^ CLOSE the dark section here */}

      {/* --- WHITE SECTION (separate) --- */}
      <Grid
        container
        justifyContent="center"
        textAlign="center"
        sx={{ bgcolor: "#fff", color: "black", py: { xs: 4, md: 8 } }}
      >
        <Grid item xs={12} md={10} lg={8}>
          <Typography
            variant="h3"
            sx={(t) => ({
              fontWeight: "bold",
              pb: 1,
              [t.breakpoints.down("sm")]: { fontSize: "1.3rem", lineHeight: 1.2 }
            })}
          >
            DESIGN ITERATION & OUTPUTS
          </Typography>

          <Typography
            variant="body1"
            sx={(t) => ({
              [t.breakpoints.down("sm")]: { fontSize: "1rem", lineHeight: 1.4, padding: "0 1rem" }
            })}
          >
            Based on the optimized exports from OASIS and MIRAGE, urban design
            proposals are developed to communicate key social, spatial, and material
            strategies that respond to stakeholder objectives.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
