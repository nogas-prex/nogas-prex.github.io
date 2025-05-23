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

export default function PrepareFutureGrowth() {
    const carouselItems = [
      {
        name: "Typical configuration",
        img: "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/5_Compatible+Residential/00_SFH_EXISTING.png",
      },
      {
        name: "Optimized configuration",
        img: "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/5_Compatible+Residential/01_SFH_AD1.png",
      },
      {
        name: "Connectivity Analysis",
        img: "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/5_Compatible+Residential/02_SFH_AD2.png",
      },
      {
        name: "Landscape analysis",
        img: "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/5_Compatible+Residential/03_SFH_AD2_TREE.png",
      },
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
      <div id="pfg-main">
        <ResponsiveAppBar />
        <CaseStudyLanding
          image={
            "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/0_Cover/1_Small.jpg"
          }
          title="PREPARING FOR FUTURE GROWTH"
          subtitle="Single Family Residential Land Use Optimization"
          body={[
            `Today, around 75 percent of residential suburban areas are zoned for single-family housing.[1] This
            has resulted in highly standardized, car-dependent districts, and exclusive enclaves comprised of
            large contiguous residential islands with minimal distribution of public open space, bounded by
            high-volume, commercial and retail corridors. This configuration increases the burden on
            municipal infrastructure and often requires the construction of costly transportation systems
            and other utilities to support population growth.`,
            `Three major forces are determining the need for radically new types of suburban form: the
            proliferation of alternative energy vehicles, the rapid adoption of post-COVID-19 work-from-
            home scenarios, and the massive population of new millennial homebuyers. Together, these
            three forces are likely to upend many of the fundamental assumptions that have guided
            suburban land use planning over the past century. New residential planning principles aimed at
            increasing social equity, environmental performance, health benefits, and overall access to new
            mobility paradigms are desperately needed. 
            `,
          ]}
          citations={[
            `[1] Planetizen. What is Single-Family Zoning? Access (11/20/2022): https://www.planetizen.com/definition/single-family-zoning || Badger, E., Bui, Q. (2019). Cities Start to Question an American Ideal: A House With a Yard on Every Lot. The New York Times. Access (11/20/2022): https://www.nytimes.com/interactive/2019/06/18/upshot/cities-across-america-question-single-family-zoning.html`,
          ]}
        />
        <CaseStudyBackground
          title="BACKGROUND"
          subtitle="Car-based Suburban Form"
          image={
            "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/2_Background/0_Cover/1.jpg"
          }
          body={[
            `On average, vehicular surfaces (roadways, driveways,
                parking areas, etc.) account for almost 30% of single-family
                residential areas. Amenities like retail centers
                and public open space areas are often located outside
                of residential districts, which forces residents to make
                multiple daily household trips for shopping, errands, and
                other recreational purposes. This car-dependency puts
                disproportionate burden on working-class households
                and disabled residents.`,
          ]}
          stats={[
            {
              pct: ">1800",
              text: "household vehicle trips are made each year",
              citation:
                "Federal Highway Administration. (2017). 2017 National Household Travel Survey, U.S. Department of Transportation, Washington, DC.",
            },
            {
              pct: ">25%",
              text: "of residential land is devoted to vehicular use",
              citation:
                "Akbari,H., Rose, L.S., & Taha,H. (2003). Analyzing The Land Cover Of An Urban Environment Using High-Resolution Orthophotos. Landscape and Urban Planning 63, no. 1 (2003), 1–14.",
            },
            // {
            //   pct: ">35%",
            //   text: "GHG Emissions Reduction Potential",
            //   citation:
            //     "Hernandez, D., Lister, M., & Suarez, C. (2011). Location Efficiency and Housing Type Boiling it Down to BTUs. Jonathan Rose Companies & Wallace Roberts Todd, LLC. For US EPA’s Smart Growth Program, #GS-10F-0410R.",
            // },
          ]}
          link={
            "/applications/preparing-future-growth-background/#pfg-background"
          }
        />
        <Grid
          container
          sx={{ width: "100vw", height: "100%", overflowY: "hidden" }}
        >
          <ImageSlider
            leftImage={
              "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/3_Vision/Slider_Before.png"
            }
            rightImage={
              "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/3_Vision/Slider_After.png"
            }
          />{" "}
        </Grid>{" "}
        <CaseStudyVision
          title="VISION"
          subtitle="The Future of Autonomous Suburbs"
          body={[
            `In the near term, a more integrative approach to zoning can help redistribute smaller
commercial clusters and increase park space throughout residential neighborhoods, allowing a
finer-grained suburban fabric to emerge that caters more explicitly to a mix of pedestrians and
microtransit users. This atomization of residential islands, when applied to greenfield
development, can facilitate a significant reduction of long-distance vehicular trips by clustering
land uses together within a much smaller walkshed. It can also increase the environmental
benefits of heterogeneity by expanding access to public open space, which proved to be one of
the most valuable neighborhood public health assets during the COVID-19 pandemic.`,
            `A transition from traditional car-based urbanism to autonomous, on-demand mobility
paradigms will further support a shift towards finer-grained land use planning by leveraging
micromobility options to grant residents greater access to services and amenities.`,
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
                  LAND USE COMPATIBILITY{" "}
                </Typography>
                <br></br>
                <Typography variant="sectionSubtitle">
                  Neighborhood Optimization with OASIS
                </Typography>
                <hr color="EC008C"></hr>
                <Typography variant="bodyBlack">
                  OASIS is a parametric toolbox that can help planners and
                  developers optimize neighborhood- scale land use and mobility
                  frameworks. The land use compatibility optimization tool of
                  OASIS can analyze and optimize the compatibility index of a
                  given land use plan to generate optimal scenarios for future
                  growth.
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
                  <HashLink to={"/oasis"}>Learn more about OASIS</HashLink>
                </Button>
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
                Identifying Trade-Offs with OASIS
              </Typography>
              <Typography variant="body2">
                Click through the analysis of various scenarios below to explore
                potential trade-offs and determine the optimal outcome
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
                COMPATIBLE RESIDENTIAL BLOCK LAYOUT{" "}
              </Typography>
              <br></br>
              <Typography variant="sectionSubtitle">
                Block Optimization with MIRAGE
              </Typography>
              <hr color="EC008C"></hr>
              <Typography variant="bodyBlack">
                MIRAGE is a parametric toolbox that can help planners and
                developers optimize block-scale configurations. The MIRAGE
                toolbox can optimize residential block layout to meet the
                demands of future growth.
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
                <HashLink to={"/mirage"}>Learn more about MIRAGE</HashLink>
              </Button>
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
                Residential Block Configuration Optimization
              </Typography>
              <Typography variant="body2">
                Click through the various scenarios above to see how block
                layout optimization tool can transform an existing single-family
                residential block to be compatible with the autonomous needs of
                the future.
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
              <Typography variant="sectionSubtitle">
                In October 2023, as part of a three-day symposium on the future
                of master planned communities,Jonah Susskind and Southstar Communities
                CEO Thad Rutherford presented ongoing collaborative uses of the NOGAS
                toolkit for optimizing residential development. Their presentation
                demonstrated findings from two ongoing projects in Texas. Download
                their presentation {" "}
                <a href="https://www.dropbox.com/scl/fi/nhmrbrstkvsxi25gcgx6r/Susskind_Rutherford_Future-Cities-Slides.pdf?rlkey=knqhp2tpakobuo49gqphkq3w6&dl=0" style={{ color: "black" }} alt="">
                here
                </a>{" "}, and read {" "}
                <a href="https://www.builderonline.com/land/planning/southstar-communities-drives-toward-more-optimized-neighborhoods_o" style={{ color: "black" }} alt="">
                this
                </a>{" "} interview to learn more.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
}