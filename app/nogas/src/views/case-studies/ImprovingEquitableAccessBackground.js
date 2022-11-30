import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import CaseStudyStat from "../../components/caseStudies/background/backgroundStat"
import CaseStudyBackgroundText from "../../components/caseStudies/background/backgroundText";
import CaseStudyBackgroundLanding from "../../components/caseStudies/background/backroundLanding";
import ResponsiveAppBar from "../../components/AppBar";
import { Link } from "@mui/material";


import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { HashLink } from "react-router-hash-link";
export default function ImprovingEquitableAccessBackground() { 

return (
  <div id="iea-background">
    <ResponsiveAppBar />
    <CaseStudyBackgroundLanding
      image={
        "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/2_Background/1_Background+Page/0_Cover/1.png"
      }
      title={"MOBILITY ACCESS CHALLENGE"}
      subtitle={"for aging and disabled populations"}
      body={[
        `Today, nearly 55 million Americans are over age 65. By 2060, this
        number is expected to increase to 95 million, jumping from 16 percent to 23
        percent of the total U.S. population.[1] This aging of the population will create
        major challenges for ensuring equitable access to mobility, especially since older
        individuals are more likely to have physical difficulty driving because of changes
        in hearing, eyesight, and other physical factors.[2] In the suburbs, where car travel
        is often the only reliable daily transportation option, this presents major
        obstacles for transportation planners.`,
      ]}
      citations={[
        `[1] Vespa, J., Medina, L., & Armstrong., D.M. (2020). Demographic Turning Points for the United States: Population Projections for 2020 to 2060. Population Estimates and Projections. U.S. Census Bureau. P25-1144. Access (11/20/2022): https://www.census.gov/content/dam/Census/library/publications/2020/demo/p25-1144.pdf`,
        `[2] Winick, B., & Jaffe, M. (2015). Planning Aging-supportive Communities. American Planning Association. https://www.planning.org/publications/report/9026902/`,
      ]}
      parent="improving-equitable-access/#iea-main"
    />
    <CaseStudyStat
      title={"GROWING, AGING AND DISABLED POPULATIONS IN U.S."}
      body={[
        `Planners and designers need to consider the significant impacts
        AVs could have on communities, and include these in their planning. AV
        technologies and expanded micromobility offerings are poised to dramatically
        increase independence and mobility among the nearly 26 million Americans
        who experience travel-limiting disabilities [1] and the estimated 600,000 older
        adults who stop driving every year.[2] However, without adequate foresight, these
        technologies may prove to be unworkable for the very people who would
        benefit most from them.[3]`,
        `Academics and industry leaders acknowledge that technology alone will not be
        enough to facilitate an inclusive transition to the next generation of
        autonomous mobility.[3] Innovative approaches to land use planning and urban
        design will be especially important for ensuring that this transition does not
        create additional problems for people with disabilities and the elderly.`,
        `To date, most local land use codes and the Americans with Disabilities Act have
        not been sufficiently updated to meet the anticipated autonomous mobility
        transition. This is an especially important concern considering that one out of
        every five people in the U.S. has a disability, and many of these people rely on
        modes of transportation that are not specifically designed for their needs.[4] This
        has resulted in people with disabilities making 28 percent fewer trips per day on
        average than those without disabilities.[1] Furthermore, those
        who are poorly served by current transportation systems — particularly in areas
        outside the reach of urban transit networks — may have the most to gain from
        fully autonomous/driverless mobility services.[5] To date, there has been very little
        research at the intersection of autonomous mobility and urban design that
        focuses on best practices for mobility-challenged users.`,
      ]}
      text_citation={[
        `[1] Brumbaugh, S. (2018). Travel Patterns of American Adults with Disabilities. U.S. Department of Transportation, Bureau of Transportation Statistics. https://www.bts.gov/sites/bts.dot.gov/files/2022-01/travel-patterns-american-adults-disabilities-updated-01-03-22.pdf`,
        `[2] Foley, D. J., Heimovitz, H. K., Guralnik, J. M., & Brock, D. B. (2002). Driving life expectancy of persons aged 70 years and older in the United States. American Journal of Public Health, 92, 1284-1289.`,
        `[3] William, R., & Anurag, P. (2021). Gaps and Opportunities in Accessibility Policy for Autonomous Vehicles. Mineta Transportation Institute, Project 2106. https://scholarworks.sjsu.edu/mti_publications/369/ || Bayless, S. H., & Davidson, S. (2019). Driverless cars and accessibility: Designing the future of transportation for people with disabilities. The Intelligent Transportation Society of America (ITS America). Access (08/02/2022): https://naricspotlight.files.wordpress.com/2019/06/23acc-itsamerica_driverlesscarsaccessiblitymobility_april2019.pdf`,
        `[4] U.S. Centers for Disease Control and Prevention. Disability Impacts All of Us. Access (08/02/2022): https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html`,
      ]}
      chart={
        "https://nogas-swar.s3.amazonaws.com/img/3_Case+Study+01_+Improving+Equitable+Access/2_Background/1_Background+Page/1_Chart/1.png"
      }
      chart_citation={[
        "Data Source: US Census Bureau, Population Estimates and Projections",
      ]}
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
      <Grid item sx={{ textAlign: "left", padding: "2em" }}>
        <Typography>
          1) Bohannon, R. W. (1997). Comfortable and maximum walking speed of
          adults aged 20—79 years: Reference values and determinants. Age and
          Ageing, 26(1), 15–19.{" "}
          <Link
            href="https://doi.org/10.1093/ageing/26.1.15"
            color="#000"
            target="_blank"
          >
            https://doi.org/10.1093/ageing/26.1.15
          </Link>
        </Typography>
        <Typography>
          2) Schimpl, M., Moore, C., Lederer, C., Neuhaus, A., Sambrook, J.,
          Danesh, J., Ouwehand, W., & Daumer, M. (2011). Association between
          Walking Speed and Age in Healthy, Free-Living Individuals Using Mobile
          Accelerometry—A Cross-Sectional Study. PLoS ONE, 6(8), e23299.
          <Link
            href="https://doi.org/10.1371/journal.pone.0023299"
            color="#000"
            target="_blank"
          >
            https://doi.org/10.1371/journal.pone.0023299
          </Link>
        </Typography>
        <Typography>
          3) Kawai, H., Obuchi, S., Watanabe, Y., Hirano, H., Fujiwara, Y.,
          Ihara, K., Kim, H., Kobayashi, Y., Mochimaru, M., Tsushima, E., &
          Nakamura, K. (2020). Association between Daily Living Walking Speed
          and Walking Speed in Laboratory Settings in Healthy Older Adults.
          International Journal of Environmental Research and Public Health,
          17(8), 2707.{" "}
          <Link
            href="https://doi.org/10.3390/ijerph17082707"
            color="#000"
            target="_blank"
          >
            https://doi.org/10.3390/ijerph17082707
          </Link>
        </Typography>
        <Typography>
          4) Ikeda, H., Mihoshi, A., Nomura, T., & Ishibashi, T. (2003).
          Comparison of electric and manual wheelchairs using an
          electrocardiogram. Journal of Asian Electric Vehicles, 1(2), 449-452.
        </Typography>
        <Typography>
          5) Sonenblum, S. E., Sprigle, S., & Lopez, R. A. (2012). Manual
          wheelchair use: bouts of mobility in everyday life. Rehabilitation
          research and practice, 2012, 753165.
          <Link
            href="https://doi.org/10.1155/2012/753165"
            color="#000"
            target="_blank"
          >
            https://doi.org/10.1155/2012/753165
          </Link>
        </Typography>
        <Typography>
          6) Cooper, R. A., Tolerico, M., Kaminski, B. A., Spaeth, D., Ding, D.,
          & Cooper, R. (2008). Quantifying wheelchair activity of children: a
          pilot study. American journal of physical medicine & rehabilitation,
          87(12), 977–983.{" "}
          <Link
            href="https://doi.org/10.1097/PHM.0b013e31818dfe74"
            color="#000"
            target="_blank"
          >
            https://doi.org/10.1097/PHM.0b013e31818dfe74
          </Link>
        </Typography>
        <Typography>
          7) Karmarkar, A. M., Collins, D. M., Kelleher, A., Ding, D., Oyster,
          M., & Cooper, R. A. (2010). Manual wheelchair-related mobility
          characteristics of older adults in nursing homes. Disability and
          rehabilitation. Assistive technology, 5(6), 428–437.
        </Typography>
        <Typography>
          8) Levy, C. E., Buman, M. P., Chow, J. W., Tillman, M. D., Fournier,
          K. A., & Giacobbi, P., Jr (2010). Use of power assist wheels results
          in increased distance traveled compared with conventional manual
          wheeling. American journal of physical medicine & rehabilitation,
          89(8), 625–634.{" "}
          <Link
            href="https://doi.org/10.1097/PHM.0b013e3181e72286"
            color="#000"
            target="_blank"
          >
            https://doi.org/10.1097/PHM.0b013e3181e72286
          </Link>
        </Typography>
        <Typography>
          9) Oyster, M. L., Karmarkar, A. M., Patrick, M., Read, M. S.,
          Nicolini, L., & Boninger, M. L. (2011). Investigation of factors
          associated with manual wheelchair mobility in persons with spinal cord
          injury. Archives of physical medicine and rehabilitation, 92(3),
          484–490.{" "}
          <Link
            href="https://doi.org/10.1016/j.apmr.2010.09.025"
            color="#000"
            target="_blank"
          >
            https://doi.org/10.1016/j.apmr.2010.09.025
          </Link>
        </Typography>
        <Typography>
          10) Tolerico, M. L., Ding, D., Cooper, R. A., Spaeth, D. M.,
          Fitzgerald, S. G., Cooper, R., Kelleher, A., & Boninger, M. L. (2007).
          Assessing mobility characteristics and activity levels of manual
          wheelchair users. Journal of rehabilitation research and development,
          44(4), 561–571.{" "}
          <Link
            href="https://doi.org/10.1682/jrrd.2006.02.0017"
            color="#000"
            target="_blank"
          >
            https://doi.org/10.1682/jrrd.2006.02.0017
          </Link>
        </Typography>
        <Typography>
          11) Ikeda, H. (2009). Comparison of Simulated Physical Load of
          Sidewalk Curb for Electric, Manual Wheelchair Users and Visually
          Impaired People. Journal of Asian electric vehicles, 7(1), 1251-1256.
        </Typography>
        <Typography>
          12) Dernayka, A., Amorim, M. A., Leroux, R., Bogaert, L., & Farcy, R.
          (2021). Tom Pouce III, an Electronic White Cane for Blind People:
          Ability to Detect Obstacles and Mobility Performances. Sensors,
          21(20), 6854.
        </Typography>
        <Typography>
          13) Clark-Carter, D. D., Heyes, A. D., & Howarth, C. I. (1986). The
          efficiency and walking speed of visually impaired people. Ergonomics,
          29(6), 779-789.
        </Typography>
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
          <HashLink to={`/case-studies/improving-equitable-access/#iea-main`}>
            Back to Case Study page
          </HashLink>
        </Button>
      </Grid>
    </Grid>
  </div>
);
}

