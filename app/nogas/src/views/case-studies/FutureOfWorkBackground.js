import { Grid } from "@mui/material";

import CaseStudyStat from "../../components/caseStudies/background/backgroundStat";
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";

import headerImage from "../../img/7_Case Study 05_ Designing the Future of Work/2_Background/1_Background Page/0_Cover/1.png";
import statImage from "../../img/7_Case Study 05_ Designing the Future of Work/2_Background/1_Background Page/1_Chart/1.png";

import metricImage from "../../img/7_Case Study 05_ Designing the Future of Work/2_Background/1_Background Page/2_Land Cover Survey/Metrics.png";
import photoPlan from "../../img/7_Case Study 05_ Designing the Future of Work/2_Background/1_Background Page/2_Land Cover Survey/Photo Plan.png";
import surveyDrawing from "../../img/7_Case Study 05_ Designing the Future of Work/2_Background/1_Background Page/2_Land Cover Survey/Survey Drawing.png";

export default function FutureOfWorkBackground(props) {
  return (
    <div>
      <CaseStudyBackgroundLanding
        image={headerImage}
        title={"EMPLOYMENT CAMPUS"}
        subtitle={"Land Use Study"}
        body={[
          `Suburban employment campus is always the forefront of innovation. However, the design
of suburban campus itself hasn’t evolved a lot in the past several decades. Car-oriented
design causes excessive amount of land devoted to parking lots and paved roads. In most
cases, the footprint of parking lots is several times larger than office buildings, which not
only wastes valuable land resources but also causes environment degradations.`,
        ]}
      />
      <CaseStudyStat
        title={"A FOREFRONT OF INNOVATION?"}
        body={[
          `Since its first appearance in 1940s, suburban employment
campus always represents the forefront of innovation.
However, the design of suburban employment campus
hasn’t evolved for years. The left photo shows a 1950s
employment campus design exhibited on a conference
about the future of city planning. From the image, we can
tell there is little change between nowadays employment
campus design and the scenario from 70 years ago.`,
        ]}
        chart={statImage}
        orient="img-text"
      />
      <CaseStudyBackgroundText
        title={"LAND COVER SURVEY"}
        subtitle={"Establishing Baseline Metrics"}
        body={[
          `Existing suburban employment campus land uses was
analyzed and calculated to obtain average land cover
metrics for further design generation and optimization.`,
        ]}
      />
      {/* bespoke */}
      <Grid container>
        <Grid item xs={12} md={6}>
          <img alt="foo" src={photoPlan} style={{ width: "100%" }}></img>
        </Grid>
        <Grid item xs={12} md={6}>
          <img alt="foo" src={metricImage} style={{ width: "80%" }}></img>
        </Grid>
        <Grid item xs={12}>
          <img
            alt="foo"
            src={surveyDrawing}
            style={{ width: "80%", padding: "5em" }}
          ></img>
        </Grid>
      </Grid>
    </div>
  );
}
