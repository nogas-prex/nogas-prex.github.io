import { Grid } from "@mui/material";

import CaseStudyStat from "../../components/caseStudies/background/backgroundStat";
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";
import headerImage from "../../img/4_Case Study 02_ Preparing for Future Growth/2_Background/1_Background Page/0_Cover/1.png";
import statImage from "../../img/4_Case Study 02_ Preparing for Future Growth/2_Background/1_Background Page/1_Chart/2.png";
import statChart from "../../img/4_Case Study 02_ Preparing for Future Growth/2_Background/1_Background Page/1_Chart/1.png";
import metricsImage from "../../img/4_Case Study 02_ Preparing for Future Growth/2_Background/1_Background Page/2_Land Cover Survey/Metrics.png";
import photoPlanImage from "../../img/4_Case Study 02_ Preparing for Future Growth/2_Background/1_Background Page/2_Land Cover Survey/Photo Plan.png";
import surveyDrawingImage from "../../img/4_Case Study 02_ Preparing for Future Growth/2_Background/1_Background Page/2_Land Cover Survey/Survey Drawing.png";


export default function PrepareFutureGrowthBackground() {
  return (
    <div>
      <CaseStudyBackgroundLanding
        image={headerImage}
        title={"SINGLE-FAMILY RESIDENTIAL"}
        subtitle={"Land Use Study"}
        body={[
          `As of October 2021, single-family dwelling units made up over 81 percent of the housing
stock in the United States. The size of single-family housing units has steadily risen
since the start of the 21st century, with the average floor plan at about 2600 ft2 (or 3,100
including two-car garage), using 2016 data.`,
        ]}
      />
      <CaseStudyStat
        title={""}
        body={[``]}
        chart={statImage}
        img={statChart}
        orient="img-chart"
      />
      <CaseStudyBackgroundText
        title={"LAND COVER SURVEY"}
        subtitle={"Establishing Baseline Metrics"}
        body={[
          `Analysis of existing suburban neighborhoods was used
to calculate average land cover metrics associated with
single-family residential land uses.`,
        ]}
      />
      {/* bespoke */}
      <Grid container>
        <Grid item xs={12} md={6}>
          <img alt="foo" src={photoPlanImage} style={{ width: "100%" }}></img>
        </Grid>
        <Grid item xs={12} md={6}>
          <img alt="foo" src={metricsImage} style={{ width: "80%" }}></img>
        </Grid>
        <Grid item xs={12} >
          <img
            alt="foo"
            src={surveyDrawingImage}
            style={{ width: "80%", padding:'5em' }}
          ></img>
        </Grid>
      </Grid>
    </div>
  );
}
