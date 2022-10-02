import ResponsiveAppBar from "../../components/AppBar";
import CaseStudyVision from "../../components/caseStudies/caseStudyVision";
import CaseStudyLanding from "../../components/caseStudies/caseStudyLanding";
import CaseStudyBackground from "../../components/caseStudies/caseStudyBackground";
import { Grid } from "@mui/material";
import ImageSlider from "../../components/ImageSlider";
import CaseStudySummary from "../../components/caseStudies/caseStudySummary";
import headerImage from '../../img/4_Case Study 02_ Preparing for Future Growth/0_Cover/1.png'


export default function FutureOfWork() {
  return (
    <div>
      <ResponsiveAppBar />
      <CaseStudyLanding
        image={headerImage}
        title="Layering Sustainability"
        subtitle="Landscape Optimization"
        body={[
          `Metro areas are searching harder than ever for solutions to mitigate the effects of
climate change such as extreme heat, drought, flooding, and wildfire. Meanwhile, more
people are moving in than out of areas facing high risk from climate change, which
accelerates the urbanization rate in these areas. As the result of urbanization processes
– more permeable surfaces being paved over. Massive impervious surface further
exacerbates the extreme heat, urban flooding, and other climate disasters. Hence, a
vicious circle is formed.`,
          `remove me
            `,
        ]}
      />

      <CaseStudyBackground
        title="Background"
        subtitle=""
        image={""}
        body={[``]}
        stats={[
          { pct: "1876", text: "Anual Household Vehicle Trips" },
          {
            pct: "25%+",
            text: "Residential Land Devoted to Vehicular Surfaces",
          },
          { pct: "35%+", text: "GHG Emissions Reduction Potential" },
        ]}
      />

      <Grid
        container
        sx={{ width: "100vw", height: "70vh", overflowY: "hidden" }}
      >
        <ImageSlider leftImage={""} rightImage={""} />
      </Grid>
      <CaseStudyVision
        title="Vision"
        subtitle="The Future of Autonomous Suburbs"
        body={[
          `In the near term, a more integrative approach to zoning
        can help redistribute smaller commercial clusters
        and increased park space throughout residential
        neighborhoods, allowing a finer-grained suburban
        fabric to emerge that caters more explicitly to a mix of
        pedestrians, and micro-transit users. This atomization
        of residential islands, when applied to greenfield
        development, can facilitate a significant reduction of
        long-distance vehicular trips by clustering land uses
        together within a much smaller walk shed. It can also
        increase the environmental benefits of heterogeneity
        by expanding access to public open space areas, which
        has proven to be one of the most valuable neighborhood
        public health assets since the beginning of the
        COVID-19 pandemic.`,
          `A transition from traditional car-based urbanism to
        autonomous, on-demand mobility paradigms will further
        support a shift towards finer-grained land use planning
        by leveraging new micro-mobility options to grant users
        greater access to services and amenities.`,
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

      <div>custom stuff</div>

      <CaseStudySummary
        text={``}
        icons={[
          { img: "", pct: "50%", text: "Reduction of vehicle tripps" },
          {
            img: "",
            pct: "60%",
            text: "Increase in pedestrian accessibility",
          },
          {
            img: "",
            pct: "80%",
            text: "Reduction of impervious surface cover",
          },
          { img: "", pct: "60%", text: "Increase in tree canopy" },
        ]}
      />
    </div>
  );
}
