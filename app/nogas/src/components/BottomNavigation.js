import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


export default function CardNavigation(props) { 
  console.log(props)

  return (
    <Grid
      container
      direction={"column"}
      spacing={0}
      sx={{ textAlign: "left", width: "100vw", alignItems: "center" }}
    >
      <Grid item xs={12} sx={{ margin: "2em" }}>
        <HashLink
          to="design-engine/#design-engine-landing"
          style={{ textDecoration: "none" }}
        >
          <Card sx={{ maxWidth: "500" }} elevation={0}>
            <CardMedia
              height="350"
              component="img"
              image={`${props.imgs[1]}`}
            />
            <CardContent>
              <Typography variant="h1">NOGAS TOOLKIT</Typography>
              <Typography
                variant="h5"
                sx={{ textDecoration: "none", textDecorationThickness: 0 }}
              >
                LEARN WHAT'S BEHIND THE NOGAS TOOLKIT
              </Typography>
            </CardContent>
          </Card>
        </HashLink>
      </Grid>
      <Grid item xs={12} sx={{ margin: "2em" }}>
        <HashLink to="applications/#applications" style={{ textDecoration: "none" }}>
          <Card sx={{ maxWidth: "500" }} elevation={0}>
            <CardMedia
              height="350"
              component="img"
              image={`${props.imgs[0]}`}
            />
            <CardContent>
              <Typography variant="h1">APPLICATIONS</Typography>
              <Typography variant="h5">
                SEE HOW THE TOOLKIT CAN BE APPLIED{" "}
              </Typography>
            </CardContent>
          </Card>
        </HashLink>
      </Grid>
    </Grid>
  );
}