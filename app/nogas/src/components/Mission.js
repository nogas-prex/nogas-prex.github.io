import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import YouTube from "react-youtube";

export default function Mission() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "#00A360" }}
      id="about"
    >
      <Box
        sx={{
          width: { xs: "92%", md: "50%" },   // desktop width unchanged
          my: { xs: 4, md: 8 },
          px: { xs: 2, md: 0 }
        }}
      >
        {/* ABOUT — desktop uses theme, phones shrink via CSS class */}
        <Typography
          variant="sectionTitleUnderlineWhite"
          sx={{ color: "white" }}
          className="about-title"
        >
          ABOUT
        </Typography>

        <Box sx={{ my: { xs: 2, md: 4 } }} />

        {/* ===== BACKGROUND ===== */}
        <fieldset
          className="about-card"
          style={{
            border: "solid",
            borderRadius: "15px",
            padding: "1em",
            borderColor: "white"
          }}
        >
          <legend
            className="about-legend"
            style={{
              marginLeft: "-35%",
              transform: "translatex(0%)",
              width: "max-content",
              padding: "0 0.15em",
              color: "white",
              fontSize: "1.5em" // desktop size preserved
            }}
          >
            BACKGROUND
          </legend>

          <Typography variant="landingBodyWhite" className="about-copy">
            Today, suburban areas are home to an ever-increasing majority of the
            global population. Models indicate that the next generation of
            metropolitan growth will rapidly continue outside of urban cores,
            where car-based development patterns have served as the dominant
            paradigm for more than a century. With the emergence of autonomous
            transportation technologies and the proliferation of new mobility
            on-demand options, the suburbs of the future offer key opportunities
            to solve pressing social, environmental, and economic challenges
            through innovative planning and design.
          </Typography>
        </fieldset>

        <Box sx={{ my: { xs: 2, md: 3 } }} />

        {/* ===== WHAT IS NOGAS ===== */}
        <fieldset
          className="about-card"
          style={{
            border: "solid",
            borderRadius: "15px",
            padding: "1em",
            borderColor: "white"
          }}
        >
          <legend
            className="about-legend"
            style={{
              marginLeft: "-35%",
              transform: "translatex(0%)",
              width: "max-content",
              padding: "0 0.15em",
              color: "white",
              fontSize: "1.5em"
            }}
          >
            WHAT IS NOGAS
          </legend>

          <Typography variant="landingBodyWhite" className="about-copy">
            The NOGAS toolkit uses a unique scenario-based modeling workflow to
            generate optimized suburban land use patterns, mobility frameworks,
            and urban design for a future when autonomous mobility options are
            ubiquitous. The software tools invented as part of NOGAS can be used
            by cities, planners, developers, and designers to test for increased
            environmental performance benefits using more than 20 distinct
            parameters.
          </Typography>

          <Button
            variant="filled"
            sx={{
              backgroundColor: "#ec008c",
              color: "white!important"
            }}
            href={"/download"}
          >
            <Typography component="span">
              Download NOGAS Toolkit (beta)
            </Typography>
          </Button>
        </fieldset>

        <Box sx={{ my: { xs: 2, md: 3 } }} />

        {/* ===== COLLABORATIONS ===== */}
        <fieldset
          className="about-card"
          style={{
            border: "solid",
            borderRadius: "15px",
            padding: "1em",
            borderColor: "white"
          }}
        >
          <legend
            className="about-legend"
            style={{
              marginLeft: "-35%",
              transform: "translatex(0%)",
              width: "max-content",
              padding: "0 0.15em",
              color: "white",
              fontSize: "1.5em"
            }}
          >
            COLLABORATIONS
          </legend>

          <Typography variant="landingBodyWhite" className="about-copy">
            The NOGAS toolkit is developed by the{" "}
            <a href="http://lcau.mit.edu" style={{ color: "white" }}>
              MIT Norman B. Leventhal Center for Advanced Urbanism
            </a>{" "}
            and{" "}
            <a href="" style={{ color: "white" }}>
              P-REXlab
            </a>{" "}
            at MIT in collaboration with the{" "}
            <a href="" style={{ color: "white" }}>
              Toyota Mobility Foundation
            </a>
            . Since 2018, this work has been informed by collaborations and
            partnerships with municipal planning agencies, private developers,
            and urban research institutions.
          </Typography>
        </fieldset>

        {/* Responsive 16:9 video */}
        <Box sx={{ mt: { xs: 3, md: 4 } }}>
          <Box sx={{ position: "relative", pt: "56.25%" }}>
            <Box sx={{ position: "absolute", inset: 0 }}>
              <YouTube
                videoId="Ip4teG4-po4"
                opts={{ width: "100%", height: "100%", playerVars: { autoplay: 1 } }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
