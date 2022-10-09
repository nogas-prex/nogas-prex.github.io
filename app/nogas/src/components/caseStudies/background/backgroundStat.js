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

export default function CaseStudyStat(props) {
  const title = props.title;  
  const body = props.body;
  const chart = props.chart
  const img = props.img
  const orient = props.orient
  if (orient === 'img-text') {
return (
  <Grid
    container
    direction="row"
    alignItems="center"
    justifyContent="center"
    sx={{ backgroundColor: "#000000", minHeight: "500px" }}
    xs={12}
  >
    <Grid item xs={6} sx={{ padding: "5em", maxWidth: "100%" }}>
      <img src={chart} alt="foo" style={{ width: "100%" }}></img>
    </Grid>
    <Grid item xs={6} sx={{ padding: "5em", textAlign: "left" }}>
      <Typography variant="sectionTitleWhite">{title}</Typography>
      <br></br>
      <br></br>
      {body.map((b) => (
        <div>
          <Typography variant="bodyWhite">{b}</Typography>
          <br></br>
          <br></br>
        </div>
      ))}
    </Grid>
  </Grid>
);
  } else if (orient === 'img-chart') {
    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "#000000", minHeight: "500px" }}
        xs={12}
      >
        <Grid item xs={6} sx={{ padding: "5em", maxWidth: "100%" }}>
          <img src={img} alt="foo" style={{ width: "100%" }}></img>
        </Grid>
        <Grid item xs={6} sx={{ padding: "5em", maxWidth: "100%" }}>
          <img src={chart} alt="foo" style={{ width: "100%" }}></img>
        </Grid>
        {/* <Grid item xs={6} sx={{ padding: "5em", textAlign: "left" }}>
          <Typography variant="sectionTitleWhite">{title}</Typography>
          <br></br>
          <br></br>
          {body.map((b) => (
            <div>
              <Typography variant="bodyWhite">{b}</Typography>
              <br></br>
              <br></br>
            </div>
          ))}
        </Grid> */}
      </Grid>
    );
  }
    
}
