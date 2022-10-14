import { Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/AppBar";
import CaseStudyLanding from "../components/caseStudies/caseStudyLanding";
import Carousel from "react-material-ui-carousel";
import { ImageItem } from "../components/ImageCarousel";

import headerImage from "../img/10_MIRAGE/0_Cover/1.png";
import stepsImg from "../img/10_MIRAGE/1_Step By Step/1.png";

import img1 from "../img/10_MIRAGE/2_Design With Science/Euclidean Distance.png";
import img2 from "../img/10_MIRAGE/2_Design With Science/Network Distance.png";

export default function MIRAGE() {
  const carouselItems = [
    { name: "Existing", img: img1 },
    { name: "Optimized Scenario", img: img2 },
  ];

  return (
    <div>
      <ResponsiveAppBar />
      <CaseStudyLanding
        image={headerImage}
        title="MIRAGE"
        subtitle="Multi-Indicator Relation Assesment Generation Engine"
        body={[
          `OASIS is a parametric tool that can help planners and developers optimize
neighborhood-scale land use frameworks. Using inputs commonly associated with
specific land use categories, and a compatibility matrix, the tool automatically
generates thousands of scenarios for stakeholders to choose from based on
predetermined objectives.`,
        ]}
      />
      <Grid
        container
        direction="row"
        sx={{ height: "100vh", backgroundColor: "#111120" }}
      >
        <Grid item xs={12} md={8} sx={{ placeSelf: "center" }}>
          <img src={stepsImg} style={{ width: "75%" }} />
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
              <Typography variant="h3">
                1. Inputting Existing Block Configuration
              </Typography>
              <Typography>
                The first step is to input existing block configuration data
                along with other information into MIRAGE. The format of required
                data can vary from numeric to spatial based on different needs.
              </Typography>
            </Grid>
            <Grid item sx={{ height: "33%", color: "white" }}>
              <Typography variant="h3">
                2. Defining Optimization Objectives and Parameters
              </Typography>
              <Typography>
                The second step is to defining optimizing objects (variables)
                and related parameters. Users need to select specific objects
                that they want to optimize among all features of given block
                configurations. Then, several parameters need to be input to
                define the range of variables.
              </Typography>
            </Grid>
            <Grid item sx={{ height: "33%", color: "white" }}>
              <Typography variant="h3">3. Simulating and Optimizing</Typography>
              <Typography>
                Finally, the MIRAGE will automatically optimize the block
                configuration based on inputs. Multiple optimized scenarios will
                be simulated and output for users to choose based on their
                unique goals and customized trade-offs.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column" sx={{ marginTop: "7vh" }}>
        <Grid item>
          <Grid container direction="row">
            <Grid
              item
              xs={12}
              md={6}
              sx={{ padding: "7em", textAlign: "left" }}
            >
              <Typography variant="sectionTitle">
                {" "}
                DESIGN WITH SCIENCE{" "}
              </Typography>
              <br></br>
              <Typography variant="sectionSubtitle">
                What is behind MIRAGE{" "}
              </Typography>
              <hr color="EC008C"></hr>
              <Typography variant="bodyBlack">
                Each tool inside MIRAGE toolbox is built upon solid research and
                algorithms. For instance, as shown below, the access
                optimization tool of MIRAGE can measure distances in two
                different way - Euclidean method and Network method based on
                different conditions and users’ demands.
              </Typography>
              <br></br>
              <br></br>
            </Grid>
            <Grid item xs={0} md={6}>
              {" "}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          direction="column"
          sx={{ width: "100%", paddingBottom: "3em" }}
        >
          <Grid
            item
            xs={12}
            md={8}
            elevation={5}
            id="carbox"
            sx={{ width: "80%" }}
          >
            <Carousel navButtonsAlwaysVisible={true} sx={{ maxWidth: "100%" }}>
              {carouselItems.map((img, i) => (
                <ImageItem key={i} image={img.img} name={img.name} />
              ))}
            </Carousel>
          </Grid>{" "}
          <Grid item xs={0} sm={3}>
            {" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              Click through various land use arrangements to explore
              optimization trade-offs.
            </Typography>
          </Grid>{" "}
          <Grid item xs={0} sm={3}>
            {" "}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
