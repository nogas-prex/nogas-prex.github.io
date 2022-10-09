import { Grid } from "@mui/material";

import CaseStudyStat from "../../components/caseStudies/background/backgroundStat";
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";

import headerImage from "../../img/6_Case Study 04_ Maximizing Micro-mobility/2_Background/1_Background Page/0_Cover/1.png";
import statImage from "../../img/6_Case Study 04_ Maximizing Micro-mobility/2_Background/1_Background Page/1_Chart/1.png";

import graphic from "../../img/6_Case Study 04_ Maximizing Micro-mobility/2_Background/1_Background Page/2_Carbon Mitigation/1.png";


export default function MaximizeMicromobilityBackground() {
  return (
    <div>
      <CaseStudyBackgroundLanding
        image={headerImage}
        title={"Car-dominated Travel Mode"}
        subtitle={"is the largest cause of US GHG emissions"}
        body={[
          `The car-dominated travel mode of U.S. suburbanites and car-oriented suburban street
design are promoting each other and create a vicious circle. The average width of
American residential street is 55 ft about three times of average street width in many
other countries. This car-based street design not only induces more car accidents but
also underuses valuable land resources.`,
        ]}
      />
      <CaseStudyStat
        title={
          "US VMT is among the highest in the world, but it does not have much to do with density."
        }
        body={[
          `On average, drivers in the US travel as much as 3.5 times the
distances in the other countries1. However, some research
including a recent one2,3 has disrupted a classic argument
that per capita automobile usage drops off exponentially
with rising population density from a 1989 book - Cities and
Automobile Dependence. New research claims that density
alone can only explain a small fraction of VMT and thus no
stable link is found between density and VMT.`,
        ]}
        chart={statImage}
        orient="img-text"
      />
      <CaseStudyBackgroundText
        title={"CARBON MITIGATION"}
        subtitle={"Potential of Micro-mobility"}
        body={[
          `As the largest source of U.S. domestic GHG emissions,
transportation sector, especially vehicle trips that are
smaller than 6 miles, provides a huge opportunity for
reducing GHG emissions.`,
          `Hence, if total 5.11 average household daily vehicle trips
or even partially can be replaced by more environmentalfriendly
transportation modes such as electrified micromobility,
then a large fraction of U.S. domestic GHG
emission can be mitigated.`,
        ]}
      />
      {/* bespoke */}
      <Grid container>
        <Grid item xs={12}>
          <img alt="foo" src={graphic} style={{ width: "80%" }}></img>
        </Grid>
      </Grid>
    </div>
  );
}
