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
        `Today, nearly 55 million Americans are over age 65. By 2060, 
        this number is expected to increase to 95 million, jumping from 
        16 percent to 23 percent of the total U.S. population. This aging 
        of the population will create major challenges for ensuring equitable 
        access to mobility, especially since older individuals are more likely 
        to have physical difficulty driving because of changes in hearing, eyesight, 
        and other physical factors. In the suburbs, where car travel is often the only 
        reliable daily transportation option, this presents major obstacles for 
        transportation planners.`,
      ]}
    />
    <CaseStudyStat
      title={"GROWING AGING AND DISABLED POPULATIONS IN U.S."}
      body={[
        `Planners and designers need to consider the significant impacts AVs could have 
        on communities, and include these in their planning. AV technologies and expanded 
        micromobility offerings are poised to dramatically increase independence and mobility 
        among the nearly 26 million Americans who experience travel-limiting disabilities and 
        the estimated 600,000 older adults who stop driving every year. However, without adequate 
        foresight, these technologies may prove to be unworkable for the very people who would 
        benefit most from them.`,
      ]}
            chart={statImage}
            orient='chart-text'
    />
    <CaseStudyBackgroundText
      title={"MOVING SPEED STUDY"}
      subtitle={"Establishing Baseline Metrics"}
      body={[
        `Unlike vehicles, which are designed to work within a universal set of constraints, such as 
        traffic lights and speed limits, pedestrians each move through space in different ways. The 
        average moving speed, along with the need for intermittent rest, can vary widely depending 
        on age, fitness level, and use of assistive mobility aids, including wheelchairs and walkers. `,
        'It is essential for urban planners and designers to be aware of moving speed as a key indicator of equitable access. By analyzing the moving speeds of different groups, optimal block sizes and travel distances can be defined, establishing a baseline for further design generation and optimization.',
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

