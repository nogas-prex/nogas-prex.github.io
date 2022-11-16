import { Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/AppBar";
import CaseStudyLanding from "../components/caseStudies/caseStudyLanding";
import Carousel from "react-material-ui-carousel";
import { ImageItem } from "../components/ImageCarousel";

export default function MIRAGE() {
  const carouselItems = [
    {
      name: "Existing",
      img: "https://nogas-swar.s3.amazonaws.com/img/10_MIRAGE/2_Design+With+Science/Euclidean+Distance.png",
    },
    {
      name: "Optimized Scenario",
      img: "https://nogas-swar.s3.amazonaws.com/img/10_MIRAGE/2_Design+With+Science/Network+Distance.png",
    },
  ];

  return (
    <div style={{ overflowX: "hidden" }}>
      <ResponsiveAppBar />
      <CaseStudyLanding
        image={
          "https://nogas-swar.s3.amazonaws.com/img/10_MIRAGE/0_Cover/1.png"
        }
        title="MIRAGE"
        subtitle="Multi-Indicator Relation Assesment Generation Engine"
        body={[
          `MIRAGE is a parametric toolbox that can help planners and developers optimize 
          block-scale configurations. Using inputs commonly associated with exiting block 
          layout, along with user-defined parameters, the tool automatically generates thousands 
          of scenarios for stakeholders to choose from, based on predetermined objectives.`,
        ]}
      />
      <Grid
        container
        direction="row"
        sx={{ minHeight: "100vh", backgroundColor: "#111120" }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            overflow: "hidden",
            display: "block",
            maxWidth: "80%",
            textAlign: "center",
            paddingTop: "2em",
            paddingBottom: "2em",
            alignSelf: "center",
          }}
        >
          <img
            src={
              "https://nogas-swar.s3.amazonaws.com/img/10_MIRAGE/1_Step+By+Step/1.png"
            }
            style={{ maxWidth: "70%" }}
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
              <Typography variant="h3">
                1. INPUTTING EXISTING BLOCK CONFIGURATION
              </Typography>
              <Typography>
                The first step is to input data of existing block configuration,
                along with other information, into MIRAGE. Various formats of
                input data are accepted by MIRAGE, from numeric to spatial.
              </Typography>
            </Grid>
            <Grid item sx={{ height: "33%", color: "white" }}>
              <Typography variant="h3">
                2. DEFINING OPTIMIZATION OBJECTS AND OBJECTIVES
              </Typography>
              <Typography>
                The second step is to define optimization objects (variables)
                and objectives. Users need to select specific objects that they
                want to optimize among the features of given block
                configurations. Then, objectives need to be input to define the
                goal of the optimization.
              </Typography>
            </Grid>
            <Grid item sx={{ height: "33%", color: "white" }}>
              <Typography variant="h3">3. SIMULATING AND OPTIMIZING</Typography>
              <Typography>
                Finally, MIRAGE will automatically optimize the block
                configuration based on the inputs. Multiple optimized scenarios
                will be simulated and output for users to choose from, based on
                their unique goals and customized trade-offs.
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
                Each tool inside the MIRAGE toolbox is built upon solid research
                and algorithms. For instance, as shown below, the accessibility
                optimization tool of MIRAGE can measure distances through two
                different mathematic models — Euclidean method and Network
                method — based on different conditions and users’ demands.
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
              Click through two scenarios to explore how different distance
              measurements are employed by MIRAGE.
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
