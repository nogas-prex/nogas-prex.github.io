import {
  Button,
    Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { HashLink } from "react-router-hash-link";

export default function CaseStudyBackground(props) { 
    const image = props.image
    const title = props.title
    const subtitle = props.subtitle
    const body = props.body; 
    const stats = props.stats
  const citations = props.citations
    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100vw",
          backgroundColor: "white",
          paddingTop: { xs: "0", md: "5em" },
          paddingBottom: { xs: "0", md: "5em" },
          height: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            // paddingRight: "3em",
            paddingRight: { xs: "0", sm: "0", md: "3em" },
            height: "100%",
          }}
        >
          <Card
            // backgroundImage={`url(${metricAgingImage})`}
            sx={{
              minHeight: { xs: "100%", sm: "100%", md: "100%" },
              height: { xs: "100vw", sm: "100vw", md: "34vw" },
              backgroundImage: `url(${image})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
            elevation={0}
          >
            <CardHeader
              sx={{
                // height: { xs: "20%", md: "35%", lg: "20vw" },
                height: { xs: "35%", sm: "35%", md: "45%", lg: "65%" },
                padding: "0",
                boxSizing: "box-border",
              }}
            ></CardHeader>
            <CardContent
              sx={{
                color: "white",
                boxSizing: "box-border",
                textAlign: "center",
              }}
            >
              <Grid
                container
                direction="row"
                alignItems="bottom"
                justifyContent="bottom"
                sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              >
                {stats.map((stat) => (
                  <Tooltip title={stat.citation}>
                    <Grid item xs={4} sx={{ height: "100%" }}>
                      <Typography variant="mdStat">{stat.pct}</Typography>
                      <br></br>
                      <Typography variant="mdStatText">{stat.text}</Typography>
                    </Grid>
                  </Tooltip>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          sx={{ textAlign: "left", padding: { xs: "2em" } }}
          xs={12}
          md={5}
        >
          <Typography variant="sectionTitle">{title}</Typography>
          <br></br>
          <Typography variant="sectionSubtitle">{subtitle}</Typography>
          <hr color="EC008C"></hr>
          {body.map((b) => (
            <Typography variant="bodyBlack">{b}</Typography>
          ))}
          <br></br>
          <br></br>
          {citations
            ? citations.map((c) => (
                <Typography sx={{ fontSize: "10pt" }}>{c}</Typography>
              ))
            : null}
          <br></br>

          <Button
            variant="outlined"
            style={{
              color: "#EC008C",
              borderColor: "#EC008C",
            }}
            endIcon={<ArrowForwardIcon />}
          >
            <HashLink to={`${props.link}`}>Learn More</HashLink>
          </Button>
        </Grid>
      </Grid>
    );
}