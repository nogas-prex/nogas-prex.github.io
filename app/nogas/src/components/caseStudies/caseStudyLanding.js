import {
  Grid,
  Typography,
} from "@mui/material";

export default function CaseStudyLanding(props) {
    const image = props.image
    const title = props.title
    const subtitle = props.subtitle
    const body = props.body 

    return (
      <Grid
        container
        xs={12}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${image})`,
          backgroundSize: "100vw",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            // justifyContent: "left",
            // alignItems: "left",
            textAlign: "left",
            paddingLeft: "5em",
            // width:'70%'
          }}
        >
          <Typography variant="sectionTitle">{title}</Typography>
          <br></br>
          <Typography variant="sectionSubtitle">{subtitle}</Typography>
          <hr color="EC008C"></hr>
          {body.map((b) => (
            <div>
              <Typography variant="bodyBlack">{b}</Typography><br></br><br></br>
            </div>
          ))}
        </Grid>
        <Grid item md={6}></Grid>
      </Grid>
    );
}