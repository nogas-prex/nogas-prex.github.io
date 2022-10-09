import { Grid } from "@mui/material";

import CaseStudyStat from "../../components/caseStudies/background/backgroundStat";
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";

import headerImage from "../../img/5_Case Study 03_ Layering Sustainability/2_Background/1_Background Page/0_Cover/1.png";
import statImage from "../../img/5_Case Study 03_ Layering Sustainability/2_Background/1_Background Page/1_Chart/1.png";
import thermalMap from "../../img/5_Case Study 03_ Layering Sustainability/2_Background/1_Background Page/2_Extreme Heat/Block Thermal Map.png";
import natlMap from "../../img/5_Case Study 03_ Layering Sustainability/2_Background/1_Background Page/2_Extreme Heat/Nationwide Analysis.png";

import runoffMap from "../../img/5_Case Study 03_ Layering Sustainability/2_Background/1_Background Page/3_Frequent Flooding/Surface Run Off.png";
import precipMap from "../../img/5_Case Study 03_ Layering Sustainability/2_Background/1_Background Page/3_Frequent Flooding/Nationwide Analysis.png";

export default function LayeringSustainabilityBackground() {
  return (
    <div>
      <CaseStudyBackgroundLanding
        image={headerImage}
        title={"SUBURBAN CLIMATE EFFECTS"}
        subtitle={"Extreme Heat and Frequent Flooding"}
        body={[
          `Climate change is not just around the corner but have already come with dramatic
effects. In 2021, over 80% of Americans have experienced at least one heat wave, which
is the primary cause for more than 1300 death per year in U.S. Companying with extreme
heat, drought and wildfire are threatening millions of people’s life. Meanwhile, increased
precipitation intensity along with sea level rising has caused more billion-dollar flooding
events than any year in the previous four decades.`,
        ]}
      />
      <CaseStudyStat
        title={"America's Climate-Endangered Areas Are Becoming More Populous"}
        body={[
          `An analysis has shown that America’s climate endangered
areas are becoming more populous than
ever, which accelerates the urbanization rate in these
areas. Massive impervious surfaces, as the result of
these rapid urbanization processes, further exacerbate
the negative effects of climate change such as extreme
heat and frequent flooding that will be explained in the
following sections.`,
        ]}
        chart={statImage}
        orient="img-text"
      />
      <CaseStudyBackgroundText
        title={"EXTREME HEAT"}
        subtitle={"Accelerated by Shadeless Streets"}
        body={[
          `The left map shows that American metropolitan areas
are becoming hotter and hotter. The impervious surface,
especially road surfaces paved by material with low
solar reflectance rate (or Albedo), have made a huge
contribution to this condition. Some research has shown
that the temperature of paved street can be 40-60 °F
warmer than air temperature. Besides the pavement,
lacking tree shade also worsens the condition. As
shown in the thermal image(right), the street without
tree shade can be 20 °F warmer than street covered
with tree shade.`,
        ]}
      />
      <Grid container>
        <Grid item xs={12} md={6}>
          <img alt="foo" src={natlMap} style={{ width: "80%" }}></img>
        </Grid>
        <Grid item xs={12} md={6}>
          <img alt="foo" src={thermalMap} style={{ width: "80%" }}></img>
        </Grid>
      </Grid>

      <CaseStudyBackgroundText
        title={"FREQUENT FLOODING"}
        subtitle={"Exacerbated by Paved Surface"}
        body={[
          `According to the National Oceanic and Atmospheric
Administration (NOAA), U.S. domestic precipitation
is increasing in the past 30 years, which brings more
surface runoffs in urban area. However, a large number
of paved surfaces in suburban area can only absorb as
low as 5% of increasing runoffs, which ultimately induce
the frequent urban flooding.`,
        ]}
      />
      <Grid container>
        <Grid item xs={12} md={6}>
          <img alt="foo" src={runoffMap} style={{ width: "80%" }}></img>
        </Grid>
        <Grid item xs={12} md={6}>
          <img alt="foo" src={precipMap} style={{ width: "80%" }}></img>
        </Grid>
      </Grid>
    </div>
  );
}
