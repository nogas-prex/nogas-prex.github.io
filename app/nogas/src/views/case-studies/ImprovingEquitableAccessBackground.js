import { Grid } from "@mui/material";

import CaseStudyStat from "../../components/caseStudies/background/backgroundStat"
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";
import headerImage from '../../img/3_Case Study 01_ Improving Equitable Access/2_Background/1_Background Page/0_Cover/1.png'
import statImage from '../../img/3_Case Study 01_ Improving Equitable Access/2_Background/1_Background Page/1_Chart/1.png'
import studyImage from '../../img/3_Case Study 01_ Improving Equitable Access/2_Background/1_Background Page/2_Moving Speeds Study/1.png'
export default function ImprovingEquitableAccessBackground() { 

return (
  <div>
    <CaseStudyBackgroundLanding
      image={headerImage}
      title={"MOBILITY ACCESS CHALLENGE"}
      subtitle={"for aging and disabled populations"}
      body={[
        `Today, around 55 million Americans is over 65, by 2060 this number will be 100 million.
Aging populations usually have more physical difficulty in driving and higher accident
rate. Companying with aging, higher ratio of disability has added even more challenge
to realize the equitable access, especially given that suburban area has both higher ratio
of aging population and fewer mobility options than other places.`,
      ]}
    />
    <CaseStudyStat
      title={"GROWING AGING AND DISABLED POPULATIONS IN U.S."}
      body={[
        `According to U.S. Census bureau (2019), 1 in 6 U.S.
population (54.1 million) is over age 65, while 1 in 4
U.S. adults – 61 million Americans – have a disability
that impacts major life activities. Among all functional
disability types, serious difficulty walking or climbing
stairs is at the first rank (13.7%). A study from U.S.
Department of Transportation has also shown that
people with disabilities make 28% fewer trips per day on
average than people without disabilities.`,
      ]}
            chart={statImage}
            orient='chart-text'
    />
    <CaseStudyBackgroundText
      title={"MOVING SPEED STUDY"}
      subtitle={"Establishing Baseline Metrics"}
      body={[
        `The moving speed, which directly affects individual
access scope in given timespan, is an important
indicator of the accessibility. An awareness of various
moving speeds related to different population groups
is essential for realizing equitable access. By analyzing
moving speeds of different groups, the optimal block
sizes and travel distances are defined for our tool to
conduct further design generation and optimization.`,
      ]}
    />
    {/* bespoke */}
    <Grid container>
      <Grid item>
        <img alt="foo" src={studyImage} style={{width:'80%'}}></img>
      </Grid>
    </Grid>
  </div>
);
}

