import { Grid, Typography } from "@mui/material";

export default function CaseStudyBackgroundText(props) {
    const title = props.title
    const subtitle = props.subtitle
    const text = props.body 
  return (
    <div>
      <Grid
        container
        direction={"row"}
        alignItems="center"
        textAlign={"left"}
        justifyContent="center"
        sx={{
          width: {xs:'100vw',md:"80vw"},
          marginBottom: "5em",
          marginTop: "5em",
          marginLeft: {xs:'0',md:"10vw"},
          paddingLeft: { xs: '2em', md: "8em" },
          paddingRight:{xs:'2em'}
        }}
        spacing={0}
      >
        <Grid item sx={12} md={6}></Grid>
        <Grid item sx={12} md={6}>
          <Typography variant="sectionTitle">{title}</Typography>
          <br></br>
          <Typography variant="sectionSubtitle">{subtitle}</Typography>
          <hr color="#EC008C"></hr>
          {text.map((t) => (
            <div>
              <Typography variant="bodyBlack">{t}</Typography>
              <br></br>
              <br></br>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
