import { Grid } from "@mui/material";

import CaseStudyStat from "../../components/caseStudies/background/backgroundStat";
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";
import ResponsiveAppBar from "../../components/AppBar";

import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { HashLink } from "react-router-hash-link";
export default function FutureOfWorkBackground(props) {
  return (
    <div id="fow-background">
      <ResponsiveAppBar />
      <CaseStudyBackgroundLanding
        image={
          "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/2_Background/0_Cover/1.jpg"
        }
        title={"EMPLOYMENT CAMPUS"}
        subtitle={"Land Use Study"}
        body={[
          `The design of suburban campuses themselves hasn’t evolved
          much over the past several decades. The footprint of parking lots designed to
          support these campuses is often several times larger than the office buildings,
          which not only wastes valuable land, but also causes larger-scale environmental
          degradation.`,
        ]}
        parent="future-of-work/#fow-main"
      />
      <CaseStudyStat
        title={"A FOREFRONT OF INNOVATION?"}
        body={[
          `Since its first appearance in the 1940s, the suburban employment
          campus has been imagined as an expression of architectural and design
          innovation.[1] The photograph on the left shows a 1950s employment campus
          design exhibited during a conference about the future of city planning. This
          picture shows that there is little difference between today’s employment
          campuses and those designed 70 years ago.`,
        ]}
        text_citation={[
          `[1] Mozingo, L. A. (2016). Pastoral capitalism: A history of suburban corporate landscapes. MIT Press.`,
        ]}
        chart={
          "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/2_Background/1_Background+Page/1_Chart/1.png"
        }
        orient="img-text"
        chart_citation={[
          `Source: Nina Leen/ Time & Life Pictures/Getty Images)`,
        ]}
      />
      <CaseStudyBackgroundText
        title={"LAND COVER SURVEY"}
        subtitle={"Establishing Baseline Metrics"}
        body={[
          `Existing suburban employment campuses were analyzed,
and average land cover metrics were calculated as benchmarks for comparing
further design generation and optimization.`,
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
            alt=""
            src={
              "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/2_Background/1_Background+Page/2_Land+Cover+Survey/Metrics+for+case+study+05+background+land+use+survey.png"
            }
            style={{ width: "80%" }}
          ></img>
        </Grid>
        <Grid item xs={12}>
          <img
            alt=""
            src={
              "https://nogas-swar.s3.amazonaws.com/img/7_Case+Study+05_+Designing+the+Future+of+Work/2_Background/1_Background+Page/2_Land+Cover+Survey/Case+Study+05_Employment+Campus_Background+Land+Use+Survey.png"
            }
            style={{ width: "80%", padding: "5em" }}
          ></img>
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
            <HashLink to={`/applications/future-of-work/#fow-main`}>
              Back to Case Study page
            </HashLink>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
