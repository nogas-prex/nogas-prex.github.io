import { Grid } from "@mui/material";

import CaseStudyStat from "../../components/caseStudies/background/backgroundStat"
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";

export default function ImprovingEquitableAccessBackground() { 

return (
  <div id='iea-background'>
    <CaseStudyBackgroundLanding
      image={
        "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/2_Background/1_Background+Page/0_Cover/1.png"
      }
      title={"MOBILITY ACCESS CHALLENGE"}
      subtitle={"for aging and disabled populations"}
      body={[
        `Today, nearly 55 million Americans are over age 65. By 2060, this
        number is expected to increase to 95 million, jumping from 16 percent to 23
        percent of the total U.S. population. This aging of the population will create
        major challenges for ensuring equitable access to mobility, especially since older
        individuals are more likely to have physical difficulty driving because of changes
        in hearing, eyesight, and other physical factors. In the suburbs, where car travel
        is often the only reliable daily transportation option, this presents major
        obstacles for transportation planners.`,
      ]}
    />
    <CaseStudyStat
      title={"GROWING AGING AND DISABLED POPULATIONS IN U.S."}
      body={[
        `Planners and designers need to consider the significant impacts
        AVs could have on communities, and include these in their planning. AV
        technologies and expanded micromobility offerings are poised to dramatically
        increase independence and mobility among the nearly 26 million Americans
        who experience travel-limiting disabilities and the estimated 600,000 older
        adults who stop driving every year. However, without adequate foresight, these
        technologies may prove to be unworkable for the very people who would
        benefit most from them.`,
        `Academics and industry leaders acknowledge that technology alone will not be
enough to facilitate an inclusive transition to the next generation of
autonomous mobility. Innovative approaches to land use planning and urban
design will be especially important for ensuring that this transition does not
create additional problems for people with disabilities and the elderly.`,
        `To date, most local land use codes and the Americans with Disabilities Act have
not been sufficiently updated to meet the anticipated autonomous mobility
transition. This is an especially important concern considering that one out of
every five people in the U.S. has a disability, and many of these people rely on
modes of transportation that are not specifically designed for their needs. This
has resulted in people with disabilities making 28 percent fewer trips per day on
average than those without disabilities. Furthermore, studies show that those
who are poorly served by current transportation systems — particularly in areas
outside the reach of urban transit networks — may have the most to gain from
fully autonomous/driverless mobility services. To date, there has been very little
research at the intersection of autonomous mobility and urban design that
focuses on best practices for mobility-challenged users.`,
      ]}
      chart={
        "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/2_Background/1_Background+Page/1_Chart/1.png"
      }
      orient="img-text"
    />
    <CaseStudyBackgroundText
      title={"MOVING SPEED STUDY"}
      subtitle={"Establishing Baseline Metrics"}
      body={[
        `Unlike vehicles, which are designed to work within a
universal set of constraints, such as traffic lights and speed limits, pedestrians
each move through space in different ways. The average moving speed, along
with the need for intermittent rest, can vary widely depending on age, fitness
level, and use of assistive mobility aids, including wheelchairs and walkers. `,
        `It is essential for urban planners and designers to be aware of moving speed as a
key indicator of equitable access. By analyzing the moving speeds of different
groups, optimal block sizes and travel distances can be defined, establishing a
baseline for further design generation and optimization.`,
      ]}
    />
    {/* bespoke */}
    <Grid container>
      <Grid item>
        <img
          alt="foo"
          src={
            "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/2_Background/1_Background+Page/2_Moving+Speeds+Study/1.png"
          }
          style={{ width: "80%" }}
        ></img>
      </Grid>
    </Grid>
  </div>
);
}

