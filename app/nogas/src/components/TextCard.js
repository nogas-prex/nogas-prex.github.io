import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import { Grid } from "@mui/material";
import useWindowDimensions from "./windowWidth";
import { HashLink } from "react-router-hash-link";
export default function TextCard(props) {
    const icon = props.icon
    const title = props.title
  const text = props.text
  const [width, setWidth] = React.useState()
  
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth)
  console.log(width);})
  return (
    <div>
      {width < 1600 ? (
        <Card sx={{}} elevation={0}>
          <CardContent>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={2}>
                <AdjustRoundedIcon sx={{ fontSize: "8em" }} />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" sx={{ textAlign: "left" }}>
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "left" }}>
                <Typography variant="body3">{text}</Typography>
                <HashLink to={props.caseStudy}>
                  <Typography sx={{ fontWeight: "700" }}>
                    See case study.
                  </Typography>
                </HashLink>{" "}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <Card
          sx={{ borderRadius: "110px", borderStyle: "solid" }}
          elevation={5}
        >
          <CardContent>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={2}>
                <AdjustRoundedIcon sx={{ fontSize: "8em" }} />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" sx={{ textAlign: "left" }}>
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "left" }}>
                <Typography variant="body3">{text}</Typography>
                <HashLink to={props.caseStudy}>
                  <Typography sx={{ fontWeight: "700" }}>
                    See case study.
                  </Typography>
                </HashLink>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </div>
  );
}