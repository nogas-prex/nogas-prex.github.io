import {
  Button,
    Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { HashLink } from "react-router-hash-link";

export default function CaseStudyBackground(props) { 
    const image = props.image
    const title = props.title
    const subtitle = props.subtitle
    const body = props.body; 
    const stats = props.stats

    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100vw", backgroundColor: "white", height: "100vh" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            // paddingRight: "3em",
            paddingRight: { xs: "0", sm: "0", md: "3em" },
          }}
        >
          <Card
            // backgroundImage={`url(${metricAgingImage})`}
            sx={{
              minHeight: { xs: "100%", sm: "100%", md: "100%" },
              height: { xs: "100%", sm: "100%", md: "34vw" },
              backgroundImage: `url(${image})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
            elevation={10}
          >
            <CardHeader sx={{ height: { xs: "100%", md: "70%" } }}></CardHeader>
            <CardContent sx={{ color: "white" }}>
              <Grid
                container
                direction="row"
                alignItems="bottom"
                justifyContent="bottom"
                spacing={3}
              >
                {stats.map((stat) => (
                  <Grid item xs={4} sx={{ marginBottom: "3vw" }}>
                    <Typography variant="mdStat">{stat.pct}</Typography>
                    <br></br>
                    <Typography variant="mdStatText">{stat.text}</Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sx={{ textAlign: "left" }} xs={12} md={5}>
          <Typography variant="sectionTitle">{title}</Typography>
          <br></br>
          <Typography variant="sectionSubtitle">{subtitle}</Typography>
          <hr color="EC008C"></hr>
          {body.map((b) => (
            <Typography variant="bodyBlack">{b}</Typography>
          ))}
          <br></br>
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