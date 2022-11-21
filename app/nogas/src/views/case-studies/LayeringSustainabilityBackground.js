import { Grid } from "@mui/material";

import CaseStudyStat from "../../components/caseStudies/background/backgroundStat";
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";
import { Typography } from "@mui/material";
import ResponsiveAppBar from "../../components/AppBar";
export default function LayeringSustainabilityBackground() {
  return (
    <div id="ls-background">
      <ResponsiveAppBar />
      <CaseStudyBackgroundLanding
        image={
          "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/2_Background/1_Background+Page/0_Cover/1.png"
        }
        title={"SUBURBAN CLIMATE EFFECTS"}
        subtitle={"Extreme Heat and Frequent Flooding"}
        body={[
          `Today, communities around the world are facing the dramatic
effects of climate change. In 2021, more than 80 percent of Americans
experienced at least one heat wave, which were the primary cause of more than
1,300 deaths that year in the U.S. Along with these extreme heat events,
drought and wildfire are threatening millions of lives and properties.
Meanwhile, increased precipitation intensity, along with sea-level rise, is
causing a sustained increase in billion-dollar flood events each decade.`,
        ]}
      />
      <CaseStudyStat
        title={"America's Climate-Impacted Areas Are Becoming More Populous"}
        body={[
          `As accelerated urbanization continues to transform the edges of metropolitan
areas, more people are moving into regions with the highest levels of
environmental risks. In a perilous feedback loop, development in these areas
further exacerbates the effects of climate change, such as extreme heat and
frequent flooding.`,
        ]}
        chart={
          "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/2_Background/1_Background+Page/1_Chart/1.png"
        }
        orient="img-text"
        chart_citation={[
          `Map Source: Map is converted from Redfin; Data Source: ClimateCheck, county records, U.S. Census Bureau`,
        ]}
      />
      <CaseStudyBackgroundText
        title={"EXTREME HEAT"}
        subtitle={"Accelerated by Shadeless Streets"}
        body={[
          `The map on the left shows that American metropolitan areas are
becoming hotter and hotter. The impervious surfaces, especially road surfaces
paved by material with low solar reflectance rate (or albedo), have made a huge
contribution to this condition. Some research has shown that the air
temperature on a paved street can be 40 to 60 degrees warmer than nearby air
temperatures. A lack of tree canopy can worsen these conditions. As shown in
the thermal image at right, the street without shade can be 20 degrees warmer
than a street with a mature tree canopy.`,
        ]}
      />
      <Grid container>
        <Grid item xs={12} md={6}>
          <img
            alt=""
            src={
              "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/2_Background/1_Background+Page/2_Extreme+Heat/Nationwide+Analysis.png"
            }
            style={{ width: "80%" }}
          ></img>
          <Typography sx={{ fontSize: "10pt" }}>
            Data sources: NOAA. 2021. Climate at a glance.Accessed June 2022.
            www.ncdc.noaa.gov/cag.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            alt=""
            src={
              "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/2_Background/1_Background+Page/2_Extreme+Heat/Block+Thermal+Map.png"
            }
            style={{ width: "80%" }}
          ></img>
          <Typography sx={{ fontSize: "10pt" }}>
            Date Source: City of Parramatta, Australia Heat Maps.
            https://parracity.maps.arcgis.com/
            apps/MapSeries/index.html?appid=922a9042e41841448908cf79db20b9b7
          </Typography>
        </Grid>
      </Grid>

      <CaseStudyBackgroundText
        title={"FREQUENT FLOODING"}
        subtitle={"Exacerbated by Paved Surface"}
        body={[
          `According to the National Oceanic and Atmospheric
Administration, precipitation has increased in the U.S. over the past 30 years.
Heavy rainfall events contribute more surface runoff, especially in urbanized
areas with vast amounts of paved surfaces that can’t absorb the increased
rainfall. This ultimately causes more frequent and severe urban flooding.`,
        ]}
      />
      <Grid container sx={{paddingBottom:'2em'}}>
        <Grid item xs={12} md={6}>
          <img
            alt="foo"
            src={
              "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/2_Background/1_Background+Page/3_Frequent+Flooding/Surface+Run+Off.png"
            }
            style={{ width: "80%" }}
          ></img>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            alt="foo"
            src={
              "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/2_Background/1_Background+Page/3_Frequent+Flooding/Nationwide+Analysis.png"
            }
            style={{ width: "80%" }}
          ></img>
          <Typography sx={{fontSize:'10pt'}}>
            Map sources: Bhatia A., Popovich N.(2021). These Maps Tell the Story
            of Two Americas: One Parched, One Soaked. The New York Times. Data
            sources: NOAA’s National Centers for Environmental Information.
            https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
