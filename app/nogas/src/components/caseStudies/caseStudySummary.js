import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const metricStyle = {
  backgroundColor: "#00A360",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textAlignLast: "center",
};

export default function CaseStudySummary(props) {
    const summText = props.text
    const icons = props.icons
  // try to fit this into the main middle column, instead of a full width thing.
  // should be an anchor, instead of a new sectioin
    return (
      <Grid
        container
        xs={12}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "#00A360", minHeight: "200px" }}
      >
        <Grid item sx={{ width: "70%" }}>
          <Typography variant="summaryStatText">{summText}</Typography>
          <Grid
            container
            direction="row"
            id="summIcons"
            // sx={{ width: "70%", marginLeft: "15%" }}
          >
            {icons.map((i) => (
              <Grid item xs={12} sm={3}>
                <Card sx={metricStyle} elevation={0}>
                  <CardContent sx={{}}>
                    <img src={i.img} alt="foo" style={{ width: "200px" }}></img>
                    <br></br>
                    <Typography variant="iconCalloutStat">{i.pct}</Typography>
                    <br></br>
                    <Typography variant="iconCalloutText">{i.text}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
 }