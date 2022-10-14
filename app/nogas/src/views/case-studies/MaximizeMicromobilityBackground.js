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
        title={"CAR-DOMINATED TRAVEL MODE"}
        subtitle={"is the largest source of US GHG emissions"}
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
          `The U.S. has among the highest vehicle miles traveled (VMT)  in the world. On average, 
          the distance traveled by drivers in the U.S. is as much as 3.5 times greater than in other 
          countries. While it has long been thought that per capita automobile usage drops off exponentially 
          with rising population density, density alone explains only a small fraction of VMT.`,
        ]}
        chart={statImage}
        orient="img-text"
      />
      <CaseStudyBackgroundText
        title={"CARBON MITIGATION"}
        subtitle={"Potential of Micro-mobility"}
        body={[
          `The transportation sector is the largest source of U.S. domestic greenhouse-gas (GHG) emissions. Vehicle 
          trips that are less than 6 miles provide a huge opportunity for reducing GHG emissions. If even a portion 
          of household daily vehicle trips can be replaced by more environmentally friendly transportation modes, 
          such as electrified micromobility, then a large fraction of U.S. domestic GHG emission can be mitigated.`,  
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
