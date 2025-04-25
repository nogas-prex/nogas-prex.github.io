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
import ImageCard from "../../components/ImageCard";

export default function CurbToKitchen() {
    const carouselItems = [
      {
        name: "Typical configuration",
        img: "https://dl.dropboxusercontent.com/scl/fi/3ynswutdxhpce9othsazp/Curbs-01.jpg?rlkey=5gms4f7g3nmn9a2an71pf8evt&st=5to08c7v&dl=0",
      },
      {
        name: "Optimized configuration",
        img: "https://dl.dropboxusercontent.com/scl/fi/dc06fzuxs1a0zx1adpnj8/Curbs-02.jpg?rlkey=tombxmraykntyhxsngti2gekm&st=mpr2gloz&dl=0",
      },
  ];
  
  const luCarouselItems = [
    {
      name: "",
      img: "https://dl.dropboxusercontent.com/scl/fi/kqidqokyjpg3kztbncy9i/Step1-03.jpg?rlkey=q6eqsz3exia454sb9mw30k0pl&st=0y28i9o1&dl=0",
    },
    {
      name: "",
      img: "https://dl.dropboxusercontent.com/scl/fi/daewd961zotythzrepd80/Step2-03.jpg?rlkey=4b6a0em1rsxcv7iqate72qnqz&st=665iy0ld&dl=0",
    },
    {
      name: "",
      img: "https://dl.dropboxusercontent.com/scl/fi/3h4j3vv92luf2hdotjyy1/Step3-03.jpg?rlkey=8iau8z10650l37142zz5w2gsh&st=b68nwdsa&dl=0",
    },
    {
      name: "",
      img: "https://dl.dropboxusercontent.com/scl/fi/qjar1k69lq9hn2odywuxf/Step4-03.jpg?rlkey=ftk8wl1djw9h7ucxt6kp816a6&st=836f4lr4&dl=0",
    },
    {
      name: "",
      img: "https://dl.dropboxusercontent.com/scl/fi/o5dm7atacx48nypowttbs/Step5-03.jpg?rlkey=wyel9kohbb8o4w5rxflcdqtud&st=tc2jnqsa&dl=0",
    },
  ];
    return (
      <div id="c2k-main">
        <ResponsiveAppBar />
        <CaseStudyLanding
          image={
            "https://dl.dropboxusercontent.com/scl/fi/p2pscsrqt31b89z4cp2bv/Drone-Delivery.jpg?rlkey=lg0bghx48mqhj0pj7eitw77nq&st=gxm4d3t3&dl=0"
          }
          title="CURB-TO-KITCHEN"
          subtitle="Beyond The Last Mile"
          body={[
            `Curb-to-Kitchen (C2K) explores one of the great unsolved challenges of the
            autonomous mobility transition: what happens after drop-off. As AVs, delivery bots,
            and low-speed micro-mobility systems reshape how people move, little attention has
            been paid to the last-meter connection between curb and destination—especially for
            mobility-challenged users. This research initiative, developed through real-world
            partnerships and supported by the Toyota Mobility Foundation, investigates how land
            use planning, building code, and urban design must evolve to accommodate this
            missing link.

            The project explores everything from accessible micro-mobility corridors and
            front-door vehicle loading zones to future-ready parcel delivery networks, modeled
            using the NOGAS Toolkit. C2K reframes the suburban landscape as a multi-modal
            ecosystem where robotic logistics, shared mobility, and aging-in-place strategies
            converge—bridging the last meter between the street and the home.`,
          ]}
        />
        <CaseStudyBackground
          title="WHY THIS MATTERS"
          subtitle="Rethinking Suburban Access"
          image={
            "https://dl.dropboxusercontent.com/scl/fi/1mvqwbsu79e6qok1wx6r7/EV-stop-02.jpg?rlkey=5l51y6zkrovxdhmgss6ci53az&st=px9a0d3b&dl=0"
          }
          body={[
            `Most accessibility codes in the U.S. were written for public
            facilities, not for homes, sidewalks, or the everyday
            experience of disabled or aging residents. In sprawling
            suburban contexts, this has created enormous physical and
            logistical barriers to independence, health, affordability and
            dignity.

            By envisioning seamless movement between curb and
            kitchen—via bots, drones, AVs, and shared services—C2K
            supports the “aging in place” by increasing access to basic
            services, recreation, and social infrastructure. It also
            recognizes that the future of access isn’t just about
            vehicles; it’s about rethinking buildings, setbacks, delivery
            zones, and thresholds to create more permeable
            environments that function for all users—from walkers to
            bots—turning streetscapes`,
          ]}
          stats={[
            {
              pct: ">50%",
              text: "Population Lives in Auto-Dependent Suburbs",
            },
            {
              pct: "1 in 4",
              text: "Adults Live With a Disability",
            },
            {
              pct: "40%",
              text: "Adults +65 Experience Mobility Issues",
            },
          ]}
        />
        <Grid
          container
          sx={{ width: "100vw", height: "100%", overflowY: "hidden" }}
        >
          <img
          src="https://dl.dropboxusercontent.com/scl/fi/jcb7misru5rmfz5xgkhjd/C2K.jpg?rlkey=5ktab0vlb0qknl6jdmbw61sij&st=babwfpqf&dl=0"
          alt="Curb to Kitchen"
          style={{ width: "100vw", height: "80%", objectFit: "cover" }}
          />{" "}
        </Grid>{" "}
        <CaseStudyVision
          title="WHAT IS CURB-TO-KITCHEN?"
          subtitle="Designing Multimodal Suburbs for Everyday Mobility"
          body={[
            `C2K refers to the last-meter interface between mobility
            systems and the home or destination—between where one is
            dropped off and where one needs to go. In legacy street and
            land use systems, this space is fragmented and often
            impassable to those with mobility challenges. In a future
            shaped by autonomous transportation systems, this interface
            must be radically rethought.
            


            C2K challenges conventional frameworks that end access at
            the driveway or sidewalk. C2K strategies demonstrate how
            spatial changes—like widened setbacks, shared drop-off
            areas, and AV-friendly site plans—can be layered into existing
            and new communities. Early outputs of the project include new
            block typologies, scenario-based design proposals, and code
            recommendations for integrating AV-ready, universally
            accessible features into mixed-use suburban districts`,
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
                  FROM NEIGHBORHOODS TO NETWORKS{" "}
                </Typography>
                <br></br>
                <Typography variant="sectionSubtitle">
                  A Framework For Micromobility
                </Typography>
                <hr color="EC008C"></hr>
                <Typography variant="bodyBlack">
                One of C2K’s key contributions is its rethinking of parcel delivery systems in
                the context of autonomous mobility. As AV technology matures, the project
                anticipates a shift away from conventional vehicle drop-off toward hybrid and
                fully autonomous delivery networks that include drones, robotic carts, and
                flexible delivery hubs.
                <br></br>
                <br></br>
                In AD1 scenarios, delivery vehicles still reach individual homes—but with
                integrated support from localized bots or drone dispatch centers. In AD2,
                robotic delivery fleets serve entire neighborhoods from shared nodes,
                reducing vehicular delivery distances by up to 26%, while robotic delivery
                becomes 63% more efficient. The C2K team modeled multi-modal delivery
                routes, adaptable loading zones, and last-meter fulfillment infrastructure—all
                designed to minimize travel distances, reduce energy use, and support
                direct-to-doorstep and in-home delivery for all users, regardless of mobility
                level.
                </Typography>
                <br></br>
                <br></br>
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
            sx={{
              paddingLeft: { xs: "2em", md: "25%" },
              paddingRight: { xs: "2em", md: "25%" },
              marginBottom: "2em",
            }}
          >
            <Grid item xs={12} md={6} elevation={5}>
              <Typography variant="sectionSubtitle">
                Generation Method
              </Typography>
              <Typography variant="body2">
              Click through the diagrams below to explore the generational method
              for creating neighborhood-scale multi-modal networks.
              </Typography>
              <br></br>
            </Grid>
            <Grid item xs={12} md={6} elevation={5}>
              <Carousel
                navButtonsAlwaysVisible={true}
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
                THE CURB, REIMAGINED{" "}
              </Typography>
              <br></br>
              <Typography variant="sectionSubtitle">
                Design Recommendations For A More Connected Future
              </Typography>
              <hr color="EC008C"></hr>
              <Typography variant="bodyBlack">
              At the heart of C2K is a simple question: What does an accessible 
              autonomous future look like—at the scale of the curb? Today’s 
              accessibility codes were not written for AVs, delivery bots, or low-speed 
              shared mobility systems. Passenger loading zones, curb cuts, and 
              sidewalk interfaces need to be rethought from the ground up.
              <br></br>
              <br></br>
              C2K delivers design and code recommendations across land use 
              types—addressing conflicts between pedestrians, vehicles, and 
              delivery systems; proposing performance-based zoning for loading and 
              access; and reframing the curb as a social interface. The goal is not just 
              compliance, but design that proactively includes disabled, elderly, and 
              mobility-challenged users in the AV transition. A seamless 
              journey—from curb to kitchen—begins with reimagining standard 
              features like curbs, crosswalks, and set-backs as agents of improved 
              barrier-free movement.
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
                Redesigning the Curb
              </Typography>
              <Typography variant="body2">
                Click through the two scenarios to see how existing ada curb cuts can be retrofitted to incorporate a range of micro-mobility elements.
              </Typography>
              
            </Grid>
            <Grid item xs={12} md={6} elevation={5}>
              <Carousel
                navButtonsAlwaysVisible={true}
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