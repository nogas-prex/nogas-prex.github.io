import { Button, Grid, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";

export default function CaseStudyBackgroundLanding(props) {
  const image = props.image;
  const title = props.title;
  const subtitle = props.subtitle;
  const body = props.body;
  const citations = props.citations
  const parent = props.parent
  return (
    <Grid
      container
      xs={12}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100vw",
        // height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          paddingLeft: { xs: "2em", sm: "2em", md: "2em", lg: "5em" },
          paddingRight: { xs: "2em", lg: "0" },
          textAlign: "left",
          backgroundColor: "rgba(255,255,255,0.5)",
          marginTop: "5em",
          marginBottom: "2em",
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
          startIcon={<ArrowBack />}
        >
          <HashLink to={`/case-studies/${parent}`}>Back to Case Study page</HashLink>
        </Button>
      </Grid>
      <Grid item md={6}></Grid>
    </Grid>
  );
}
