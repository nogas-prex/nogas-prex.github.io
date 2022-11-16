import { Grid, Typography } from "@mui/material";
import CaseStudyGrid from "../components/CaseStudyGrid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ResponsiveAppBar from "../components/AppBar";

export default function CaseStudies() {
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
            backgroundImage: `url(https://nogas-swar.s3.amazonaws.com/img/2_Case+Study+Home+Page/0_Cover.png)`,
            backgroundSize: "100vw",
            backgroundRepeat: "no-repeat",
          }}
          id="case-studies"
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              justifyContent: "left",
              alignItems: "left",
              textAlign: "left",
              paddingLeft: "19em",
            }}
            id='featured-case-studies'
          >
            <Typography variant="sectionTitle">
              FEATURED CASE STUDIES
            </Typography>
            <br></br>
            <Typography variant="sectionSubtitle">
              Designing the Next Generation Autonomous Suburbs
            </Typography>
            <br></br>
            <hr color="#EC008C"></hr>
            <Typography variant="bodyBlack">
              Since 2018, the NOGAS project has been informed by collaboration
              and partnerships with municipal planning agencies, private
              developers, and urban research institutions. This page highlights
              several case studies that explore optomisation scenarios for
              various communities in the United States.
            </Typography>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
        <Grid
          container
          xs={12}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100vw", backgroundColor: "#00A360", height: "80vh" }}
        >
          <Grid item xs={12} md={6}>
            <img
              src={
                "https://nogas-swar.s3.amazonaws.com/img/2_Case+Study+Home+Page/1_Video+Placeholder.png"
              }
              style={{ width: "100%" }}
            ></img>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={4}>
            <Typography variant="sectionTitleUnderlineWhite">
              WELCOME TO THE NEXT OPTIMIZED GENERATION OF AUTONOMOUS SUBURBS
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ marginTop: "5em" }}
          //   spacing={3}
        >
          <CaseStudyGrid
            title="Improving Equitable Access"
            subtitle="Neighborhood Retrofit"
            text={`This project looks at some of the challenges facing today's "middle neighborhoods" and proposes block-scale redevelopment strategies that prioritieze the equity of existing residents while reducing impacts on local infrastructure.`}
            image={
              "https://nogas-swar.s3.amazonaws.com/img/2_Case+Study+Home+Page/2_Improving+Equitable+Access.png"
            }
            dir="img-txt"
            navLink={"improving-equitable-access"}
          />
          <CaseStudyGrid
            title="Preparing for Future Growth"
            subtitle="Land Use Optimization"
            text={`Using an algorithm-based land use optimization model, this project identifies district-scale strategies for future neighborhood development.`}
            image={
              "https://nogas-swar.s3.amazonaws.com/img/2_Case+Study+Home+Page/3_Preparing+Future+Growth.png"
            }
            navLink={"preparing-future-growth"}

            // dir="img-txt"
          />
          <CaseStudyGrid
            title="Layering Sustainbility"
            subtitle="Landscape Optimization"
            text={`Through comprehensive digitial simulation and analysis, this project coulminates in site-scale proposals for high-performance suburban landscapes, optimized for stormwater capture, heat mitigation, and carbon sequestration.`}
            image={
              "https://nogas-swar.s3.amazonaws.com/img/2_Case+Study+Home+Page/4_Layering+Sustainability.png"
            }
            dir="img-txt"
            navLink={"layering-sustainability"}
          />
          <CaseStudyGrid
            title="Maximizing Micro-mobility"
            subtitle="Streetscape Adaptation"
            text={`In partnership with a major university campus planning committee, this project identifies spatial frameworks for achieving both short-term and long-term autonomous and micro-mobility goals.`}
            image={
              "https://nogas-swar.s3.amazonaws.com/img/2_Case+Study+Home+Page/5_Maximizing+Micromobility.png"
            }
            navLink={"maximize-micromobility"}
            // dir="img-txt"
          />
          <CaseStudyGrid
            title="Designing the Future of Work"
            subtitle="Employment Campus Evolution"
            text={`In partnership with a municipal planning agency, this project reimagines the typical suburban employment campus in response to evolving remote work options, housing challenges, and the need for expanded open space provision.`}
            image={
              "https://nogas-swar.s3.amazonaws.com/img/2_Case+Study+Home+Page/6_Designing+the+Future+of+Work.png"
            }
            dir="img-txt"
            navLink={"future-of-work"}
          />
        </Grid>
        <Grid
          xs={12}
          //   direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "100vw",
            height: "200px",
            backgroundColor: "#EC008C",
          }}
        >
          <Grid item xs={10}>
            <Typography
              sx={{
                paddingTop: "85px",
                paddingLeft: "50px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Click here to schedule a workshop with NOGAS <ArrowForwardIcon />
            </Typography>
          </Grid>
          {/* <Grid item xs={2} sx={{ paddingTop: "85px", paddingLeft: "50px" }}>
            <ArrowForwardIcon />
          </Grid> */}
        </Grid>
      </div>

      // case studies header
      // video
      // lr sequence
      // button
      // footer
    );
}
