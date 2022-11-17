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
        // spacing={3}
        sx={{ width: "100vw" }}
      >
        <Grid
          item
          xs={6}
          sx={{
            // height: "60vh",
            paddingBottom: "2em",
          }}
        >
          {/* <Card
            sx={{
              height: "500px",
              backgroundImage: `url(${props.imgs[1]})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
            elevation={1}
          >
            <CardHeader sx={{ height: "70%" }}>shiiii</CardHeader>
          </Card> */}
          <Button variant="outlined">
            {/* <Link to={{ pathname: "case-studies" }}>Case Studies</Link> */}
            <HashLink to="case-studies/#case-studies">Case Studies</HashLink>
          </Button>
          {/* <img src={beforeImage} style={{width: '100%'}}></img> */}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            // height: "60vh",
            paddingBottom: "2em",
          }}
        >
          <Button variant="outlined">
            <HashLink to="/design-engine/#design-engine-landing">
              Design Engine
            </HashLink>
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