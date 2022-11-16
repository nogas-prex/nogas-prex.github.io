import { AppBar, Grid } from "@mui/material";
import ResponsiveAppBar from "../../components/AppBar";

import CaseStudyStat from "../../components/caseStudies/background/backgroundStat";
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";

export default function PrepareFutureGrowthBackground() {
  return (
    <div id="pfg-background">
      <ResponsiveAppBar />
      <CaseStudyBackgroundLanding
        image={
          "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/0_Cover/1.png"
        }
        title={"SINGLE-FAMILY RESIDENTIAL"}
        subtitle={"Land Use Study"}
        body={[
          `As of October 2021, single-family dwelling units made up over 81
percent of the housing stock in the United States. The size of single-family
housing units has steadily risen since the start of the 21st century, with the
average floor plan of a home in 2016 being 2,600 square feet (3,100 square feet
if a two-car garage is included).`,
        ]}
      />
      <CaseStudyStat
        title={""}
        body={[``]}
        chart={
          "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/2_Background/1_Background+Page/1_Chart/2.png"
        }
        img={
          "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/2_Background/1_Background+Page/1_Chart/1.png"
        }
        orient="img-chart"
      />
      <CaseStudyBackgroundText
        title={"LAND COVER SURVEY"}
        subtitle={"Establishing Baseline Metrics"}
        body={[
          `An analysis of existing
suburban neighborhoods was used to calculate the average land-cover metrics
associated with single-family residential land use.`,
        ]}
      />
      {/* bespoke */}
      <Grid container>
        <Grid item xs={12} md={6}>
          <img
            alt="foo"
            src={
              "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/2_Background/1_Background+Page/2_Land+Cover+Survey/Photo+Plan.png"
            }
            style={{ width: "100%" }}
          ></img>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            alt="foo"
            src={
              "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/2_Background/1_Background+Page/2_Land+Cover+Survey/Metrics.png"
            }
            style={{ width: "80%" }}
          ></img>
        </Grid>
        <Grid item xs={12}>
          <img
            alt="foo"
            src={
              "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/2_Background/1_Background+Page/2_Land+Cover+Survey/Survey+Drawing.png"
            }
            style={{ width: "80%", padding: "5em" }}
          ></img>
        </Grid>
      </Grid>
    </div>
  );
}
