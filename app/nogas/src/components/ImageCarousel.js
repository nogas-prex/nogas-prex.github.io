import Carousel from "react-material-ui-carousel";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Paper } from "@mui/material";
export function ImageItem(props) { 
    // console.log(props.image)
    return (
      <Card
        sx={{
          width: "100%",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          textAlign:'-webkit-center'
        }}
        elevation={0}
      >
        <CardMedia
          component="img"
          src={props.image}
                sx={{ height: "500px", width: "auto" }}
                title={props.name}
        ></CardMedia>
        <CardContent sx={{ marginBottom: "1em" }}>
          <Typography variant='h5'>{props.name}</Typography>
        </CardContent>
      </Card>
      // <Paper>
      //   <img src={props.image}></img>
      // </Paper>
      
    );
}
