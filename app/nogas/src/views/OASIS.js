import { Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/AppBar";
import CaseStudyLanding from "../components/caseStudies/caseStudyLanding";
import Carousel from "react-material-ui-carousel";
import { ImageItem } from "../components/ImageCarousel";

import headerImage from '../img/9_OASIS/0_Cover/1.png'
import stepsImg from '../img/9_OASIS/1_Step By Step/1.png'

import img1 from '../img/9_OASIS/2_Planning With Science/Scenario 01.png'
import img2 from "../img/9_OASIS/2_Planning With Science/Scenario 02.png";

export default function OASIS() {

    const carouselItems = [
      { name: "Existing", img: img1 },
      { name: "Optimized Scenario", img: img2 },
      
    ];

    return (
        <div>
            <ResponsiveAppBar />
        <CaseStudyLanding
          image={headerImage}
          title="OASIS"
          subtitle="Optimized Autonomous Suburban Integration System"
          body={[
            `OASIS is a parametric toolbox that can help planners and developers optimize
neighborhood-scale land use patterns, mobility frameworks and urban design.
Using inputs commonly associated with specific land use categories, and a
compatibility matrix, the tool automatically generates thousands of scenarios for
stakeholders to choose from based on predetermined objectives.`,
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
                  1. Inputting Existing Master Planning data
                </Typography>
                <Typography>
                  The first step is to input existing masterplan data along with
                  all related information into OASIS. The required data can be
                  obtained from multiple sources and in multiple formats from
                  numeric to spatial.
                </Typography>
              </Grid>
              <Grid item sx={{ height: "33%", color: "white" }}>
                <Typography variant="h3">
                  2. Defining Optimization Objectives and Parameters
                </Typography>
                <Typography>
                  The second step is to determine the optimizing objects
                  (variables) from all features of masterplan and selected the
                  corresponding tool from the OASIS toolbox. Then, users need to
                  enter several parameters to define the range for each
                  variable.
                </Typography>
              </Grid>
              <Grid item sx={{ height: "33%", color: "white" }}>
                <Typography variant="h3">
                  3. Simulating and Optimizing
                </Typography>
                <Typography>
                  Finally, the OASIS will automatically optimize the
                  neighborhood-scale masterplan based on inputs. Multiple
                  optimized scenarios will be simulated and output for users to
                  choose based on their unique goals and customized trade-offs.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="column" sx={{ marginTop: "7vh" }}>
          <Grid item>
            <Grid container direction="row">
              <Grid item xs={0} md={6}>
                {" "}
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ padding: "7em", textAlign: "left" }}
              >
                <Typography variant="sectionTitle">
                  {" "}
                  PLANNING WITH SCIENCE{" "}
                </Typography>
                <br></br>
                <Typography variant="sectionSubtitle">
                  What is behind OASIS{" "}
                </Typography>
                <hr color="EC008C"></hr>
                <Typography variant="bodyBlack">
                  Each tool inside OASIS toolbox is built upon solid research
                  and algorithms. For instance, as shown below, the land use
                  compatibility optimization tool of OASIS can measure land use
                  compatibility quantitatively through research-based algorithm
                  and user inputs, which makes the comparison between different
                  land use scenarios more easily.
                </Typography>
                <br></br>
                <br></br>
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
              <Carousel
                navButtonsAlwaysVisible={true}
                sx={{ maxWidth: "100%" }}
              >
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
