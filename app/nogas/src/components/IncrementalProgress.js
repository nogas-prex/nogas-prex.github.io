import { Grid } from "@mui/material";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageSlider from "./ImageSlider";
export default function IncrementalProgres() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "fff",
          minHeight: "100vh",
          marginTop: "2em",
        }}
      >
        <Grid item sx={{ margin: "8em", width: "50vw" }}>
          <Box sx={{ margin: "0em", width: "50vw" }}>
            <Typography variant="sectionTitleUnderline">
              MODELING INCREMENTAL PROGRESS
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <Typography variant="landingBody">
              The transition to an autonomous future for the suburbs is already
              underway, but a complete transition will require communities to
              plan for incremental change. The NOGAS project identifies
              opportunities for both short-term and long-term objectives to be
              established, providing end-users with a wide range of
              scenario-based insights.
            </Typography>
          </Box>
          <Box sx={{ width: "100%", marginBottom: "2em" }}>
            <img
              src={
                "https://nogas-swar.s3.amazonaws.com/img/2_Incremental+Progress/Timeline.png"
              }
              style={{ width: "100%" }}
            ></img>
          </Box>
          <Box sx={{ width: "100%", marginBottom: "2em" }}>
            <ImageSlider
              leftImage={
                "https://nogas-swar.s3.amazonaws.com/img/2_Incremental+Progress/Slider_Before.png"
              }
              rightImage={
                "https://nogas-swar.s3.amazonaws.com/img/2_Incremental+Progress/Slider_After.png"
              }
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
