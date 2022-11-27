import { Grid } from "@mui/material";

import CaseStudyStat from "../../components/caseStudies/background/backgroundStat";
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";
import { Typography } from "@mui/material";
import ResponsiveAppBar from "../../components/AppBar";

import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { HashLink } from "react-router-hash-link";
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
experienced at least one heat wave,[1] which were the primary cause of more than
1,300 deaths that year in the U.S.[2] Along with these extreme heat events,
drought and wildfire are threatening millions of lives and properties.
Meanwhile, increased precipitation intensity, along with sea-level rise, is
causing a sustained increase in billion-dollar flood events each decade.[3]`,
        ]}
        citations={[
          `[1] Kaplan, S., Tran, A.B. (2022). More than 40 percent of Americans live in counties hit by climate disasters in 2021. The Washington Post.  https://www.washingtonpost.com/climate-environment/2022/01/05/climate-disasters-2021-fires/`,
          `[2] Sarofim, M.C., S. Saha, M.D. Hawkins, D.M. Mills, J. Hess, R. Horton, P. Kinney, J. Schwartz, and A. St. Juliana. 2016. Chapter 2: Temperature-related death and illness. In: The impacts of climate change on human health in the United States: A scientific assessment. U.S. Global Change Research Program. https://health2016.globalchange.gov/`,
          `[3] NOAA. (2022). 2021 U.S. billion-dollar weather and climate disasters in historical context. https://www.climate.gov/news-features/blogs/beyond-data/2021-us-billion-dollar-weather-and-climate-disasters-historical`,
        ]}
        parent="layering-sustainability/#ls-main"
      />
      <CaseStudyStat
        title={"America's Climate-Impacted Areas Are Becoming More Populous"}
        body={[
          `As accelerated urbanization continues to transform the edges of metropolitan
          areas, more people are moving into regions with the highest levels of
          environmental risks.[1] In a perilous feedback loop, development in these areas
          further exacerbates the effects of climate change, such as extreme heat and
          frequent flooding.[2]`,
        ]}
        text_citation={[
          `[1] Katz, L., & Sandoval-Olascoaga, S. (2021). More People Are Moving In Than Out of Areas Facing High Risk From Climate Change. REDFIN. https://www.redfin.com/news/climate-migration-real-estate-2021/`,
          `[2] Schueler T.R. (1994). The importance of imperviousness. Watershed Protection Techniques, v. 1, no. 3: 100-111. || Klein, R.D. (1979). Urbanization and stream water quality impairment. Water Resources Bulletin v. 15, no. 4: 948-63. || Randall, C.W., Grizzard, T.J., and Hoehn, R.C.1978. “Impact of urban runoff in the Occoquan watershed.” Virginia Water Resources Research Center, Blacksburg, Virginia, Bulletin 80: 77.`,
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
          becoming hotter and hotter.[1] The impervious surfaces, especially road surfaces
          paved by material with low solar reflectance rate (or albedo), have made a huge
          contribution to this condition.[2] Some research has shown that the air
          temperature on a paved street can be 40 to 60 degrees warmer than nearby air
          temperatures.[3] A lack of tree canopy can worsen these conditions. As shown in
          the thermal image at right, the street without shade can be 20 degrees warmer
          than a street with a mature tree canopy.[4]`,
        ]}
        citations={[
          `[1] NOAA National Centers for Environmental information. Climate at a Glance: National Mapping, published November 2022, retrieved on November 21, 2022 from https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/national/mapping`,
          `[2] Li, H. (2015). Pavement materials for heat island mitigation: design and management strategies: Chapter 4 - Reflective Pavements and Albedo. Butterworth-Heinemann.`,
          `[3]  Chen, M., Xu, G., Wu, S., & Zheng, S. (2010). High-temperature hazards and prevention measurements for asphalt pavement. In 2010 International Conference on Mechanic Automation and Control Engineering (pp. 1341-1344). IEEE.`,
          `[4] Pfautsch, S., Rouillard, S. (2019) Benchmarking heat in Parramatta, Sydney's Central River City. Western Sydney University.`,
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
          Administration, precipitation has increased in the U.S. over the past 30 years.[1]
          Heavy rainfall events contribute more surface runoff, especially in urbanized
          areas with vast amounts of paved surfaces that can’t absorb the increased
          rainfall. This ultimately causes more frequent and severe urban flooding.`,
        ]}
        citations={[
          `[1] NOAA National Centers for Environmental information. U.S. Climate Normals. retrieved on November 21, 2022 from https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals`,
        ]}
        parent="layering-sustainability/#ls-main"
      />
      <Grid container sx={{ paddingBottom: "2em" }}>
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
          <Typography sx={{ fontSize: "10pt" }}>
            Map sources: Bhatia A., Popovich N.(2021). These Maps Tell the Story
            of Two Americas: One Parched, One Soaked. The New York Times. Data
            sources: NOAA’s National Centers for Environmental Information.
            https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ padding: "2em" }}>
          <Button
            variant="outlined"
            style={{
              color: "#EC008C",
              borderColor: "#EC008C",
            }}
            startIcon={<ArrowBack />}
          >
            <HashLink to={`/case-studies/layering-sustainability/#ls-main`}>
              Back to Case Study page
            </HashLink>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
