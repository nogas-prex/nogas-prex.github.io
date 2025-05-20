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
        name: "",
        img: "https://dl.dropboxusercontent.com/scl/fi/ft0160s26u6n22fd443jc/Block-Scale-Diagrams.jpg?rlkey=2863qzb6ifxktvl86z352d1e3&st=smvpuobp&dl=0",
      },
      {
        name: "",
        img: "https://dl.dropboxusercontent.com/scl/fi/w59uo9b0070wfxkjcqu6g/Block-Scale-Diagrams2.jpg?rlkey=t9twsmduxnk3xnb9a5dgf3hdd&st=n6vp1x5z&dl=0",
      },
      {
        name: "",
        img: "https://dl.dropboxusercontent.com/scl/fi/szej0vzkxd57h24iztkjd/Block-Scale-Diagrams3.jpg?rlkey=o2bx0270tq013wr2r6zt82giu&st=gaifsfyf&dl=0",
      },
      {
        name: "",
        img: "https://dl.dropboxusercontent.com/scl/fi/rswnpsswgzc6yk67smnwx/Block-Scale-Diagrams4.jpg?rlkey=s9vvnj1r0e31phaogmfss5ujb&st=vqtpc9kd&dl=0",
      },
      {
        name: "",
        img: "https://dl.dropboxusercontent.com/scl/fi/mhp85ty6ismurptkrhz7s/Block-Scale-Diagrams5.jpg?rlkey=e04q4jqadkn5r6k9zvb4decml&st=lttnigni&dl=0",
      },
      {
        name: "",
        img: "https://dl.dropboxusercontent.com/scl/fi/8bc50kjkm4eyl64ivpf01/Block-Scale-Diagrams6.jpg?rlkey=4zzvcq4s2459huuaftxe1w0ht&st=2lsp5iww&dl=0",
      }
  ];
  
  const luCarouselItems = [
    {
      name: "",
      img: "https://dl.dropboxusercontent.com/scl/fi/ayc809fkg8wry2ualnyct/District-Scale-Diagrams.jpg?rlkey=c61bt9rmzd3cape3oxlvdhumc&st=h2to7l7v&dl=0",
    },
    {
      name: "",
      img: "https://dl.dropboxusercontent.com/scl/fi/fol306jjw1souh3i1y9wk/District-Scale-Diagrams2.jpg?rlkey=ommylhd8gx9imipew0ekq5cv7&st=b1fbi91n&dl=0",
    },
    {
      name: "",
      img: "https://dl.dropboxusercontent.com/scl/fi/2tie06f87g7k00jwit9uc/District-Scale-Diagrams3.jpg?rlkey=q9oq8it2bawufwcjpi7hk8rw3&st=odmnd3bq&dl=0",
    },
    {
      name: "",
      img: "https://dl.dropboxusercontent.com/scl/fi/gdhxokd8e2py0b3qzxw1e/District-Scale-Diagrams4.jpg?rlkey=azc75l9ss1b9y4dkuhr9ficd5&st=3jedao1i&dl=0",
    },
    {
      name: "",
      img: "https://dl.dropboxusercontent.com/scl/fi/g1b6anf99yayfa8i1pb8f/District-Scale-Diagrams5.jpg?rlkey=h4ma56fcgatmhnq5hszu6pyl2&st=tcarcngh&dl=0",
    },
  ];
    return (
      <div id="aua-main">
        <ResponsiveAppBar />
        <CaseStudyLanding
          image={
            "https://dl.dropboxusercontent.com/scl/fi/kwyx2pfsfvhedzyblysjs/Cover-Image.png?rlkey=s5vmtpl5ad0zx9rpncmy5pjwp&st=os4logce&dl=0"          }
          title="AUTONOMOUS UNIVERSAL ACCESS (AUA)"
          subtitle="Planning For Inclusive Autonomy"
          body={[
            <>As our mobility systems evolve, so too must the codes, policies, and design 
            standards that shape the built environment. <strong>Autonomous Universal Access (AUA)</strong> 
            is a forward-looking framework for ensuring that autonomous mobility 
            technologies—ranging from AVs and robotic delivery to powered wheelchairs and 
            micromobility—are fully integrated into the physical and regulatory fabric of 
            future communities.</>,
            <>Developed in response to the limitations of current accessibility policies, 
            AUA emphasizes the need to align emerging technologies with human-centered design. 
            It recognizes that car-dependent suburban environments, where many older adults and 
            people with disabilities reside, often fail to provide safe, seamless, and dignified 
            access. As AVs become more common, new statutory guidance is needed to shape 
            mobility infrastructure, land use planning, and site design for all. AUA positions 
            accessibility as a generative force in urban form, calling on designers, planners, 
            policymakers, and developers to reimagine the codes and standards that govern 
            mobility and access.</>,
          ]}
          citations={[
          ]}
        />
        <CaseStudyBackground
          title="BACKGROUND"
          subtitle="Policy Lag and Built Enviornment Inertia"
          image={
            "https://dl.dropboxusercontent.com/scl/fi/zjdi6jzaolqs25zcg2hxt/Background-Cover.jpg?rlkey=902zt7gq221iprs083f7hfr2v&st=u7txwwsf&dl=0"
          }
          body={[
            `While autonomous technologies rapidly advance, accessibility policies and design standards 
            remain anchored in legacy assumptions. The Americans with Disabilities Act (ADA) and related 
            codes have made great strides in promoting access—but they were not written with autonomous 
            delivery bots, robotic wheelchairs, or shared AV fleets in mind. Meanwhile, most suburban 
            environments continue to be shaped by zoning codes and infrastructure guidelines that 
            prioritize cars over people. This disconnect leaves entire populations under-served by both 
            current systems and future ones. Without updated planning tools and regulatory frameworks, 
            the benefits of emerging technologies may bypass those who need them most. AUA addresses this 
            policy lag by proposing spatial principles and actionable strategies that bridge the gap 
            between innovation and implementation—particularly in aging, auto-oriented communities.`,
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
              "https://dl.dropboxusercontent.com/scl/fi/qfvmb9sk3jzqngb8cxrqb/2_1.png?rlkey=4smpogvovfm3xsalo0c288212&st=k0eah59o&dl=0"
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
            At the heart of AUA is a design and planning ethos—a set of principles that can inform both new 
            development and retrofits of existing neighborhoods. These five principles offer a practical, 
            policy-guiding framework for shaping the mobility systems and built environments of the 
            autonomous future:
            <br></br></>,
            <>
            <strong>Principle 1: Fairness through Form</strong><br></br>
            Prioritize the equitable distribution, configuration, and alignment of mobility services and resources.
            </>,
            <>
            <strong>Principle 2: Flatten the Field</strong><br></br>
            Prioritize the uninterrupted and unrestricted free flow of all people and goods without compromising environmental systems.
            </>,
            <>
            <strong>Principle 3: Minimums to Multiples</strong><br></br>
            Prioritize heterogeneous outcomes that provide users with multiple options.
            </>,
            <>
            <strong>Principle 4: Anticipate Obsolescence </strong><br></br>
            Prioritize flexible outcomes that can successfully be altered or amended to support future needs.
            </>,
            <>
            <strong>Principle 5: Standards across Sectors</strong><br></br>
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
                  By applying AUA principles, we design modifications can improve
                  circulation for disabled users, reduced travel distances, and 
                  enhanced safety at shared mobility interfaces. These interventions
                  demonstrate how <strong>universal access can become a design driver</strong> at 
                  every scale, from parcel layout to district mobility planning.
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
              Click through the images below to explore several OASIS Modules 
              that were developed to analyze key performance objectives related 
              to resource distribution at the district scale.  
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
                  <>These parameters can be translated through policy and code recommendations designed 
                  to help bring autonomous universal access into mainstream planning and development practice. 
                  These include:</>
                  <br></br>
                  <br></br>
                  <>1: New definitions and dimensional standards for accessible routes between buildings 
                  and other local destinations.</>
                  <br></br>
                  <>2: Expanded accessibility criteria for private land uses, including detached housing 
                  and small-scale retail.</>
                  <br></br>
                  <>3: Performance-based metrics for shade distribution and thermal comfort provisions.</>
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
                Click through the images below to explore several key parameters that can be used 
                to support higher levels of accessibility and environmental performance at the block scale.
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