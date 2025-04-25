import { AppBar, Grid } from "@mui/material";
import ResponsiveAppBar from "../../components/AppBar";


import CaseStudyStat from "../../components/caseStudies/background/backgroundStat";
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { HashLink } from "react-router-hash-link";
export default function AutonomousUniversalAccessBackground() {
  return (
    <div id="aua-background">
      <ResponsiveAppBar />
      <CaseStudyBackgroundLanding
        image={
          "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/0_Cover/1.png"
        }
        title={"SINGLE-FAMILY RESIDENTIAL"}
        subtitle={"Land Use Study"}
        body={[
          `As of October 2021, single-family dwelling units made up over 81
percent of the housing stock in the United States.[1-2] The size of single-family
housing units has steadily risen since the start of the 21st century, with the
average floor plan of a home in 2016 being 2,600 square feet (3,100 square feet
if a two-car garage is included).[3]`,
        ]}
        citations={[
          `[1] Statista. (2021). Share of housing stock in the United States as of October 2021, by type. https://www.statista.com/statistics/1042122/housing-stock-by-type-usa/#:~:text=As%20of%20October%202021%2C%20single,start%20of%20the%2021st%20century.`,
          `[2] JOINT CENTER FOR HOUSING STUDIES OF HARVARD UNIVERSITY. (2022). The State of the Nation’s Housing 2022. https://www.jchs.harvard.edu/sites/default/files/reports/files/Harvard_JCHS_State_Nations_Housing_2022.pdf`,
          `[3] U.S. Census Bureau (2016). Median and Average Square Feet of Floor Area in New Single-Family Houses Completed. https://www.census.gov/construction/chars/pdf/squarefeet.pdf.`,
        ]}
        parent="preparing-future-growth/#pfg-main"
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
        chart_citation={[
          `Mather, Mark, Kelvin Pollard, and Linda A. Jacobsen. Bureau of the Census. 2011. First Results from the 2010 Census. July. (http://www.prb.org/pdf11/
reports-on-america-2010-census.pdf) (Projections based on 2000-2010 growth rates)`,
        ]}
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
              "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/2_Background/1_Background+Page/2_Land+Cover+Survey/Metrics+for+case+study+02+background+land+use+survey.png"
            }
            style={{ width: "80%" }}
          ></img>
        </Grid>
        <Grid item xs={12}>
          <img
            alt="foo"
            src={
              "https://nogas-swar.s3.amazonaws.com/img/4_Case+Study+02_+Preparing+for+Future+Growth/2_Background/1_Background+Page/2_Land+Cover+Survey/Case+Study+02_Prepare+Future+Growth_Background+Land+Use+Survey.png"
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
            <HashLink to={`/applications/preparing-future-growth/#pfg-main`}>
              Back to Case Study page
            </HashLink>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
