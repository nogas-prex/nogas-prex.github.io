import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageSlider from "./ImageSlider";

export default function IncrementalProgres() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "#fff",
        // don't force a tall section on phones
        minHeight: { xs: "auto", md: "100vh" },
        // smaller top space on phones
        mt: { xs: 1, md: "2em" },
        // a little vertical padding only where needed
        py: { xs: 2, md: 0 },
        width: "100%",
      }}
    >
      <Grid
        item
        sx={{
          m: { xs: 0, md: "8em" },
          width: { xs: "90%", md: "50%" },
          p: { xs: "2em", md: 0 },
        }}
      >
        <Box sx={{ m: 0 }}>
          {/* Title: keep desktop variant; shrink only under 'sm' */}
          <Typography
            variant="sectionTitleUnderline"
            sx={(t) => ({
              [t.breakpoints.down("sm")]: {
                fontSize: "1.6rem",
                lineHeight: 1.2,
              },
            })}
          >
            MODELING INCREMENTAL PROGRESS
          </Typography>

          <Box sx={{ my: { xs: 2, md: 3 } }} />

          {/* Body: mobile-only downsizing */}
          <Typography
            variant="landingBody"
            sx={(t) => ({
              [t.breakpoints.down("sm")]: {
                fontSize: "1.2rem",
                lineHeight: 1.45,
              },
            })}
          >
            The transition to an autonomous future for the suburbs is already
            underway, but a complete transition will require communities to plan
            for incremental change. The NOGAS toolkit identifies opportunities
            for both short-term and long-term objectives to be established,
            providing end-users with a wide range of scenario-based insights.
          </Typography>
        </Box>

        <Box sx={{ width: "100%", mb: "2em" }}>
          <img
            src="https://nogas-swar.s3.amazonaws.com/img/2_Incremental+Progress/Timeline.png"
            alt="Incremental progress timeline"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Box>

        <Box sx={{ width: "100%", mb: "2em" }}>
          <ImageSlider
            leftImage="https://nogas-swar.s3.amazonaws.com/img/2_Incremental+Progress/Slider_Before.png"
            rightImage="https://nogas-swar.s3.amazonaws.com/img/2_Incremental+Progress/Slider_After.png"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
