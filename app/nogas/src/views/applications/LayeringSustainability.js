import { Link } from "@mui/material";
import {
    Grid,
    Typography,
} from "@mui/material";
import { HashLink } from "react-router-hash-link";
import ResponsiveAppBar from "../../components/AppBar";
import CaseStudyBackground from "../../components/caseStudies/caseStudyBackground";
import CaseStudyLanding from "../../components/caseStudies/caseStudyLanding";
import CaseStudyVision from "../../components/caseStudies/caseStudyVision";
import ImageSlider from "../../components/ImageSlider";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


export default function LayeringSustability() {
    return (
      <div id="ls-main">
        <ResponsiveAppBar />
        <CaseStudyLanding
          image={
            "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/0_Cover/1_Small.jpg"
          }
          imageAlt="Layering sustainability scenario map"
          title="LAYERING SUSTAINABILITY"
          subtitle="Landscape Optimization"
          body={[
            `Today, metropolitan areas are increasingly experiencing the effects of climate change, including
            extreme heat, drought, flooding, and wildfire.[1] Meanwhile, the intensification of rural land use
            and the addition of impervious surfaces – both intrinsic to the process of urbanization itself –
            are further exacerbating these environmental risks.[2]`,
            `The widespread adoption of autonomous mobility services may be an opportunity to break this
            disastrous cycle by reducing the size of vehicle fleets and transforming massive networks of
            roadways and other impervious surfaces into multi-functional green infrastructure.`,
          ]}
        />
        <CaseStudyBackground
          title="BACKGROUND"
          subtitle="Suburban Climate Effects"
          image={
            "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/2_Background/0_Cover/1.png"
          }
          imageAlt="Layering sustainability scenario map"
          body={[
            `Today, communities around the world are facing the dramatic
            effects of climate change. In 2021, more than 80 percent of Americans
            experienced at least one heat wave, [1] which were the primary cause of more than
            1,300 deaths that year in the U.S.[2] Along with these extreme heat events,
            drought and wildfire are threatening millions of lives and properties.
            Meanwhile, increased precipitation intensity, along with sea-level rise, is
            causing a sustained increase in billion-dollar flood events each decade.[3]`,
          ]}
          stats={[
            {
              pct: "1300+",
              text: "Heat-related Death per year in U.S.",
              citation:
                "Sarofim, M.C., S. Saha, M.D. Hawkins, D.M. Mills, J. Hess, R. Horton, P. Kinney, J. Schwartz, and A. St. Juliana. 2016. Chapter 2: Temperature-related death and illness. In: The impacts of climate change on human health in the United States: A scientific assessment. U.S. Global Change Research Program. https://health2016.globalchange.gov/",
            },
            {
              pct: "80%+",
              text: "Americans Experienced a Heat Wave in 2021",
              citation:
                "Kaplan, S., Tran, A.B. (2022). More than 40 percent of Americans live in counties hit by climate disasters in 2021. The Washington Post.  https://www.washingtonpost.com/climate-environment/2022/01/05/climate-disasters-2021-fires/",
            },
            {
              pct: "20°F+",
              text: "Cooler Temperature under Tree Shade",
              citation:
                "Akbari, H., Kurn, D. M., Bretz, S. E., & Hanford, J. W. (1997). Peak power and cooling energy savings of shade trees. Energy and buildings, 25(2), 139-148.",
            },
          ]}
          link={
            "/applications/layering-sustainability-background/#ls-background"
          }
        />
        <Grid
          container
          sx={{ width: "100vw", height: "100%", overflowY: "hidden" }}
        >
          <ImageSlider
            leftImage={
              "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/3_Vision/Slider_Before.png"
            }
            imageAlt="Layering sustainability scenario map"
            rightImage={
              "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/3_Vision/Slider_After.png"
            }
          />{" "}
        </Grid>{" "}
        <CaseStudyVision
          title="VISION"
          subtitle="The Future of Sustainable Suburbs"
          body={[
            `In the near term, optimized street design, along with retrofitted parking areas, can reduce
excessive pavement and offer space for expanding the urban canopy. This can simultaneously
help sequester atmospheric carbon, while helping to alleviate pressures related to stormwater
management and extreme heat exposure. Alternatively, this could provide new real estate for
housing in order to facilitate more resilient and affordable communities.`,
            `In the fully autonomous future, a dramatic reduction of pavement and other vehicular surfaces
can allow for a more flexible and compact block configuration that prioritizes green
infrastructure and improved access to environmental system services.`,
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
                sx={{ padding: { xs: "2em", md: "7em" }, textAlign: "left" }}
              >
                <Typography variant="sectionTitle"
                            sx={(t) => ({
                              [t.breakpoints.down("sm")]: {
                                fontSize: "1.6rem",
                                lineHeight: 1.2,                    
                                },
                              })}
                >
                  {" "}
                  GREEN SPACE CONTIGUITY{" "}
                </Typography>
                <br></br>
                <Typography variant="sectionSubtitle"
                            sx={(t) => ({
                              [t.breakpoints.down("sm")]: {
                                fontSize: "1.2rem",
                                lineHeight: 1.2,                    
                                },
                              })}
                >
                  Neighborhood Optimization with OASIS
                </Typography>
                <hr color="EC008C"></hr>
                <Typography variant="bodyBlack"
                            sx={(t) => ({
                              [t.breakpoints.down("sm")]: {
                                fontSize: "1rem",
                                lineHeight: 1.2,
                                justifyContent: "right",
                                },
                              })}
                >
                  OASIS is a parametric toolbox that can help planners and
                  developers optimize neighborhood- scale land use and mobility
                  frameworks. The greenspace contiguity optimization tool of the
                  OASIS toolbox can analyze and optimize the contiguity of
                  greenspace, which is one of the most important indicators of
                  environmental performance in a given area. The diagram below
                  shows how greenspaces contribute to both climate change
                  adaptation and mitigation.
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
                  <HashLink to={"/oasis"}>Learn more about OASIS</HashLink>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sx={{ paddingBottom: "3em", textAlign: "center", paddingLeft: { xs: "1em", md: "0" }, paddingRight: { xs: "1em", md: "0" } }} xs={12} md={12}>
              <Typography variant="sectionSubtitle"
                          sx={(t) => ({
                            [t.breakpoints.down("sm")]: {
                              fontSize: "1.2rem",
                              paddingBottom: "1em",
                              lineHeight: 1.2,
                              marginBottom: "2rem",
                              },
                            })}
              >
                Landscape Benefits for Suburban Communities
              </Typography>
              <img
                src={
                  "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/4_Green+Space+Comtiguity/Case+Study+03+Green+Space+Contiguity.jpg"
                }
                style={{ width: "80%", paddingTop: "1em" }}
              />
            </Grid>

          </Grid>
        </Grid>
      </div>
    );
}