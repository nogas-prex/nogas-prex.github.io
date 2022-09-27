import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import beforeImage from "../img/2_Incremental Progress/Slider_Before.png";
import afterImage from "../img/2_Incremental Progress/Slider_After.png";
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
export default function CardNavigation() { 
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
    return (
      <Grid
        container
        direction={"row"}
        alignItems="center"
        justifyContent="center"
        spacing={3}
      >
        <Grid
          item
          xs={6}
          sx={{
            height: "60vh",
          }}
        >
          <Button variant="outlined">
            <Link to={{ pathname: "case-studies" }}>Case Studies</Link>
          </Button>
          {/* <img src={beforeImage} style={{width: '100%'}}></img> */}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            height: "60vh",
          }}
        >
          <Button variant="outlined">
            <Link to={{ pathname: "" }}>Design Engine</Link>
          </Button>
          {/* <div
            style={{
              height: "100%",
              backgroundImage:
                "../img/2_Incremental Progress/Slider_Before.png",
            }}
          >
            
          </div> */}
        </Grid>
      </Grid>
    );
}