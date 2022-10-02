import { CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "../../components/AppBar";
import { Card } from "@mui/material";
import ImageSlider from "../../components/ImageSlider";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "react-material-ui-carousel";
import {ImageItem} from '../../components/ImageCarousel'
import { CardActionArea } from "@mui/material";

import headerImage from '../../img/3_Case Study 01_ Improving Equitable Access/0_Cover/1.png';
import canopyImage from '../../img/3_Case Study 01_ Improving Equitable Access/1_Metrics/Canopy.png'
import densityImage from "../../img/3_Case Study 01_ Improving Equitable Access/1_Metrics/Density.png";
import MODImage from "../../img/3_Case Study 01_ Improving Equitable Access/1_Metrics/MOD.png";
import permeableImage from "../../img/3_Case Study 01_ Improving Equitable Access/1_Metrics/Permeable.png";
import metricAgingImage from '../../img/3_Case Study 01_ Improving Equitable Access/2_Background/0_Cover/1.png';
import beforeImage from '../../img/3_Case Study 01_ Improving Equitable Access/3_Vision/Slider_Before.png'
import afterImage from "../../img/3_Case Study 01_ Improving Equitable Access/3_Vision/Slider_After.png";

import smartDensityImg from '../../img/3_Case Study 01_ Improving Equitable Access/3_Vision/Smart Density.png'
import equityAccessImg from "../../img/3_Case Study 01_ Improving Equitable Access/3_Vision/Equitable Mobility Access.png";
import envPerfImage from "../../img/3_Case Study 01_ Improving Equitable Access/3_Vision/Better Environmental Performance.png";

import existingImage from '../../img/3_Case Study 01_ Improving Equitable Access/4_Equitable Access/Existing Scenario.png'
import optimizedImage from "../../img/3_Case Study 01_ Improving Equitable Access/4_Equitable Access/Proposed Scenario.png";
import proximityImage from "../../img/3_Case Study 01_ Improving Equitable Access/4_Equitable Access/Proximity Analysis.png";
import mobilityImage from "../../img/3_Case Study 01_ Improving Equitable Access/4_Equitable Access/Autonomous Ready.png";
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
      { name: "Existing", img: existingImage },
      { name: "Optimized Scenario", img: optimizedImage },
      { name: "Proximity Analysis", img: proximityImage },
      { name: "Mobility Image", img: mobilityImage },
    ];

    return (
      <div>
        <ResponsiveAppBar />
        <CaseStudyLanding
          image={headerImage}
          title="Improving Equitable Access"
          subtitle="Neighborhood Retrofit"
          body={[
            `In 1925, barely 17% of households owned cars; today, it's over
              93%. Only about 5% of the US working population uses public
              transit to get to work. This dominance is likely to have expanded
              during the pandemic and remain, as people desire more safe,
              private space while they travel. However, incompetence of driving
              brought up by aging and disability has hindered suburban seniors
              and disabled populatioins from accessing essential mobilities.`,
            `Fortunately, the proliferation of autonomous mobility can be a
              solution to solve this issue where the key issues is how to
              transfer existing private vehicle oriented suburban planning and
              design paradigm into autonomous mobility adapted form, meanwhile,
              make sure all population groups have equitable access to these
              facilities.`,
          ]}
        />

        <CaseStudyBackground
          title="Background"
          subtitle="Mobility Access Challenge in Suburbs"
          image={metricAgingImage}
          body={[
            `Today, around 55 million Americans are over 65, by 2060 this
              number will be 100 million. Aging populations usually have more
              physical difficulty in driving and a higher accident rate.
              Comapnying with aging, higher ratio of disability has added even
              more challenge to realize the equitable access, especially given
              that suburban area has both higher ratio of aging populaton and
              fewer mobility options than other places.
          `,
          ]}
          stats={[
            { pct: "25%", text: "Adults have at least one disability" },
            {
              pct: "25%+ ",
              text: "Fewer daily trips made by people with disabilities",
            },
            { pct: "14%", text: "Disabled adults with mobility limitations" },
          ]}
        />

        <Grid
          container
          sx={{ width: "100vw", height: "70vh", overflowY: "hidden" }}
        >
          <ImageSlider leftImage={beforeImage} rightImage={afterImage} />
        </Grid>

        <CaseStudyVision
          title={"Vision"}
          subtitle="Autonomous Suburbs for Equitable Access"
          body={[
            `In the near term, a more comprehensive approach to optimize connectivity and accessibility ration of multi-modal mobility networks is established to generate a more inclusive neighborhood land use patterns and mobility framework, which has equitable amenity access for everyone within a 5-10 min walking despite various moving speeds between younger populations, seniors, and disabled population.`,
            `A long-term transformation from private car oriented suburban form to autonomous mobility paradigms will further improve the mobility access for aging and disabled populations to a large extent through retrofitting existing residential block. The optimized residential block can accommodate the essential infrastructures of the autonomous mobility and related service for each household.`,
          ]}
          icons={[
            { img: smartDensityImg, alt: "bae", label: "Smart Density" },
            {
              img: equityAccessImg,
              alt: "bar",
              label: "Equitable Mobility Access",
            },
            {
              img: envPerfImage,
              alt: "foo",
              label: "Better Environmental Performance",
            },
          ]}
        />

        {/* custom stuff */}
        <Grid container direction="column" sx={{ marginTop: "7vh" }}>
          <Grid item>
            <Grid container direction="row">
              <Grid item xs={0} md={6}></Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ padding: "7em", textAlign: "left" }}
              >
                <Typography variant="sectionTitle">Equitable Access</Typography>
                <br></br>
                <Typography variant="sectionSubtitle">
                  Neighborhood Optimization with OASIS
                </Typography>
                <hr color="EC008C"></hr>
                <Typography variant="bodyBlack">
                  OASIS is a parametric toolbox that can help planners and
                  developers optimize neighborhood-scale land use and mobility
                  frameworks. The access optimization tool of OASIS toolbox can
                  analyze and optimize accessbility index of given neighrohood
                  masterplan to generate the optimal scenario with more
                  equitable access.
                </Typography>
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
              <Carousel
                navButtonsAlwaysVisible={true}
                sx={{ maxWidth: "750px" }}
              >
                {carouselItems.map((img, i) => (
                  <ImageItem key={i} image={img.img} name={img.name} />
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={0} sm={3}></Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">
                Click through the various scenarios above to see how access
                optimization tool of OASIS can generate different masterplan
                scenarios with optimized accessibility performance for all
                population groups.
              </Typography>
            </Grid>
            <Grid item xs={0} sm={3}></Grid>
          </Grid>
        </Grid>

        {/* end custom stuff */}

        {/* stats / summary */}
        <CaseStudySummary
          text={`Compared with today's average suruban form, long-term optimization
          scenarios demonstrate valuable performance benefits including:`}
          icons={[
            { img: densityImage, pct: "40%", text: "Increase in density" },
            {
              img: MODImage,
              pct: "80%",
              text: "Increase in mobility on-demand access",
            },
            {
              img: permeableImage,
              pct: "15%",
              text: "Reduction of impervious surface cover",
            },
            { img: canopyImage, pct: "10%", text: "Increase in tree canopy" },
          ]}
        />
      </div>
    );
}