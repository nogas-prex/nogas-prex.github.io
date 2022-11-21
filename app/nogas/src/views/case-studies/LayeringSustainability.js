import { Link } from "@mui/material";
import {
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import { HashLink } from "react-router-hash-link";
import ResponsiveAppBar from "../../components/AppBar";
import CaseStudyBackground from "../../components/caseStudies/caseStudyBackground";
import CaseStudyLanding from "../../components/caseStudies/caseStudyLanding";
import CaseStudyVision from "../../components/caseStudies/caseStudyVision";
import ImageSlider from "../../components/ImageSlider";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CaseStudySummary from "../../components/caseStudies/caseStudySummary";

export default function LayeringSustability() {
    return (
      <div id="ls-main">
        <ResponsiveAppBar />
        <CaseStudyLanding
          image={
            "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/0_Cover/1.png"
          }
          title="LAYERING SUSTAINABILITY"
          subtitle="Landscape Optimization"
          body={[
            `Today, metropolitan areas are increasingly experiencing the effects of climate change, including
extreme heat, drought, flooding, and wildfire. Meanwhile, the intensification of rural land use
and the addition of impervious surfaces – both intrinsic to the process of urbanization itself –
are further exacerbating these environmental risks.`,
            `The widespread adoption of autonomous mobility services may be an opportunity to break this
disastrous cycle by reducing the size of vehicle fleets and transforming massive networks of
roadways and other impervious surfaces into multi-functional green infrastructure.`,
          ]}
        />
        <CaseStudyBackground
          title="BACKGROUND"
          subtitle="Suburban Climate Effects"
          image={
            "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/2_Background/0_Cover/1.png"
          }
          body={[
            `Today, communities around the world are facing the dramatic
effects of climate change. In 2021, more than 80 percent of Americans
experienced at least one heat wave, which were the primary cause of more than
1,300 deaths that year in the U.S. Along with these extreme heat events,
drought and wildfire are threatening millions of lives and properties.
Meanwhile, increased precipitation intensity, along with sea-level rise, is
causing a sustained increase in billion-dollar flood events each decade.`,
          ]}
          stats={[
            { pct: "1300+", text: "Heat-related Death per year in U.S." },
            {
              pct: "80%+",
              text: "Americans Experienced a Heat Wave in 2021",
            },
            { pct: "20°F+", text: "Cooler Temperature under Tree Shade" },
          ]}
          link={
            "/case-studies/layering-sustainability-background/#ls-background"
          }
        />
        <Grid
          container
          sx={{ width: "100vw", height: "100%", overflowY: "hidden" }}
        >
          <ImageSlider
            leftImage={
              "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/3_Vision/Slider_Before.png"
            }
            rightImage={
              "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/3_Vision/Slider_After.png"
            }
          />{" "}
        </Grid>{" "}
        <CaseStudyVision
          title="VISION"
          subtitle="The Future of Sustainable Suburbs"
          body={[
            `In the near term, optimized street design, along with retrofitted parking areas, can reduce
excessive pavement and offer space for expanding the urban canopy. This can simultaneously
help sequester atmospheric carbon, while helping to alleviate pressures related to stormwater
management and extreme heat exposure. Alternatively, this could provide new real estate for
housing in order to facilitate more resilient and affordable communities.`,
            `In the fully autonomous future, a dramatic reduction of pavement and other vehicular surfaces
can allow for a more flexible and compact block configuration that prioritizes green
infrastructure and improved access to environmental system services.`,
          ]}
          icons={[
            { img: "", alt: "", label: "Smart Density" },
            { img: "", alt: "", label: "Reduced Vehicle Usage" },
            {
              img: "envPerfImage",
              alt: "",
              label: "Better Environmental Performance",
            },
          ]}
        />
        {/* <div> custom stuff </div> */}
        <Grid container direction="column" sx={{ marginTop: "7vh" }}>
          <Grid item>
            <Grid container direction="row">
              <Grid item xs={0} md={6}>
                {" "}
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ padding: { xs: "2em", md: "7em" }, textAlign: "left" }}
              >
                <Typography variant="sectionTitle">
                  {" "}
                  GREEN SPACE CONTIGUITY{" "}
                </Typography>
                <br></br>
                <Typography variant="sectionSubtitle">
                  Neighborhood Optimization with OASIS
                </Typography>
                <hr color="EC008C"></hr>
                <Typography variant="bodyBlack">
                  OASIS is a parametric toolbox that can help planners and
                  developers optimize neighborhood- scale land use and mobility
                  frameworks. The greenspace contiguity optimization tool of the
                  OASIS toolbox can analyze and optimize the contiguity of
                  greenspace, which is one of the most important indicators of
                  environmental performance in a given area. The diagram below
                  shows how greenspaces contribute to both climate change
                  adaptation and mitigation.
                </Typography>
                <br></br>
                <br></br>
                <Button
                  variant="outlined"
                  style={{
                    color: "#EC008C",
                    borderColor: "#EC008C",
                    marginTop: "3em",
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  <HashLink to={"/oasis"}>Learn more about OASIS</HashLink>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sx={{ paddingBottom: "3em" }}>
              <img
                src={
                  "https://nogas-swar.s3.amazonaws.com/img/5_Case+Study+03_+Layering+Sustainability/4_Green+Space+Comtiguity/Case+Study+03+Green+Space+Contiguity.jpg"
                }
                style={{ width: "80%" }}
              />
            </Grid>
            <Grid item sx={{ textAlign: "left", padding: "2em" }}>
              <Typography>
                1. Li, H., J. Harvey, T. J. Holland, and M. Kayhanian. 2013.
                “The Use of Reflective and Permeable Pavements as a Potential
                Practice for Heat Island Mitigation and Stormwater Management.”
                Environmental Research Letters. Vol. 8, No. 01. IOP Publishing,
                Ltd., Bristol, UK. | Toussaint, K. (2020, September 8). When
                roads heat up during the summer, the asphalt poisons urban air.
                Fast Company.
                <Link
                  href="https://www.fastcompany.com/90547098/when-roads-heat-up-during-the-summer-they-poison-urban-air"
                  color="#000"
                  target="_blank"
                >
                  https://www.fastcompany.com/90547098/when-roads-heat-up-during-the-summer-they-poison-urban-air
                </Link>
              </Typography>
              <Typography>
                2. The Trust for Public Land, “The Heat is On: A Special Report”
                (August 5, 2020),{" "}
                <Link
                  href="https://www.tpl.org/the-heat-is-on"
                  color="#000"
                  target="_blank"
                >
                  https://www.tpl.org/the-heat-is-on
                </Link>
              </Typography>
              <Typography>
                3. Akbari, H., D. Kurn, et al. 1997. Peak power and cooling
                energy savings of shade trees. Energy and Buildings 25:139–148.
              </Typography>
              <Typography>
                4. Goel M.K. (2011) Runoff Coefficient. In: Singh V.P., Singh
                P., Haritashya U.K. (eds) Encyclopedia of Snow, Ice and
                Glaciers. Encyclopedia of Earth Sciences Series. Springer,
                Dordrecht.
                <Link
                  href="https://doi.org/10.1007/978-90-481-2642-2_456"
                  color="#000"
                  target="_blank"
                >
                  https://doi.org/10.1007/978-90-481-2642-2_456
                </Link>
              </Typography>
              <Typography>
                5. Chow, V., Maidment, D. and Mays, L. (1988) Applied Hydrology.
                McGraw-Hill Book Company, New York.
              </Typography>
              <Typography>
                6. Khare, Machesky, J., Soto, R., He, M., Presto, A. A., &
                Gentner, D. R. (2020). Asphalt-related emissions are a major
                missing nontraditional source of secondary organic aerosol
                precursors. Science Advances., 6(36).
                <Link
                  href="https://doi.org/10.1126/sciadv.abb9785"
                  color="#000"
                  target="_blank"
                >
                  https://doi.org/10.1126/sciadv.abb9785
                </Link>
              </Typography>
              <Typography>
                7. Lal, R., Smith, P., Jungkunst, H.F., Mitsch, W.J., Lehmann,
                J., Nair, P.K.R., McBratney, A.B., de Moraes Sá, J.C.,
                Schneider, J., Zinn, Y.L., Skorupa, A.L.A., Zhang, H.-L.,
                Minasny, B., Srinivasrao, C., Ravindranath, N.H., 2018. The
                carbon sequestration potential of terrestrial ecosystems.
                Journal of Soil and Water Conservation 73, 145A-152A.
                <Link
                  href="https://doi.org/10.2489/jswc.73.6.145A"
                  color="#000"
                  target="_blank"
                >
                  https://doi.org/10.2489/jswc.73.6.145A
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
}