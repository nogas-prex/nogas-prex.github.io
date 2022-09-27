import { CardContent, CardMedia, Grid, Typography } from "@mui/material";
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
        <Grid
          container
          xs={12}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "100vw",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ justifyContent: "left", alignItems: "left" }}
          >
            <Typography variant="h3">Improving Equitable Access</Typography>
            <Typography variant="h5">Neighborhood Retrofit</Typography>
            <Typography variant="body2" sx={{ margin: "3em" }}>
              In 1925, barely 17% of households owned cars; today, it's over
              93%. Only about 5% of the US working population uses public
              transit to get to work. This dominance is likely to have expanded
              during the pandemic and remain, as people desire more safe,
              private space while they travel. However, incompetence of driving
              brought up by aging and disability has hindered suburban seniors
              and disabled populatioins from accessing essential mobilities.
            </Typography>
            <Typography variant="body2" sx={{ margin: "3em" }}>
              Fortunately, the proliferation of autonomous mobility can be a
              solution to solve this issue where the key issues is how to
              transfer existing private vehicle oriented suburban planning and
              design paradigm into autonomous mobility adapted form, meanwhile,
              make sure all population groups have equitable access to these
              facilities.
            </Typography>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100vw", backgroundColor: "white", height: "100vh" }}
        >
          <Grid item xs={12} md={6} sx={{ padding: "3em" }}>
            <Card
              // backgroundImage={`url(${metricAgingImage})`}
              sx={{
                height: "500px",
                backgroundImage: `url(${metricAgingImage})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
              elevation={10}
            >
              <CardContent sx={{ display: "flex", }}>
                <Grid
                  container
                  direction="row"
                  alignItems="bottom"
                  justifyContent="bottom"
                  spacing={3}
                >
                  <Grid item xs={4}>
                    <Typography variant="h3White">25%</Typography>
                    <Typography variant="body1">
                      Adults have at least one disability
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h3White">25%+</Typography>
                    <Typography variant="body1">
                      Fewer daily trips made by people with disabilities
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h3White">14%</Typography>
                    <Typography variant="body1">
                      Disabled adults with mobility limitations
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sx={{}} xs={12} md={5}>
            <Typography variant="h3">Background</Typography>
            <Typography variant="h5">
              Mobility Access Challenge in Suburbs
            </Typography>
            <hr></hr>
            <Typography variant="body2">
              Today, around 55 million Americans are over 65, by 2060 this
              number will be 100 million. Agigin populations usually have more
              physical difficulty in driving and a higher accident rate.
              Comapnying with aging, higher ratio of disability has added even
              more challenge to realize the equitable access, especially given
              that suburban area has both higher ratio of aging populaton and
              fewer mobility options than other places.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ width: "100vw", height: "70vh", overflowY: "hidden" }}
        >
          {/* <Grid item> */}
          <ImageSlider leftImage={beforeImage} rightImage={afterImage} />
          {/* </Grid> */}
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ backgroundColor: "#00A360", minHeight: "500px" }}
          xs={12}
        >
          <Grid item xs={6} sx={{ padding: "5em" }}>
            <Typography variant="h3White">Vision</Typography>
            <Typography>Autonomous Suburbs for Equitable Access</Typography>
            <hr></hr>
            <Typography variant="body1">
              In the near term, a more comprehensive approach to optimize
              connectivity and accessibility ration of multi-modal mobility
              networks is established to generate a more inclusive neighborhood
              land use patterns and mobility framework, which has equitable
              amenity access for everyone within a 5-10 min walking despite
              various moving speeds between younger populations, seniors, and
              disabled population.
            </Typography>
            <Typography>
              A long-term transformation from private car oriented suburban form
              to autonomous mobility paradigms will further improve the mobility
              access for aging and disabled populations to a large extent
              through retrofitting existing residential block. The optimized
              residential block can accommodate the essential infrastructures of
              the autonomous mobility and related service for each household.
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ padding: "5em" }}>
            <Grid container direction="row">
              <Grid item xs={1} md={4}>
                <Card sx={metricStyle} elevation={0}>
                  <CardContent>
                    <img
                      src={smartDensityImg}
                      alt="smart-density"
                      style={{ width: "80%" }}
                    ></img>
                    <Typography>Smart Density</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={1} md={4}>
                <Card sx={metricStyle} elevation={0}>
                  <CardContent>
                    <img
                      src={equityAccessImg}
                      alt="smart-density"
                      style={{ width: "80%" }}
                    ></img>
                    <Typography>Equitable Mobility Access</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={1} md={4}>
                <Card sx={metricStyle} elevation={0}>
                  <CardContent>
                    <img
                      src={envPerfImage}
                      alt="smart-density"
                      style={{ width: "80%" }}
                    ></img>
                    <Typography>Better Environmental Performance</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="column" sx={{ marginTop: "7vh" }}>
          <Grid item>
            <Grid container direction="row">
              <Grid item xs={0} md={6}></Grid>
              <Grid item xs={12} md={6} sx={{ padding: "7em" }}>
                <Typography variant="h3">Equitable Access</Typography>
                <Typography variant="h5">
                  Neighborhood Optimization with OASIS
                </Typography>
                <hr></hr>
                <Typography variant="body2">
                  OASIS is a parametric toolbox that can help planners and
                  developers optimize neighborhood-scale land use and mobility
                  frameworks. The access optimization tool of OASIS toolbox can
                  analyze and optimize accessbility index of given neighrohood
                  masterplan to generate the optimal scenario with more
                  equitable access.
                </Typography>
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
        <Grid
          container
          xs={12}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ backgroundColor: "#00A360", minHeight: "200px" }}
        >
          <Grid item>
            <Typography>
              Compared with today's average suruban form, long-term optimization
              scenarios demonstrate valuable performance benefits including:
            </Typography>
            <Grid container direction="row">
              <Grid item>
                <Card sx={metricStyle} elevation={0}>
                  <CardContent sx={{}}>
                    <img
                      src={densityImage}
                      alt="foo"
                      style={{ width: "200px" }}
                    ></img>
                    <Typography sx={{}}>40%</Typography>
                    <Typography>Increase in density</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={metricStyle} elevation={0}>
                  <CardContent sx={{}}>
                    <img
                      src={MODImage}
                      alt="foo"
                      style={{ width: "200px" }}
                    ></img>
                    <Typography sx={{}}>80%</Typography>
                    <Typography>
                      Increase in mobility on-demand access
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={metricStyle} elevation={0}>
                  <CardContent sx={{}}>
                    <img
                      src={permeableImage}
                      alt="foo"
                      style={{ width: "200px" }}
                    ></img>
                    <Typography sx={{}}>15%</Typography>
                    <Typography>
                      Reduction of impervious surface cover
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={metricStyle} elevation={0}>
                  <CardContent sx={{}}>
                    <img
                      src={canopyImage}
                      alt="foo"
                      style={{ width: "200px" }}
                    ></img>
                    <Typography sx={{}}>10%</Typography>
                    <Typography>Increase in tree canopy</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
}