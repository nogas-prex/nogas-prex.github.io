import { CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "../../components/AppBar";
import { Card } from "@mui/material";
import ImageSlider from "../../components/ImageSlider";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "react-material-ui-carousel";
import { ImageItem } from '../../components/ImageCarousel'
import { CardActionArea } from "@mui/material";

import CaseStudyLanding from "../../components/caseStudies/caseStudyLanding";
import CaseStudyBackground from "../../components/caseStudies/caseStudyBackground";
import CaseStudyVision from "../../components/caseStudies/caseStudyVision";
import CaseStudySummary from "../../components/caseStudies/caseStudySummary";
// import ImageCarousel from "../../components/ImageCarousel";

const metricStyle = {
    backgroundColor: "#00A360",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignLast: "center",
};
export default function ImprovingEquitableAccess() {

    const carouselItems = [
      {
        name: "Typical configuration",
        img: "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/4_Equitable+Access/Existing+Scenario.png",
      },
      {
        name: "Optimized configuration",
        img: "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/4_Equitable+Access/Proposed+Scenario.png",
      },
      {
        name: "Proximity Analysis",
        img: "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/4_Equitable+Access/Proximity+Analysis.png",
      },
      {
        name: "Multi-modal circulation analysis",
        img: "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/4_Equitable+Access/Autonomous+Ready.png",
      },
    ];

    return (
      <div id="iea-main">
        <ResponsiveAppBar />
        <CaseStudyLanding
          image={
            "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/0_Cover/1.png"
          }
          title="IMPROVING EQUITABLE ACCESS"
          subtitle="Neighborhood Retrofit"
          body={[
            `Since 1925, the number of car-owning households in the United States has skyrocketed from 17
percent to more than 93 percent. In the suburbs, where less than five percent of the U.S.
workforce uses public transit to get to work, the configuration of the built environment is
designed to prioritize cars. These car-centric communities create distinct burdens for an
increasing percentage of the suburban population who are elderly, disabled, or otherwise
unable to drive. And the emphasis on monofunctional vehicular infrastructure often makes it
difficult for pedestrians and those using existing micromobililty offerings, such as bicycles and
scooters.`,
            `In the near-term, the proliferation of autonomous vehicles (AVs) may offer a path forward for
mobility-challenged people, enabling them to use vehicular infrastructure without driving a car.
Eventually, widespread adoption of autonomous transportation systems and new land use
patterns that include expanded micromobility options could pave the way for radically new
suburban configurations that prioritize equitable mobility for all. `,
          ]}
        />
        <CaseStudyBackground
          title="BACKGROUND"
          subtitle="Challenges to Mobility Access"
          image={
            "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/2_Background/0_Cover/1.png"
          }
          body={[
            `Today, nearly 55 million Americans are over age 65. 
                By 2060, this number is expected to increase to 95 million, 
                jumping from 16 percent to 23 percent of the total U.S. population. 
                This aging of the population will create major challenges for 
                ensuring equitable access to mobility, especially since older 
                individuals are more likely to have physical difficulty driving 
                because of changes in hearing, eyesight, and other physical factors. 
                In the suburbs, where car travel is often the only reliable daily 
                transportation option, this presents major obstacles for transportation planners.`,
          ]}
          stats={[
            { pct: "25%", text: " of adults have at least one disability" },
            {
              pct: ">25%",
              text: "Fewer daily trips are made by people with disabilities",
            },
            {
              pct: "14%",
              text: "of disabled adults experience mobility limitations",
            },
          ]}
          link={
            "/case-studies/improving-equitable-access-background/#iea-background"
          }
        />
        <Grid
          container
          sx={{ width: "100vw", height: "100%", overflowY: "hidden" }}
        >
          <ImageSlider
            leftImage={
              "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/3_Vision/Slider_Before.png"
            }
            rightImage={
              "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/3_Vision/Slider_After.png"
            }
          />
        </Grid>
        <CaseStudyVision
          title={"VISION"}
          subtitle="Autonomous Suburbs for All"
          body={[
            `The codes, policies, and guidelines used to control suburban form can be expanded to account
for the potential effects of AVs, and to better accommodate increased micromobility and
pedestrian modes. New neighborhood land use patterns can ensure equitable access to local
amenities within a five-minute walkshed of all residents, including those with mobility
challenges. `,
            `Additionally, suburban block configurations can be optimized to further improve mobility access
for the elderly and people with disabilities who can’t drive.`,
          ]}
          icons={[
            {
              img: "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/3_Vision/Smart+Density.png",
              alt: "bae",
              label: "Smart Density",
            },
            {
              img: "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/3_Vision/Equitable+Mobility+Access.png",
              alt: "bar",
              label: "Equitable Mobility Access",
            },
            {
              img: "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/3_Vision/Better+Environmental+Performance.png",
              alt: "foo",
              label: "Better Environmental Performance",
            },
          ]}
        />
        {/* custom stuff */}{" "}
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
                  EQUITABLE ACCESS{" "}
                </Typography>
                <br></br>
                <Typography variant="sectionSubtitle">
                  Neighborhood Optimization with OASIS
                </Typography>
                <hr color="EC008C"></hr>
                <Typography variant="bodyBlack">
                  OASIS is a parametric toolbox that can help planners and
                  developers optimize neighborhood- scale land use
                  configurations and mobility networks. The accessibility
                  optimization components within the OASIS toolbox can be used
                  to analyze an existing neighborhood master plan and identify
                  opportunities for optimizing connectivity ratios through
                  scenario-based modeling.
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
            sx={{ marginLeft: "25%", marginRight: "25%", width: "50%", paddingBottom:'2em' }}
          >
            <Grid item xs={12} md={6} elevation={5}>
              <Typography variant="sectionSubtitle">
                Neighborhood Configuration Optimization
              </Typography>
              <Typography variant="body2">
                Click through the various scenarios below to see how OASIS can
                generate different master plan scenarios to determine an optimal
                configuration based on predetermined accessibility objectives.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} elevation={5}>
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
            <Grid item xs={12} sm={6}></Grid>{" "}
            <Grid item xs={0} sm={3}>
              {" "}
            </Grid>
          </Grid>
        </Grid>       
      </div>
    );
}