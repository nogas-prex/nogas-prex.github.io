import Carousel from "react-material-ui-carousel";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
export function ImageItem(props) { 
    console.log(props.image)
    return (
      <Card
        sx={{
        //   height: "500px",
          width: "100%",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
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

          {/* <img src={props.image} ></img> */}
        </CardContent>
      </Card>
      //     <Grid
      //         container
      //     sx={{
      //     //   backgroundImage: `url(${props.image})`,
      //       height: "500px",
      //       width: "auto",
      //       backgroundRepeat: "no-repeat",
      //     }}
      //     >
      //         <img src={ props.image}></img>
      //         <Grid item>
      //             <Typography variant='h3'>
      //                 {props.name}
      //             </Typography>
      //         </Grid>
      //   </Grid>
      // <div style={{ backgroundImage: `url(${props.image})`, height: '500px' }}>
      //     <h1>{props.name}</h1>
      // </div>
    );
}

// export default function ImageCarousel(props) { 
//     const imgs = props.imgs

//     return (
//         <Carousel navButtonsAlwaysVisible={true}>
//             {imgs.map((img, i) => <ImageItem key={i} image={img.img} name={img.name}/>)}
//         </Carousel>
//     )
// }