// src/components/Partners.js
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Auto-import every image in src/partners (jpg/png/svg)
const importAll = (r) => r.keys().map(r);
const logos = importAll(
  require.context("../partners", false, /\.(png|jpe?g|svg)$/i)
);

export default function Partners() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 3, md: 5 },
        mt: { xs: 4, md: 8 },
        borderTop: (t) => `1px solid ${t.palette.divider}`,
        backgroundColor: (t) => t.palette.background.default,
      }}
    >
<Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
  {logos.map((src, i) => (
    <Grid key={i} item xs={6} sm={3} md={3} lg={3}>
      <Box
        component="img"
        src={src}
        alt={`partner-${i}`}
        sx={{
          width: "100%",
          height: 64,
          objectFit: "contain",
          filter: "grayscale(1)",
        }}
      />
    </Grid>
  ))}
</Grid>
    </Box>
  );
}


