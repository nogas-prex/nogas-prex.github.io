import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Link} from 'react-router-dom'
export default function CaseStudyGrid(props) {
  const image = props.image;
  const title = props.title;
  const subtitle = props.subtitle;
    const text = props.text;
    const dir = props.dir
    const button = props.button;
    console.log(props)

    return dir === "img-txt" ? (
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
          <img src={image} style={{ width: "100%" }}></img>
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
            <Link to={{ pathname: `${props.navLink}` }}>Learn More</Link>
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
            // onClick={console.log(props.navLink)}
          >
            <Link to={{ pathname: `${props.navLink}` }}>Learn More</Link>
          </Button>
        </Grid>

        <Grid item sx={12} md={6}>
          <img src={image} style={{ width: "100%" }}></img>
        </Grid>
      </Grid>
    );
}
