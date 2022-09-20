import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import { Grid } from "@mui/material";
export default function TextCard(props) {
    const icon = props.icon
    const title = props.title
    const text = props.text
    return (
      <Card sx={{ borderRadius: "110px", borderStyle: "solid" }} elevation={5}>
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
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
}