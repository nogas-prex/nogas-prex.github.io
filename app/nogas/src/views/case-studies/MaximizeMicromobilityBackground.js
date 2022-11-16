import { Grid } from "@mui/material";

import CaseStudyStat from "../../components/caseStudies/background/backgroundStat";
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";

export default function MaximizeMicromobilityBackground() {
  return (
    <div id="mm-background">
      <CaseStudyBackgroundLanding
        image={
          "https://nogas-swar.s3.amazonaws.com/img/6_Case+Study+04_+Maximizing+Micro-mobility/2_Background/1_Background+Page/0_Cover/1.png"
        }
        title={"CAR-DOMINATED TRAVEL MODE"}
        subtitle={"is the largest source of US GHG emissions"}
        body={[
          `The average width of an American residential street is 55 feet,
which is three times the average street width in many other countries. This car-
based street design not only leads to more car accidents (because there are
more cars on the road), its also wastes valuable land resources.`,
        ]}
      />
      <CaseStudyStat
        title={
          "US VMT is among the highest in the world, but it does not have much to do with density."
        }
        body={[
          `The U.S. has among the highest vehicle miles traveled (VMT) in
the world. On average, the distance traveled by drivers in the U.S. is as much as
3.5 times greater than in other countries. While it has long been thought that
per capita automobile usage drops off exponentially with rising population
density, density alone explains only a small fraction of VMT.`,
        ]}
        chart={
          "https://nogas-swar.s3.amazonaws.com/img/6_Case+Study+04_+Maximizing+Micro-mobility/2_Background/1_Background+Page/1_Chart/1.png"
        }
        orient="img-text"
      />
      <CaseStudyBackgroundText
        title={"CARBON MITIGATION"}
        subtitle={"Potential of Micro-mobility"}
        body={[
          `The transportation sector is the
largest source of U.S. domestic greenhouse-gas (GHG) emissions. Vehicle trips
that are less than 6 miles provide a huge opportunity for reducing GHG
emissions. If even a portion of household daily vehicle trips can be replaced by
more environmentally friendly transportation modes, such as electrified
micromobility, then a large fraction of U.S. domestic GHG emission can be
mitigated.`,
        ]}
      />
      {/* bespoke */}
      <Grid container>
        <Grid item xs={12}>
          <img
            alt="foo"
            src={
              "https://nogas-swar.s3.amazonaws.com/img/6_Case+Study+04_+Maximizing+Micro-mobility/2_Background/1_Background+Page/2_Carbon+Mitigation/1.png"
            }
            style={{ width: "80%" }}
          ></img>
        </Grid>
      </Grid>
    </div>
  );
}
