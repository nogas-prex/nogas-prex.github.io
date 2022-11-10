import { Grid } from "@mui/material";

import CaseStudyStat from "../../components/caseStudies/background/backgroundStat";
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";

export default function FutureOfWorkBackground(props) {
  return (
    <div>
      <CaseStudyBackgroundLanding
        image={
          "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/2_Background/0_Cover/1.jpg"
        }
        title={"EMPLOYMENT CAMPUS"}
        subtitle={"Land Use Study"}
        body={[
          `The design of suburban campuses themselves hasn’t evolved much over the past 
          several decades. The footprint of parking lots designed to support these 
          campuses is often several times larger than the office buildings, which 
          not only wastes valuable land, but also causes larger-scale environmental 
          degradation.`,
        ]}
      />
      <CaseStudyStat
        title={"A FOREFRONT OF INNOVATION?"}
        body={[
          `Since its first appearance in the 1940s, the suburban employment campus 
          has been imagined as an expression of architectural and design innovation. 
          The photograph on the left shows a 1950s employment campus design exhibited 
          during a conference about the future of city planning. This picture shows 
          that there is little difference between today’s employment campuses and 
          those designed 70 years ago.`,
        ]}
        chart={
          "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/2_Background/1_Background+Page/1_Chart/1.png"
        }
        orient="img-text"
      />
      <CaseStudyBackgroundText
        title={"LAND COVER SURVEY"}
        subtitle={"Establishing Baseline Metrics"}
        body={[
          `Existing suburban employment campuses were analyzed, and average land cover 
          metrics were calculated as benchmarks for comparing further design generation 
          and optimization.`,
        ]}
      />
      {/* bespoke */}
      <Grid container>
        <Grid item xs={12} md={6}>
          <img
            alt="foo"
            src={
              "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/2_Background/1_Background+Page/2_Land+Cover+Survey/Photo+Plan.png"
            }
            style={{ width: "100%" }}
          ></img>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            alt="foo"
            src={
              "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/2_Background/1_Background+Page/2_Land+Cover+Survey/Metrics.png"
            }
            style={{ width: "80%" }}
          ></img>
        </Grid>
        <Grid item xs={12}>
          <img
            alt="foo"
            src={
              "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/2_Background/1_Background+Page/2_Land+Cover+Survey/Survey+Drawing.png"
            }
            style={{ width: "80%", padding: "5em" }}
          ></img>
        </Grid>
      </Grid>
    </div>
  );
}
