import { Button, Grid, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";

export default function CaseStudyBackgroundLanding(props) {
  const image = props.image;
  const title = props.title;
  const subtitle = props.subtitle;
  const body = props.body;

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
          textAlign: "left",
          paddingLeft: "5em",
          backgroundColor: "rgba(255,255,255,0.5)",
        }}
      >
        <Typography variant="sectionTitle">{title}</Typography>
        <br></br>
        <Typography variant="sectionSubtitle">{subtitle}</Typography>
        <hr color="EC008C"></hr>
        {body.map((b) => (
          <div>
            <Typography variant="bodyBlack">{b}</Typography>
            <br></br>
            <br></br>
          </div>
        ))}
        <Button
          variant="outlined"
          style={{
            color: "#EC008C",
            borderColor: "#EC008C",
          }}
          startIcon={<ArrowBack />}
        >
          <HashLink to='/case-studies'>Back to Case Studies page</HashLink>
        </Button>
      </Grid>
      <Grid item md={6}></Grid>
    </Grid>
  );
}
