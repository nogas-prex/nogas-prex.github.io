import { Grid } from "@mui/material";

import CaseStudyStat from "../../components/caseStudies/background/backgroundStat";
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";
import ResponsiveAppBar from "../../components/AppBar";
import { Typography } from "@mui/material";
export default function MaximizeMicromobilityBackground() {
  return (
    <div id="mm-background">
      <ResponsiveAppBar />
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
3.5 times greater than in other countries [1]. While it has long been thought that
per capita automobile usage drops off exponentially with rising population
density, density alone explains only a small fraction of VMT [2-3].`,
        ]}
        chart={
          "https://nogas-swar.s3.amazonaws.com/img/6_Case+Study+04_+Maximizing+Micro-mobility/2_Background/1_Background+Page/1_Chart/1.png"
        }
        orient="img-text"
        chart_citation={[
          `Data Source: U.S. Energy Information Administration, International Energy Outlook, Bureau of Transportation Statistics, National Transportation Statistics`,
        ]}
        text_citation={[
          `1. Liisa Ecola, Charlene Rohr, Johanna Zmud Tobias Kuhnimhof, Peter Phleps (2014). The Future of Driving in Developing Countries. The RAND
Corporation
`,
          `2. Boarnet, M. and Sarmiento, S. 1998. Can land-use policy really affect travel behavior? A study of the link between non-work travel and land-use
characteristics. Urban Studies 35, 1155-1169.
`,
          `3. Ewing, Hamidi, S., Tian, G., Proffitt, D., Tonin, S., & Fregolent, L. (2018). Testing Newman and Kenworthy’s Theory of Density and Automobile
Dependence. Journal of Planning Education and Research, 38(2), 167–182. https://doi.org/10.1177/0739456X16688767`,
        ]}
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
      <Grid container sx={{ paddingBottom: "2em" }}>
        <Grid item xs={12}>
          <img
            alt="foo"
            src={
              "https://nogas-swar.s3.amazonaws.com/img/6_Case+Study+04_+Maximizing+Micro-mobility/2_Background/1_Background+Page/2_Carbon+Mitigation/1.png"
            }
            style={{ width: "80%" }}
          ></img>
        </Grid>
        <Grid item sx={{ textAlign: "left", padding: "2em" }}>
          <Typography sx={{ fontSize: "10pt" }}>
            1. U.S. EPA’s Inventory of U.S. Greenhouse Gas Emissions and Sinks
            1990 -2020
          </Typography>
          <Typography sx={{ fontSize: "10pt" }}>
            2. U.S. EPA. (2020) Fast Fact-U.S. Transportation Sector Greenhouse
            Gas Emissions 1990-2020
          </Typography>
          <Typography sx={{ fontSize: "10pt" }}>
            3. Federal Highway Administration. (2017). 2017 National Household
            Travel Survey, U.S. Department of Transportation, Washington, DC.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
