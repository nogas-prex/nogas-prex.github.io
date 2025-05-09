import {
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";

import ResponsiveAppBar from "../../components/AppBar";
import CaseStudyBackground from "../../components/caseStudies/caseStudyBackground";
import CaseStudyLanding from "../../components/caseStudies/caseStudyLanding";
import CaseStudyVision from "../../components/caseStudies/caseStudyVision";


import ImageSlider from "../../components/ImageSlider";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "react-material-ui-carousel";
import { ImageItem } from "../../components/ImageCarousel";

import CaseStudySummary from "../../components/caseStudies/caseStudySummary";
import { HashLink } from "react-router-hash-link";

export default function AutonomousUniversalAccess() {
    const carouselItems = [
      {
        name: "Challenges of Existing Standards",
        img: "https://dl.dropboxusercontent.com/scl/fi/mtadt0zgsj6hrke1axl65/AUA-Diagrams.jpg?rlkey=vrig34wxby5ui1ld7navprflh&st=lcpyczvx&dl=0",
      },
      {
        name: "AUA Design Recommendations",
        img: "https://dl.dropboxusercontent.com/scl/fi/ygmp64jrxqe2dcmfd5g1o/AUA-Diagrams2.jpg?rlkey=sa4tmt1voz479vl416zxxwh9r&st=jivsbtm0&dl=0",
      },
      {
        name: "AUA Design Recommendations",
        img: "https://dl.dropboxusercontent.com/scl/fi/eou58bya1qufeaik1wzzh/AUA-Diagrams3.jpg?rlkey=1c97e76djfx0lwumhpdew3gva&st=woviqikt&dl=0",
      }
  ];
  
  const luCarouselItems = [
    {
      name: "",
      img: "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/4_Land+Use+Compatibility/Land+Use_Existing.jpg",
    },
    {
      name: "",
      img: "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/4_Land+Use+Compatibility/Land+Use_Existing2.jpg",
    },
    {
      name: "",
      img: "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/4_Land+Use+Compatibility/Land+Use_Existing3.jpg",
    },
    {
      name: "",
      img: "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/4_Land+Use+Compatibility/Land+Use_Existing4.jpg",
    },
    {
      name: "",
      img: "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/4_Land+Use+Compatibility/Land+Use_Existing5.jpg",
    },
    {
      name: "",
      img: "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/4_Land+Use+Compatibility/Land+Use_Existing6.jpg",
    },
  ];
    return (
      <div id="aua-main">
        <ResponsiveAppBar />
        <CaseStudyLanding
          image={
            "https://dl.dropboxusercontent.com/scl/fi/4uz5yloj330m1hcbeujwd/Cover-Image.png?rlkey=mootcp8oi62xuy9v649zq6muc&st=rnnjnhaq&dl=0"          }
          title="AUTONOMOUS UNIVERSAL ACCESS"
          subtitle="A Conceptual Framework to Rethink Future Codes"
          body={[
            `Older adults and individuals with disabilities increasingly rely on their 
            neighborhood environments for essential activities. However, in U.S. car-dependent 
            neighborhoods, where many older adults reside, mobility options are often inadequate, 
            especially for those with disabilities. Emerging autonomous mobility technologies, 
            such as autonomous vehicles, autonomous electric-powered wheelchairs, autonomous 
            motorized scooters, and autonomous deliver robots offer potential new solutions. 
            Yet, current policies and regulations, like the Americans with Disabilites Act (ADA) 
            standards for accessible design, lag these technological advancements. This project 
            proposes a new conceptual framework, termed "Autonomous Universal Access (AUA)," to 
            support updating existing accessibility policies for better integrating autonomous 
            mobility into the built environment.`,
          ]}
          citations={[
          ]}
        />
        <CaseStudyBackground
          title="BACKGROUND"
          subtitle="The Lag in Policies"
          image={
            "https://dl.dropboxusercontent.com/scl/fi/zjdi6jzaolqs25zcg2hxt/Background-Cover.jpg?rlkey=902zt7gq221iprs083f7hfr2v&st=u7txwwsf&dl=0"
          }
          body={[
            `As technological advancements outpace the evolution
            of both the existing suburban built environment and 
            conventional development patterns, current policies and 
            standards are increasingly inadequate for integrating
            new autonomous mobility technologies. This lag in
            policies hinders both the creation of new development
            patterns that could shape future suburban built
            environments to support and take advantage of universal
            access to these new mobility options.`,
          ]}
          stats={[
            // {
            //   pct: ">35%",
            //   text: "GHG Emissions Reduction Potential",
            //   citation:
            //     "Hernandez, D., Lister, M., & Suarez, C. (2011). Location Efficiency and Housing Type Boiling it Down to BTUs. Jonathan Rose Companies & Wallace Roberts Todd, LLC. For US EPA’s Smart Growth Program, #GS-10F-0410R.",
            // },
          ]}
        />
        <Grid
          container
          sx={{ width: "100vw", height: "100%", overflowY: "hidden" }}
        >
          <ImageSlider
            leftImage={
              "https://dl.dropboxusercontent.com/scl/fi/qpcx8ewjflvcm1ifj5mkg/A9ub6qcj_1g8umc_m24.jpg?rlkey=47mi1x9g5v6yne3yul4dgs3bs&st=beuiqxka&dl=0"
            }
            rightImage={
              "https://dl.dropboxusercontent.com/scl/fi/9vocsxtadg46pc4hqx0fh/A91to6szo_1g8ume_m24.jpg?rlkey=qhhasyg5vqbhzkjjd3yhahyvs&st=rnklefzc&dl=0"
            }
          />{" "}
        </Grid>{" "}
        <CaseStudyVision
          title="VISION"
          subtitle="Five Principles of AUA"
          body={[
            <>
            <strong>Principle 1: Fairness through Form</strong><br />
            Prioritize the equitable distribution, configuration, and alignment of mobility services and resources.
            </>,
            <>
            <strong>Principle 2: Flatten the Field</strong>
            Prioritize the uninterrupted and unrestricted free flow of all people and goods without compromising environmental systems.
            </>,
            <>
            <strong>Principle 3: Minimums to Multiples</strong>
            Prioritize heterogeneous outcomes that provide users with multiple options.
            </>,
            <>
            <strong>Principle 4: Anticipate Obsolescence </strong>
            Prioritize flexible outcomes that can successfully be altered or amended to support future needs.
            </>,
            <>
            <strong>Principle 5: Standards across Sectors</strong>
            Prioritize solutions that are most likely to be applied across both public and private sites/land uses.
            </>
          ]}
          icons={[
            {
              img: "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/3_Vision/Smart+Density.png",
              alt: "",
              label: "Smart Density",
            },
            {
              img: "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/3_Vision/Vehicle+Usage.png",
              alt: "",
              label: "Reduced Vehicle Usage",
            },
            {
              img: "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/3_Vision/Better+Envir-performance.png",
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
                sx={{ padding: { xs: "2em", md: "7em" }, textAlign: "left" }}
              >
                <Typography variant="sectionTitle">
                  {" "}
                  AUA-INFORMED DEVELOPMENT{" "}
                </Typography>
                <br></br>
                <Typography variant="sectionSubtitle">
                </Typography>
                <hr color="EC008C"></hr>
                <Typography variant="bodyBlack">
                  By evaluating the existing ADA standards for accessible
                  routes through the AUA framework, several violations
                  were identified. In response, recommendations based
                  on AUA principles were developed.
                </Typography>
                <br></br>
                <br></br>
                {/* <Typography variant="bodyBlack">
                  OASIS can optimize a typical neighborhood-scale suburban
                  district made up of multiple land uses. Slide the objective
                  control bars above (top right), to negotiate between various
                  trade-offs and determine the most strategic outcome.
                </Typography> */}
                <br></br>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            direction="column"
            sx={{
              paddingLeft: { xs: "2em", md: "25%" },
              paddingRight: { xs: "2em", md: "25%" },
              marginBottom: "2em",
            }}
          >
            <Grid item xs={12} md={6} elevation={5} >
              <Typography variant="sectionSubtitle">
               
              </Typography>
              <Typography variant="body2">
              Click through to see how block optimization can transform an existing neighborhood. 
              </Typography>
              <br></br>
            </Grid>
            <Grid item xs={12} md={6} elevation={5}>
              <Carousel
                navButtonsAlwaysVisible={false}
                sx={{ maxWidth: "100%", minHeight: "500px" }}
              >
                {luCarouselItems.map((img, i) => (
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
          <Grid container direction="row">
            <Grid
              item
              xs={12}
              md={6}
              sx={{ padding: { xs: "2em", md: "7em" }, textAlign: "left" }}
            >
              <Typography variant="sectionTitle">
                {" "}
                 CODE RECOMMENDATIONS{" "}
              </Typography>
              <br></br>
              <Typography variant="sectionSubtitle">
              </Typography>
              <hr color="EC008C"></hr>
              <Typography variant="bodyBlack">
                  By evaluating the existing ADA standards for accessible
                  routes through the AUA framework, several violations
                  were identified. In response, recommendations based
                  on AUA principles were developed.
              </Typography>
              <br></br>
              <br></br>
            </Grid>
            <Grid item xs={0} md={6}>
              {" "}
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            direction="column"
            sx={{
              paddingLeft: { xs: "2em", md: "25%" },
              paddingRight: { xs: "2em", md: "25%" },
              marginBottom: "2em",
            }}
          >
            <Grid item xs={12} md={6} elevation={5}>
              <Typography variant="sectionSubtitle">
              </Typography>
              <Typography variant="body2">
                Click through the various scenarios above to see how existing
                codes for accessible pathways can be transformed and enhanced
                through the integration of autonomous mobility technologies.
              </Typography>
              
            </Grid>
            <Grid item xs={12} md={6} elevation={5}>
              <Carousel
                navButtonsAlwaysVisible={false}
                sx={{ maxWidth: "100%", minHeight: "500px" }}
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
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
}