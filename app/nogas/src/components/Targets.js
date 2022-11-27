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
        text: "Over the past century, suburban development has eroded natural landscapes, damaged ecosystems, and accelerated biodiversity loss. How can new approaches to suburban development mitigate environmental risks, improve ecosystem services, and expand native habitat areas? ",
        icon: "",
        caseStudy: "/case-studies/layering-sustainability/#ls-main",
      },
      {
        title: "Social Equity",
        text: "Historically, non-white and working class communities have been disproportionately restricted from suburban homeownership. How can new approaches to zoning, and community revitalization repair these legacies of generational disinvestment and catalyze lasting social agency? ",
        icon: "",
        caseStudy: "/case-studies/improving-equitable-access/#iea-main",
      },
      {
        title: "Regional Connectivity",
        text: "Suburban communities are no longer tethered to a central business district for employment, entertainment, or social services. How will new approaches to land use along with new mobility offerings, and expanded Work From Home (WFH) employment scenarios create implementable frameworks for the 15-minute suburb? ",
        icon: "",
        caseStudy: "/case-studies/future-of-work/#fow-main",
      },
      {
        title: "Walkability and Accessibility",
        text: "One in four adults in the U.S. have at least one disability, making them less likely to operate a traditional vehicle. How can emerging mobility paradigms be leveraged to help improve universal access and barrier-free walkability? ",
        icon: "",
        caseStudy: "/case-studies/maximize-micromobility/#mm-main",
      },
      {
        title: "Climate Mitigation",
        text: "How will new mobility paradigms in combination with low-carbon technologies and better neighborhood design position the suburbs as key regional carbon sinks? ",
        icon: "",
        caseStudy: "/case-studies/layering-sustainability/#ls-main",
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
        <Grid
          item
          sx={{
            margin: { xs: "0", md: "8em" },
            width: { xs: "90%", md: "50%" },
            padding: { xs: "2em", md: "0" },
          }}
        >
          <Typography variant="sectionTitleUnderline">NOGAS TARGETS</Typography>{" "}
          <br></br>
          <br></br>
          <br></br>
          <Typography variant="landingBody">
            With the adoption of distributed, on-demand autonomous mobility
            services, many of the standardized land use and development patterns
            that have typified suburban form since the early 20th century have
            become redundant or will be obsolete within the next thirty years.
            These disruptions will present significant opportunities for
            optimizing the suburban environment to address several distinct
            challenges:
          </Typography>
          {targets.map((target) => (
            <Box sx={{ margin: "1em" }}>
              <TextCard
                key={target.title}
                title={target.title}
                text={target.text}
                icon={target.icon}
                caseStudy={target.caseStudy}
              />
            </Box>
          ))}
        
        </Grid>
      </Grid>
    );
}