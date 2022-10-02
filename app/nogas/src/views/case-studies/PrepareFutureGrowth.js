import {
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import ResponsiveAppBar from "../../components/AppBar";
import CaseStudyBackground from "../../components/caseStudies/caseStudyBackground";
import CaseStudyLanding from "../../components/caseStudies/caseStudyLanding";
import CaseStudyVision from "../../components/caseStudies/caseStudyVision";
import ImageSlider from "../../components/ImageSlider";

import headerImage from "../../img/4_Case Study 02_ Preparing for Future Growth/0_Cover/1.png";
import backgroundImage from "../../img/4_Case Study 02_ Preparing for Future Growth/2_Background/0_Cover/1.jpg";
import beforeImage from '../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Slider_Before.png'
import afterImage from "../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Slider_After.png";
import densityImage from '../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Smart Density.png'
import vehUsageImage from "../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Vehicle Usage.png";
import envPerfImage from "../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Better Envir-performance.png";
import CaseStudySummary from "../../components/caseStudies/caseStudySummary";
import carImage from '../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Vehicle Trips.png'
import pedImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Pedestrian Accessibility.png";
import permImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Permeable.png";
import canopyImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Canopy.png";


export default function PrepareFutureGrowth() {
  return (
    <div>
      <ResponsiveAppBar />
      <CaseStudyLanding
        image={headerImage}
        title="Preparing for Future Growth"
        subtitle="Single Family Residential Land Use Optimization"
        body={[
          `Today, around 75% of residential suburban areas are zoned for single-family housing.
            This has resulted in highly standardized, car-dependent districts and exclusive
            enclaves, comprised of large contiguous residential islands with minimal distribution
            of public open space, bounded by high-volume, commercial and retail corridors. This
            configuration increases the burden on municipal infrastructure and often requires the
            construction of costly transportation systems and other utilities to support population
            growth.`,
          `Three big factors are determining the need for radically new types of suburban form:
            the proliferation of AEVs, the rapid adoption of post-COVID work from home scenarios
            (WFH), and the massive population of new Millennial homebuyers. Together, these
            three forces are likely to upend many of the fundamental assumptions that have guided
            suburban land use planning over the past century. New residential planning principles
            aimed at increasing social equity, environmental performance, health benefits, and
            overall access to new mobility paradigms, are desperately needed.
            `,
        ]}
      />

      <CaseStudyBackground
        title="Background"
        subtitle="Car-based Single Family Residential"
        image={backgroundImage}
        body={[
          `On average, vehicular surfaces (roadways, driveways,
parking areas, etc.) account for almost 30% of singlefamily
residential areas. Amenities like retail centers
and public open space areas are often located outside
of residential districts, which forces residents to make
multiple daily household trips for shopping, errands, and
other recreational purposes. This car-dependency puts
disproportionate burden on working-class households
and disabled residents.`,
        ]}
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
        <ImageSlider leftImage={beforeImage} rightImage={afterImage} />
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
          { img: densityImage, alt: "", label: "Smart Density" },
          { img: vehUsageImage, alt: "", label: "Reduced Vehicle Usage" },
          {
            img: envPerfImage,
            alt: "",
            label: "Better Environmental Performance",
          },
        ]}
      />

      <div>custom stuff</div>

      <CaseStudySummary
        text={``}
        icons={[
          { img: carImage, pct: "50%", text: "Reduction of vehicle tripps" },
          { img: pedImage, pct: "60%", text: "Increase in pedestrian accessibility" },
          { img: permImage, pct: "80%", text: "Reduction of impervious surface cover" },
          { img: canopyImage, pct: "60%", text: "Increase in tree canopy" },
        ]}
      />
    </div>
  );
}
