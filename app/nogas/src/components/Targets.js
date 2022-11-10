import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextCard from "./TextCard";
import ImageSlider from "./ImageSlider";



export default function Targets() { 
    var targets = [
      {
        title: "Environmental Sustainability",
        text: "Over the past century, suburban development has eroded natural landscaped, damaged ecological systems, and accelerated biodiversity loss. How can new approaches to suburban development reduce impervious surfaces, expand native habitat corridors, and improve stormwater management?",
        icon: "",
      },
      {
        title: "Social Equity",
        text: "Since the 1950s, a combination of redlining, urban renewal campaigns, and other planning initiatives have disproportionaly restricted non-white, working class communities from suburban homeownership. How can new approaches to zoning, and community revitilization repair legacies of generational disinvestment and catalyze lasting social agency?",
        icon: "",
      },
      {
        title: "15-minute Suburb",
        text: "Suburban communities are no longer tethered to a central business district for employment, entertainment, and social services. How will new approaches to land use, new mobility networks, and expanded Work From Home employment scenarios create implementable frameworks for the 15-minute suburb?",
        icon: "",
      },
      {
        title: "Walkability and Accessibility",
        text: "One in four US adults have at least one disability making them less likely to operate a traditional vehicle. How can the emerging technologies of autonomous mobility expand the idea of universal access and barrier-free walkability?",
        icon: "",
      },
      {
        title: "Climate Mitigation",
        text: "How will new mobility paradigms in combination with low-carbon technologies and better neighborhood design reposition the suburbs as regional carbon sinks?",
        icon: "",
      },      
    ];

    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "fff",
          minHeight: "100vh",
          marginTop: "2em",
        }}
      >
        <Grid item sx={{ margin: "8em", width: "50vw" }}>
          <Typography variant="sectionTitleUnderline">NOGAS TARGETS</Typography>{" "}
          <br></br>
          <br></br>
          <br></br>
          <Typography variant="landingBody">
            With the adoption of distributed, on-demand autonomous mobility
            services, many of the standardized land use and development patterns
            that have typified suburban form since the early 20th century have
            become redundant or will be obsolete within the next twenty years.
            These disruptions will present significant opportunities for
            optimizing the suburban environment to address several distinct
            challenges:
          </Typography>
          {targets.map((target) => (
            <Box sx={{ margin: "1em" }}>
              <TextCard
                title={target.title}
                text={target.text}
                icon={target.icon}
              />
            </Box>
          ))}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Box sx={{ margin: "0em", width: "50vw" }}>
            <Typography variant="sectionTitleUnderline">
              MODELING INCREMENTAL PROGRESS
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <Typography variant="landingBody">
              The transition to an autonomous future for the suburbs is already
              underway, but a complete transition will require communities to
              plan for incremental change. The NOGAS project identifies
              opportunities for both short-term and long-term objectives to be
              established, providing end-users with a wide range of
              scenario-based insights.
            </Typography>
          </Box>
          <Box sx={{ width: "100%", marginBottom: "2em" }}>
            <img
              src={
                "https://nogas-swar.s3.amazonaws.com/img/2_Incremental+Progress/Timeline.png"
              }
              style={{ width: "100%" }}
            ></img>
          </Box>
          <Box sx={{ width: "100%", marginBottom: "2em" }}>
            <ImageSlider
              leftImage={
                "https://nogas-swar.s3.amazonaws.com/img/2_Incremental+Progress/Slider_Before.png"
              }
              rightImage={
                "https://nogas-swar.s3.amazonaws.com/img/2_Incremental+Progress/Slider_After.png"
              }
            />
          </Box>
        </Grid>
      </Grid>
    );
}