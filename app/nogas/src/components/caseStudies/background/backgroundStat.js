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
  const chartCitations = props.chart_citation
  const textCitations = props.text_citation
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
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      sx={{ padding: { xs: "2em", md: "5em" }, maxWidth: "100%" }}
    >
      <img src={chart} alt="foo" style={{ width: "100%" }}></img>
      {chartCitations.map((c) => (
        <Typography color="#fff" sx={{ fontSize: "10pt" }}>
          {c}
        </Typography>
      ))}
    </Grid>
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      sx={{ padding: { xs: "2em", md: "5em" }, textAlign: "left" }}
    >
      <Typography variant="sectionTitleWhite">{title}</Typography>
      <br></br>
      <br></br>
      {body.map((b) => (
        <div>
          <Typography variant="bodyWhite">{b}</Typography>
          <br></br>
          <br></br>

          <br></br>
        </div>
      ))}
      {textCitations
        ? textCitations.map((tc) => (
            <Typography color="#fff" sx={{ fontSize: "10pt" }}>
              {tc}
            </Typography>
          ))
        : null}
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
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ padding: { xs: "2em", md: "5em" }, maxWidth: "100%" }}
        >
          <img src={img} alt="foo" style={{ width: "100%" }}></img>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ padding: { xs: "2em", md: "5em" }, maxWidth: "100%" }}
        >
          <img src={chart} alt="foo" style={{ width: "100%" }}></img>
          {chartCitations.map((c) => (
            <Typography color="#fff" sx={{ fontSize: "10pt" }}>
              {c}
            </Typography>
          ))}
        </Grid>
      </Grid>
    );
  }
    
}
