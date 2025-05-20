import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link";
import React from "react";
export default function CaseStudyGrid(props) {
  const image = props.image;
  const title = props.title;
  const subtitle = props.subtitle;
    const text = props.text;
    const dir = props.dir
    const button = props.button;
  const [width, setWidth] = React.useState()

  React.useEffect(() => {setWidth(window.innerWidth) },[])
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth)
  })

  console.log(width)

  // lt900
  return width < 900 ? (
    <Grid
      container
      direction={"row"}
      alignItems="center"
      textAlign={"left"}
      justifyContent="center"
      sx={{ width: "80vw", marginBottom: "5em" }}
      spacing={7}
    >
      <Grid item sx={12} md={6}>
        <Typography variant="sectionTitle">{title}</Typography>
        <br></br>
        <Typography variant="sectionSubtitle">{subtitle}</Typography>
        <hr color="#EC008C"></hr>
        <Typography variant="bodyBlack">{text}</Typography>
        <br></br>

        <Button
          variant="outlined"
          style={{
            color: "#EC008C",
            borderColor: "#EC008C",
            marginTop: "3em",
          }}
          endIcon={<ArrowForwardIcon />}
        >
          <HashLink to={`${props.navLink}`}>Learn More</HashLink>
        </Button>
      </Grid>

      <Grid item sx={12} md={6}>
        <img src={image} style={{ width: "100%" }}></img>
      </Grid>
    </Grid>
  ) : dir === "img-txt" ? (
    <Grid
      container
      direction={"row"}
      alignItems="center"
      textAlign={"left"}
      justifyContent="center"
      sx={{ width: "80vw", marginBottom: "5em" }}
      spacing={7}
    >
      <Grid item sx={12} md={6}>
        <img src={image} style={{ width: "100%", borderRadius: "30px",  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", }}></img>
      </Grid>
      <Grid item sx={12} md={6}>
        <Typography variant="sectionTitle">{title}</Typography>
        <br></br>
        <Typography variant="sectionSubtitle">{subtitle}</Typography>
        <hr color="#EC008C"></hr>
        <Typography variant="bodyBlack">{text}</Typography>
        <br></br>

        <Button
          variant="outlined"
          style={{
            color: "#EC008C",
            borderColor: "#EC008C",
            marginTop: "3em",
          }}
          endIcon={<ArrowForwardIcon />}
        >
          {/* Learn More */}
          <HashLink to={`${props.navLink}`}>Learn More</HashLink>
        </Button>
      </Grid>
    </Grid>
  ) : (
    <Grid
      container
      direction={"row"}
      alignItems="center"
      textAlign={"left"}
      justifyContent="center"
      sx={{ width: "80vw", marginBottom: "5em" }}
      spacing={7}
    >
      <Grid item sx={12} md={6}>
        <Typography variant="sectionTitle">{title}</Typography>
        <br></br>
        <Typography variant="sectionSubtitle">{subtitle}</Typography>
        <hr color="#EC008C"></hr>
        <Typography variant="bodyBlack">{text}</Typography>
        <br></br>

        <Button
          variant="outlined"
          style={{
            color: "#EC008C",
            borderColor: "#EC008C",
            marginTop: "3em",
          }}
          endIcon={<ArrowForwardIcon />}
        >
          <HashLink to={`${props.navLink}`}>Learn More</HashLink>
        </Button>
      </Grid>

      <Grid item sx={12} md={6}>
        <img src={image} style={{ width: "100%" }}></img>
      </Grid>
    </Grid>
  );
}
