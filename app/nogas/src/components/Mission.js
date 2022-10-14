import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ImageSlider from "./ImageSlider";
import beforeImage from '../img/01_Landing/Before2.jpg'
import afterImage from "../img/01_Landing/After2.jpg";


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
      id='mission'
    >
      {" "}
      <Box sx={{ width: "50%", margin: "8em" }}>
        <Typography
          variant="sectionTitleUnderlineWhite"
          sx={{ color: "white" }}
        >
          NOGAS MISSION
        </Typography>
        <br></br>
        <br></br>
        <br></br>
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
        <br></br>
        <br></br>
        <br></br>
        <Typography variant="landingBodyWhite">
          The NOGAS project uses a unique scenario-based modeling workflow to
          generate optimized suburban land use patterns, mobility frameworks,
          and urban design for a future when autonomous mobility options are
          ubiquitous. The software tools invented as part of NOGAS can be used
          by cities, planners, developers, and designers to test for increased
          environmental performance benefits using more than 20 distinct
          parameters.
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="landingBodyWhite">
          Since 2018, the NOGAS project has been informed by collaborations and
          partnerships with municipal planning agencies, private developers, and
          urban research institutions. NOGAS is a research project of the MIT
          Norman B. Leventhal Center for Advanced Urbanism and P-REXlab at MIT
          in collaboration with Toyota Mobility Foundation.
        </Typography>
        <Grid
          container
          spacing={1}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} md={12}>
            <ImageSlider
              leftImage={beforeImage}
              rightImage={afterImage}
            />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
