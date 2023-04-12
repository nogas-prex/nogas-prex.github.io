import { Button, Grid, TextField,  } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

export default function Mission() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "#00A360" }}
      //   style={{ minHeight: '100vh' }}
      id="about"
    >
      {" "}
      <Box
        sx={{
          width: { xs: "90%", md: "50%" },
          margin: { xs: "0", md: "8em" },
          padding: { xs: "2em", md: "0" },
        }}
      >
        <Typography
          variant="sectionTitleUnderlineWhite"
          sx={{ color: "white" }}
        >
          ABOUT
        </Typography>
        <br></br>
        <br></br>
        <br></br>

        <fieldset
          style={{
            border: "solid",
            borderRadius: "15px",
            padding: "1em",
            borderColor: "white",
          }}
        >
          <legend
            style={{
              marginLeft: "-35%",
              transform: "translatex(0%)",
              width: "max-content",
              padding: "0 0.15em",
              color: "white",
              fontSize: "2em",
            }}
          >
            BACKGROUND
          </legend>
          <Typography variant="landingBodyWhite">
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
        <br></br>
        <br></br>
        <br></br>
        <fieldset
          style={{
            border: "solid",
            borderRadius: "15px",
            padding: "1em",
            borderColor: "white",
          }}
        >
          <legend
            style={{
              marginLeft: "-35%",
              transform: "translatex(0%)",
              width: "max-content",
              padding: "0 0.15em",
              color: "white",
              fontSize: "2em",
            }}
          >
            WHAT IS NOGAS
          </legend>
          <Typography variant="landingBodyWhite">
            The NOGAS project uses a unique scenario-based modeling workflow to
            generate optimized suburban land use patterns, mobility frameworks,
            and urban design for a future when autonomous mobility options are
            ubiquitous. The software tools invented as part of NOGAS can be used
            by cities, planners, developers, and designers to test for increased
            environmental performance benefits using more than 20 distinct
            parameters.
          </Typography>
          <Button
            variant="filled"
            sx={{ backgroundColor: "#ec008c", color: "white!important" }}
            href={"/download"}
          >
            <Typography>Download NOGAS Toolkit (beta)</Typography>
          </Button>
        </fieldset>
        <br></br>
        <br></br>
        <fieldset
          style={{
            border: "solid",
            borderRadius: "15px",
            padding: "1em",
            borderColor: "white",
          }}
        >
          <legend
            style={{
              marginLeft: "-35%",
              transform: "translatex(0%)",
              width: "max-content",
              padding: "0 0.15em",
              color: "white",
              fontSize: "2em",
            }}
          >
            COLLABORATIONS
          </legend>
          <Typography variant="landingBodyWhite">
            The NOGAS toolkit is developed by the{" "}
            <a href="http://lcau.mit.edu" style={{ color: "white" }} alt="">
              MIT Norman B. Leventhal Center for Advanced Urbanism
            </a>{" "}
            and{" "}
            <a href="" alt="" style={{ color: "white" }}>
              P-REXlab
            </a>{" "}
            at MIT in collaboration with the{" "}
            <a href="" alt="" style={{ color: "white" }}>
              Toyota Mobility Foundation
            </a>
            . Since 2018, this work has been informed by collaborations and
            partnerships with municipal planning agencies, private developers,
            and urban research institutions.
          </Typography>
        </fieldset>
        <br></br>
        <br></br>
        <Grid
          container
          spacing={1}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} md={12}>
            <YouTube
              videoId="Ip4teG4-po4"
              opts={{
                height: "370",
                width: "640",
                playerVars: { autoplay: 1 },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
