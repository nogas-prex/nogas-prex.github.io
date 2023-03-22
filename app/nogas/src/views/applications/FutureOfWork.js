import {
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import { ImageItem } from "../../components/ImageCarousel";
import ImageSlider from "../../components/ImageSlider";
import Button from "@mui/material/Button";
import { HashLink } from "react-router-hash-link";
import ResponsiveAppBar from "../../components/AppBar";
import CaseStudyBackground from "../../components/caseStudies/caseStudyBackground";
import CaseStudyLanding from "../../components/caseStudies/caseStudyLanding";
import CaseStudyVision from "../../components/caseStudies/caseStudyVision";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CaseStudySummary from "../../components/caseStudies/caseStudySummary";

export default function FutureOfWork() {
    const carouselItems = [
      {
        name: "Existing",
        img: "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/4_Modular+Workspace/0+Employment+Campus_Existing.png",
      },
      {
        name: "Near Term",
        img: "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/4_Modular+Workspace/1+Employment+Campus_Nearterm.png",
      },
      {
        name: "Between Near Term and Long Term",
        img: "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/4_Modular+Workspace/2+Employment+Campus_Between+Nearterm+and+Longterm.png",
      },
      {
        name: "Long Term",
        img: "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/4_Modular+Workspace/3+Employment+Campus_Longterm.png",
      },
      {
        name: "Long Term [with tree]",
        img: "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/4_Modular+Workspace/4+Employment+Campus_+Longterm+with+Tree.png",
      },
    ];

    return (
      <div id="fow-main">
        <ResponsiveAppBar />
        <CaseStudyLanding
          image={
            "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/0_Cover/1_Small.jpg"
          }
          title="DESIGNING THE FUTURE OF WORK"
          subtitle="Employment Campus Evolution"
          body={[
            `Since the birth of the suburban employment campus in the 1940s, these developments have
            provided large, high-quality, efficient workspaces for big corporations. Today, according to the
            U.S. Bureau of Labor Statistics, 32 percent of U.S. employment is in the suburbs of large
            metropolitan areas.[1] However, as people and jobs continue to suburbanize, the distance
            between people and jobs is growing, and the geography between people and jobs is changing.[2]`,
            `The future of work is less certain than ever since the COVID-19 pandemic disrupted
            conventional working modes. Remote working or working from home is becoming more popular
            and necessary than ever.[3] The suburb-to-suburb commuting challenge, the evolving remote work
            options, and proliferation of autonomous mobility and micromobility provide a key opportunity
            to reimagine the typical suburban employment campus.`,
          ]}
          citations={[
            `[1] U.S. Bureau of Labor Statistics. (2019). Quarterly Census of Employment and Wages. https://www.bls.gov/cew/ || Kolko, J. (2019). Suburban Jobs Are Growing Fastest, But Urban Jobs Pay More. Bloomberg. https://www.bloomberg.com/news/articles/2019-12-09/why-the-suburban-job-surge-might-not-last#:~:text=According%20to%20the%20U.S.%20Bureau,at%20least%201%20million%20people.`,
            `[2] Kneebone, E., & Holmes, N. (2015). The growing distance between people and jobs in metropolitan America. Brookings Institute. https://www.brookings.edu/wp-content/uploads/2016/07/srvy_jobsproximity.pdf`,
            `[3] Parker, K., Horowitz, J.M., & Minkin, R. (2022). COVID-19 Pandemic Continues To Reshape Work in America. Pew Research Center. https://www.pewresearch.org/social-trends/2022/02/16/covid-19-pandemic-continues-to-reshape-work-in-america/`,
          ]}
        />
        <CaseStudyBackground
          title="BACKGROUND"
          subtitle="Outdated Employment Campus Design"
          image={
            "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/2_Background/0_Cover/1.jpg"
          }
          body={[
            `The design of suburban campuses themselves hasn’t evolved
much over the past several decades. The footprint of parking lots designed to
support these campuses is often several times larger than the office buildings,
which not only wastes valuable land, but also causes larger-scale environmental
degradation.`,
          ]}
          stats={[
            {
              pct: "30%+",
              text: "U.S. Employments is in Suburbs",
              citation:
                "U.S. Bureau of Labor Statistics. (2019). Quarterly Census of Employment and Wages. https://www.bls.gov/cew/ || Kolko, J. (2019). Suburban Jobs Are Growing Fastest, But Urban Jobs Pay More. Bloomberg. https://www.bloomberg.com/news/articles/2019-12-09/why-the-suburban-job-surge-might-not-last#:~:text=According%20to%20the%20U.S.%20Bureau,at%20least%201%20million%20people.",
            },
            {
              pct: "50%+",
              text: "Campus Land Devoted to Vehicular Surfaces",
              citation: "Based on our land use survey.",
            },
            {
              pct: "Limited",
              text: "Walkable Access to Public Transit",
              citation: "Based on our land use survey.",
            },
          ]}
          link={"/applications/future-of-work-background/#fow-background"}
        />
        <Grid
          container
          sx={{ width: "100vw", height: "100%", overflowY: "hidden" }}
        >
          <ImageSlider
            leftImage={
              "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/3_Vision/Slider_Before.png"
            }
            rightImage={
              "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/3_Vision/Slider_After.png"
            }
          />{" "}
        </Grid>
        <CaseStudyVision
          title="VISION"
          subtitle="The Future of Autonomous Suburbs"
          body={[
            `In the near term, evolving remote work options, especially hybrid working modes, will
contribute to increased demands for smaller, more flexible workspaces. Meanwhile, fewer
workers on-site at the same time will need fewer parking spaces than before, creating
opportunities to convert large parking areas to housing or to enhance a site’s environmental
performance.`,
            `In the autonomous future, with complete adoption of autonomous mobility services, on-site
parking can be further reduced or even eliminated.`,
          ]}
          icons={[
            { img: "", alt: "", label: "Smart Density" },
            { img: "", alt: "", label: "Reduced Vehicle Usage" },
            {
              img: "",
              alt: "",
              label: "Better Environmental Performance",
            },
          ]}
        />
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
                  MODULAR WORKSPACE{" "}
                </Typography>
                <br></br>
                <Typography variant="sectionSubtitle">
                  Block Optimization with MIRAGE
                </Typography>
                <hr color="EC008C"></hr>
                <Typography variant="bodyBlack">
                  MIRAGE is a parametric toolbox that can help planners and
                  developers optimize block-scale configurations. The modular
                  block layout optimization tool can optimize any given block
                  layout based on predefined parameters to generate more
                  flexible block typologies.
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
              <Carousel
                navButtonsAlwaysVisible={true}
                sx={{
                  maxWidth: "100%",
                  minHeight: { xs: "250px", sm: "750px" },
                }}
              >
                {carouselItems.map((img, i) => (
                  <ImageItem key={i} image={img.img} name={img.name} />
                ))}
              </Carousel>
            </Grid>{" "}
            <Grid item xs={0} sm={3}>
              {" "}
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">
                Click through the various scenarios above to see how an existing
                suburban employment campus can be transformed to meet the
                demands of a future employment campus.
              </Typography>
            </Grid>{" "}
            <Grid item xs={0} sm={3}>
              {" "}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
}