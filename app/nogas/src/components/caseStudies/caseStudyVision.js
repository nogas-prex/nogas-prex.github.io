import {
  Card,
  CardContent,
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

export default function CaseStudyVision(props) { 
    const title = props.title
    const subtitle = props.subtitle 
    const body = props.body; 
    const icons = props.icons 
  return (
      // add same top/bottom padding as the vision section
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "#00A360", minHeight: "500px",}}
        xs={12}
      >
      <Grid item xs={12} sm={10} md={6} sx={{ padding: "5%", textAlign: "left" }}>
          <Typography variant="sectionTitleWhite">{title}</Typography>
          <br></br>
          <Typography variant="sectionSubtitleWhite">{subtitle}</Typography>
          <hr color="white"></hr>
          {body.map((b) => (
            <div>
              <Typography variant="bodyWhite">{b}</Typography>
              <br></br>
              <br></br>
            </div>
          ))}
        </Grid>
        {/* <Grid item xs={6} sx={{ padding: "5em" }}>
          <Grid container direction="row">
            {icons.map((i) => (
              <Grid item xs={1} md={4}>
                <Card sx={metricStyle} elevation={0}>
                  <CardContent>
                    <img src={i.img} alt={i.alt} style={{ width: "80%" }}></img><br></br>
                    <Typography variant='iconCalloutText'>{i.label}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid> */}
      </Grid>
    );
}