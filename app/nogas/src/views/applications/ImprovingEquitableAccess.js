
import ResponsiveAppBar from "../../components/AppBar";
import { Grid, Typography } from "@mui/material";
import ImageSlider from "../../components/ImageSlider";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "react-material-ui-carousel";
import { ImageItem } from '../../components/ImageCarousel'


import CaseStudyLanding from "../../components/caseStudies/caseStudyLanding";
import CaseStudyBackground from "../../components/caseStudies/caseStudyBackground";
import CaseStudyVision from "../../components/caseStudies/caseStudyVision";

// import ImageCarousel from "../../components/ImageCarousel";
import { HashLink } from "react-router-hash-link";

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
            "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/0_Cover/1_Small.jpg"
          }
          title="IMPROVING EQUITABLE ACCESS"
          subtitle="Neighborhood Retrofit"
          body={[
            `Since 1925, the number of car-owning households in the United States has skyrocketed from 17
            percent to more than 91.6 percent. In the suburbs, where less than five percent of the U.S.
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
            {
              pct: "25%",
              text: " of adults have at least one disability",
              citation:
                "U.S. Centers for Disease Control and Prevention. Disability Impacts All of Us. Access (08/02/2022): https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html",
            },
            {
              pct: ">25%",
              text: "Fewer daily trips are made by people with disabilities",
              citation:
                "Brumbaugh, S. (2018). Travel Patterns of American Adults with Disabilities. U.S. Department of Transportation, Bureau of Transportation Statistics. https://www.bts.gov/sites/bts.dot.gov/files/2022-01/travel-patterns-american-adults-disabilities-updated-01-03-22.pdf",
            },
            {
              pct: "14%",
              text: "of disabled adults experience mobility limitations",
              citation:
                "U.S. Centers for Disease Control and Prevention. Disability Impacts All of Us. Access (08/02/2022): https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html",
            },
          ]}
          link={
            "/applications/improving-equitable-access-background/#iea-background"
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
                  EQUITABLE ACCESS{" "}
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
                                },
                              })}
                >
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
            // sx={{ marginLeft: {xs:'2em',md:"25%"}, marginRight: {xs:'2em',md:"25%"}, width: {xs:'75%',md:"50%"}, paddingBottom:'2em' }}
            sx={{
              paddingLeft: { xs: "2em", md: "25%" },
              paddingRight: { xs: "2em", md: "25%" },
              marginBottom: "2em",
            }}
          >
            <Grid item xs={12} md={6} elevation={5}>
              <Typography variant="sectionSubtitle"
                          sx={(t) => ({
                            [t.breakpoints.down("sm")]: {
                              fontSize: "1.2rem",
                              lineHeight: 1.2,
                              },
                            })}
              >
                Neighborhood Configuration Optimization
              </Typography>
              <Typography variant="body2"
                          sx={(t) => ({
                            [t.breakpoints.down("sm")]: {
                              fontSize: ".65rem",
                              lineHeight: 1.2,
                              padding: ".5rem 1rem",
                              justifyContent: "right",
                              },
                            })}
              >
                Click through the various scenarios below to see how OASIS can
                generate different master plan scenarios to determine an optimal
                configuration based on predetermined accessibility objectives.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} elevation={5}>
              <Carousel
                navButtonsAlwaysVisible={false}
                sx={{ maxWidth: "100%", minHeight: "600px", objectFit: "fill" }}
              >
                {carouselItems.map((img, i) => (
                  <ImageItem key={i} image={img.img} name={img.name} />
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
}