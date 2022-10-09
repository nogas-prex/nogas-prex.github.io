import {
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";

import { ImageItem } from "../../components/ImageCarousel";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";

import ResponsiveAppBar from "../../components/AppBar";
import CaseStudyBackground from "../../components/caseStudies/caseStudyBackground";
import CaseStudyLanding from "../../components/caseStudies/caseStudyLanding";
import CaseStudyVision from "../../components/caseStudies/caseStudyVision";
import ImageSlider from "../../components/ImageSlider";

import headerImage from "../../img/6_Case Study 04_ Maximizing Micro-mobility/0_Cover/1.png";
import backgroundImage from "../../img/6_Case Study 04_ Maximizing Micro-mobility/2_Background/0_Cover/1.png";
import beforeImage from '../../img/6_Case Study 04_ Maximizing Micro-mobility/3_Vision/Section_Existing.png'
import afterImage from "../../img/6_Case Study 04_ Maximizing Micro-mobility/3_Vision/Section_Long Term.png";
import CaseStudySummary from "../../components/caseStudies/caseStudySummary";

import existing from "../../img/6_Case Study 04_ Maximizing Micro-mobility/4_Micro-mobility Corridor/Micromobility Corridor_Employment Campus.png";
import s1 from "../../img/6_Case Study 04_ Maximizing Micro-mobility/4_Micro-mobility Corridor/Micromobility Corridor_Residential.png";
import s2 from "../../img/6_Case Study 04_ Maximizing Micro-mobility/4_Micro-mobility Corridor/Micromobility Corridor_University Campus.png";
import s3 from "../../img/6_Case Study 04_ Maximizing Micro-mobility/4_Micro-mobility Corridor/Micromobility Corridor_Residential-Commercial.png";

export default function MaximizingMicromobility() {
  const carouselItems = [
    { name: "Existing", img: existing },
    { name: "Scenario 1", img: s1 },
    { name: "Scenario 2", img: s2 },
    { name: "Scenario 3", img: s3 },
  ];
  
  
  return (
    <div>
      <ResponsiveAppBar />
      <CaseStudyLanding
        image={headerImage}
        title="MAXIMIZING MICRO-MOBILITY"
        subtitle="Streetscape Adaption"
        body={[
          `In the U.S., only about 5 percent of the working population uses public transit to get to work, and 
                this percentage has changed little since 1995. In many regions, where suburb-to-suburb commute patterns 
                are steadily replacing their suburb-to-urban core precursors, public transit has become increasingly outmoded.  `,
          `According to the latest National Household Travel Survey (2017), around 60 percent of domestic light-duty vehicle 
                trips are shorter than 6 miles. These short trips represent a huge potential for reducing vehicular dependence in 
                suburban areas, if more micromobility options are implemented. However, current standards and design guidelines for 
                suburban streets typically lack the essential infrastructure to accommodate large-scale micromobility development. `,
        ]}
      />
      <CaseStudyBackground
        title="BACKGROUND"
        subtitle="Car-dominated Travel Mode"
        image={backgroundImage}
        body={[
          `The average width of an American residential street is 55 feet, which is three times the average street 
                width in many other countries. This car-based street design not only leads to more car accidents (because 
                there are more cars on the road), its also wastes valuable land resources.`,
        ]}
        stats={[
          { pct: "55ft", text: "Average Width of Residential Street" },
          {
            pct: "19642",
            text: "miles Annual VMT per Household",
          },
          { pct: "85%+", text: "Workers Drive to Work" },
        ]}
        link={"/case-studies/maximize-micromobility-background"}
      />
      <Grid
        container
        sx={{ width: "100vw", height: "70vh", overflowY: "hidden" }}
      >
        <ImageSlider leftImage={beforeImage} rightImage={afterImage} />{" "}
      </Grid>{" "}
      <CaseStudyVision
        title="VISION"
        subtitle="A Multi-modal Mobility Adapted Street"
        body={[
          `In the near term, the excessive widths of many suburban right of ways can be narrowed and improved by 
                incorporating protected micromobility lanes and hubs. Micromobility corridors can then be implemented to 
                further improve connectivity and pedestrian safety from block to block. `,
          `In the autonomous future, with the compact design and precise control system of autonomous mobility systems, 
                the width of a vehicular lane can be reduced dramatically, so that a large number of paved surfaces can be 
                converted into greenspace or commercial frontages. Meanwhile, an autonomous-delivery infrastructure network 
                can be built out and connected to the existing micromobility corridors, further reducing the number of daily 
                household vehicle trips. `,
        ]}
        icons={[
          { img: "", alt: "", label: "Smart Density" },
          { img: "", alt: "", label: "Reduced Vehicle Usage" },
          {
            img: "envPerfImage",
            alt: "",
            label: "Better Environmental Performance",
          },
        ]}
      />
      {/* <div> custom stuff </div> */}
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
                MICRO-MOBILITY CORRIDOR{" "}
              </Typography>
              <br></br>
              <Typography variant="sectionSubtitle">
                Neighborhood Optimization with OASIS
              </Typography>
              <hr color="EC008C"></hr>
              <Typography variant="bodyBlack">
                OASIS is a parametric toolbox that can help planners and
                developers optimize neighborhood-scale land use and mobility
                frameworks. The micro-mobility corridor optimization tool of
                OASIS toolbox can generate and optimize the overall framework of
                the micro-mobility corridor based on given land use patterns to
                maximize the inter-block connectivity and accessibility.
              </Typography>
              <br></br>
              <br></br>
              <Button
                variant="outlined"
                style={{
                  color: "#EC008C",
                  borderColor: "#EC008C",
                  marginTop: "3em",
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Learn more about OASIS
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          direction="column"
          sx={{ marginLeft: "25%", marginRight: "25%", width: "50%" }}
        >
          <Grid item xs={12} md={6} elevation={5}>
            <Carousel navButtonsAlwaysVisible={true} sx={{ maxWidth: "75vw" }}>
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
              Click through the various scenarios above to see how access
              optimization tool of OASIS can generate different masterplan
              scenarios with optimized accessibility performance for all
              population groups.
            </Typography>
          </Grid>{" "}
          <Grid item xs={0} sm={3}>
            {" "}
          </Grid>
        </Grid>
      </Grid>
      <CaseStudySummary
        text={``}
        icons={[
          { img: "", pct: "50%", text: "Reduction of vehicle tripps" },
          {
            img: "",
            pct: "60%",
            text: "Increase in pedestrian accessibility",
          },
          {
            img: "",
            pct: "80%",
            text: "Reduction of impervious surface cover",
          },
          { img: "", pct: "60%", text: "Increase in tree canopy" },
        ]}
      />{" "}
    </div>
  );
}