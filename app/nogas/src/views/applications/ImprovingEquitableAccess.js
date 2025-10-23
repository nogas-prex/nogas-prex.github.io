
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
        name: "Existintg Conditions",
        img: "https://dl.dropboxusercontent.com/scl/fi/ww9qqe58f472cg8umozp1/1.jpg?rlkey=yd54or870gctw7s6wtljp4eg0&dl=0",
      },
      {
        name: "AD 1",
        img: "https://dl.dropboxusercontent.com/scl/fi/t376zhn14772ghyphlkzu/2.jpg?rlkey=mu513qrcjvlj3sk72yght1oqh&dl=0",
      },
      {
        name: "AD 2.1",
        img: "https://dl.dropboxusercontent.com/scl/fi/dbq3yjd727otn8vbq8xur/3.jpg?rlkey=uwrpbkvrbakg707xifqc4iy12&dl=0",
      },
      {
        name: "AD 2.2",
        img: "https://dl.dropboxusercontent.com/scl/fi/45ekx5j15svr0g7pkqvef/4.jpg?rlkey=fgcz4iqktfgl6hps11v8ij62a&dl=0",
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
            `Retrofitting legacy suburban districts offers an opportunity to redefine accessibility by 
            working within the grain of existing neighborhoods rather than replacing them. These community-centered 
            adaptations build upon the latent spatial features already present—narrow blocks, service alleys, and 
            variable lot sizes—to create a scalable, phased model of suburban transformation.`,

            `In the near term, interior alleys can be converted into car-free micro-mobility corridors that support safe, 
            low-speed travel for pedestrians, cyclists, and small electric vehicles. Vacant or oversized lots can be 
            reprogrammed into shared courtyards and public open spaces, enhancing social and ecological performance while 
            reducing stormwater runoff and heat accumulation. Mid-block zones may host EV and AEV charging hubs, giving 
            residents shared access to electric and autonomous vehicle infrastructure.`,

            `Over time, this approach supports incremental infill and densification through accessory dwelling units or small 
            multifamily housing, expanding access and affordability without displacement. Along arterial edges, “smart stop” 
            nodes integrate local and regional networks by combining AEV pick-up zones, micro-delivery lockers, and neighborhood-scale 
            amenities.`,

            `This inside-out block strategy reverses the conventional suburban hierarchy, prioritizing shared mobility and environmental 
            resilience over private driveways and parking. The outcome is an equity-centered retrofit model that strengthens existing 
            communities through accessibility, incremental density, and shared open space—transforming suburban blocks into more connected, 
            flexible, and inclusive environments for the future.
            `,
          ]}
        />
        <CaseStudyBackground
          title="BACKGROUND"S
          subtitle="Challenges to Suburban Mobility"
          image={
            "https://dl.dropboxusercontent.com/scl/fi/jjw7gfgko6emnz6cjhrwj/plan.jpg?rlkey=5hfy1ct5p0azenbtzq2j12kg9&dl=0"
          }
          body={[
            `Postwar suburban districts were designed for the automobile, with narrow blocks, small parcels, 
            and interior alleyways organized around private driveways and garages. While these spatial patterns 
            once supported single-family lifestyles, they now constrain mobility, limit public space, and contribute 
            to environmental inefficiencies such as high impervious surface coverage and low walkability.`,
            <br></br>,
            <br></br>,
            `Many mid-century neighborhoods are now underused or partially vacant, creating both challenges and opportunities. 
            Instead of top-down upzoning that risks displacement, adaptive block-level retrofits leverage existing infrastructure 
            to achieve equitable transformation. Strategies such as alley conversions, shared AEV hubs, and incremental infill 
            housing allow communities to evolve over time—enhancing access, reducing stormwater runoff, and improving livability 
            without erasing local character.
            `,
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
          subtitle="Equitable Suburban Transformation"
          body={[
            `Legacy suburban neighborhoods can evolve into inclusive, adaptable, and connected communities by 
            rethinking how land use, mobility, and infrastructure intersect. Rather than pursuing expansive greenfield 
            growth, the future lies in retrofitting existing suburban form—transforming alleys, driveways, and excess 
            pavement into shared corridors for autonomous and micro-mobility modes.`,

            `By updating local codes and design guidelines to anticipate AEV integration, these neighborhoods can balance 
            accessibility, environmental performance, and affordability. The result is a new suburban model—autonomous, 
            multimodal, and equitable—that provides safe access to daily needs within a short walk or ride for all residents.
            `,
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
                  ARTERIAL EDGE
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
                  Retrofiting Legacy Single-Family Neighborhoods
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
                  Legacy single-family neighborhoods are characterized by aging ranch-style homes, 
                  irregular lots, and interior alleyways that organize each block. Many lots are vacant, 
                  and the area faces limited transportation access and mobility options, especially for 
                  lower-income and disabled residents.

                  Near-term adaptations focus on converting alleyways into multi-modal corridors for walking, 
                  cycling, and small vehicles, while vacant parcels become shared public spaces or EV-charging nodes. 
                  <br></br>
                  <br></br>
                  Over time, older homes will transition to mixed-density infill, increasing green space and 
                  reducing heat-island effects.

                  At arterial edges, Smart Stops will link neighborhood mobility to larger regional networks—serving 
                  as community nodes with ride-share hubs, AEV stations, school pickups, and parcel lockers—integrating 
                  local and regional transportation systems into a cohesive neighborhood framework.
                </Typography>

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
                Community Centered Adaptation
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
                Click through to see the transformation of a prototypical suburban block
                optimized for equitable access using autonomous and micromobility
                transportation modes.
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