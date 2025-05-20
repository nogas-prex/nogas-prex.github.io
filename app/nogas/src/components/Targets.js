import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextCard from "./TextCard";
import ImageSlider from "./ImageSlider";
import equityImg from '../img/icons/Social Equity.png'
import connectivityImg from '../img/icons/Regional Connectivity.png'
import accessibilityImg from '../img/icons/Walkability and Accessibility.png'
import climateImg from '../img/icons/Climate Mitigation.png'
import sustainabilityImg from '../img/icons/Environmental Sustainability.png'

export default function Targets() { 
    var targets = [
      {
        title: "Autonomous Universal Access",
        text: "Emerging autonomous mobility technologies, such as autonomous vehicles, autonomous electric-powered wheelchairs, autonomous motorized scooters, and autonomous delivery robots, offer potential new solutions to the growing number of adults and individuals living with disabilities in limited mobility neighborhoods. ",
        icon: climateImg,
        caseStudy: "/applications/autonomous-universal-access/#aua-main",
      },
      {
        title: "Curb-to-Kitchen",
        text: "Curb-to-Kitchen (C2K) explores on of the great unsolved challenges of the autonomous mobility transition: what happens after drop-off. As AVs, delivery bots, and low-speed micro-mobility systems reshape how people move, little attention has been paid to the last-meter connection between curb and destination. ",
        icon: climateImg,
        caseStudy: "/applications/curb-to-kitchen/#c2k-main",
      },
      {
        title: "Landscape Performance",
        text: "Over the past century, suburban development has eroded natural landscapes, damaged ecosystems, and accelerated biodiversity loss. How can new approaches to suburban development mitigate environmental risks, improve ecosystem services, and expand native habitat areas? ",
        icon: sustainabilityImg,
        caseStudy: "/applications/layering-sustainability/#ls-main",
      },
      {
        title: "Streetscape Adaptation",
        text: "In partnership with a major university campus planning committee, this project identifies spatial frameworks for achieving both short-term and long-term autonomous and micro-mobility goals.",
        icon: accessibilityImg,
        caseStudy: "/applications/maximize-micromobility/#mm-main",
      },
      {
        title: "Near-Zero Carbonization",
        text: "Using an algorithm-based land use optimization model, this project identifies district-scale strategies for future neighborhood development.",
        icon: climateImg,
        caseStudy: "/applications/preparing-future-growth/#pfg-main",
      },
      {
        title: "Workplace Connectivity",
        text: "Suburban communities are no longer tethered to a central business district for employment, entertainment, or social services. How will new approaches to land use along with new mobility offerings, and expanded Work From Home (WFH) employment scenarios create implementable frameworks for the 15-minute suburb? ",
        icon: connectivityImg,
        caseStudy: "/applications/future-of-work/#fow-main",
      },
      {
        title: "Reparative Zoning",
        text: "Historically, non-white and working class communities have been disproportionately restricted from suburban homeownership. How can new approaches to zoning, and community revitalization repair these legacies of generational disinvestment and catalyze lasting social agency? ",
        icon: equityImg,
        caseStudy: "https://nogas.mit.edu/oasis",
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
          <Grid item>
            <Grid container>
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
        </Grid>
      </Grid>
    );
}