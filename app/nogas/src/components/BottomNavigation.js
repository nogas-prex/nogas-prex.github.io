import * as React from "react";
import { Card, CardContent, CardMedia, Grid, Typography, Box } from "@mui/material";
import { HashLink } from "react-router-hash-link";

export default function CardNavigation({ imgs = [] }) {
  return (
    <Grid
      container
      direction="column"
      spacing={0}
      // Add horizontal padding ONLY on small screens, and center contents
      sx={{ width: "100%", px: { xs: 2, md: 0 }, justifyContent: "center" }}
    >
      {/* ----- Card 1 ----- */}
      <Grid
        item
        xs={12}
        sx={{
          my: { xs: 2, md: 3 },
          // Keep the card centered on larger screens
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <HashLink to="design-engine/#design-engine-landing" style={{ textDecoration: "none", width: "100%" }}>
          <Card
            elevation={0}
            sx={{
              // Full width on mobile with the container padding; center & cap width on desktop
              width: "100%",
              maxWidth: { xs: 560, md: 840 },
              mx: "auto",
              textAlign: "left",
            }}
          >
            <CardMedia
              component="img"
              image={imgs[1]}
              alt="NOGAS Toolkit"
              sx={{
                height: { xs: 200, sm: 260, md: 350 },
                objectFit: "cover",
                display: "block",
                width: "100%",
                // optional: soften corners slightly
                borderRadius: { xs: 1, md: 1 },
              }}
            />
            <CardContent sx={{ py: { xs: 1.25, md: 2.5 } }}>
              <Typography
                variant="h1"
                sx={(t) => ({
                  fontSize: { xs: "clamp(26px, 8.5vw, 38px)", md: t.typography.h1.fontSize },
                  lineHeight: { xs: 1.1, md: t.typography.h1.lineHeight || 1.2 },
                  mb: { xs: 0.5, md: 1 },
                })}
              >
                NOGAS TOOLKIT
              </Typography>
              <Typography
                variant="h5"
                sx={(t) => ({
                  fontSize: { xs: "clamp(14px, 4.2vw, 18px)", md: t.typography.h5.fontSize },
                  lineHeight: { xs: 1.28, md: t.typography.h5.lineHeight || 1.35 },
                })}
              >
                LEARN WHAT'S BEHIND THE NOGAS TOOLKIT
              </Typography>
            </CardContent>
          </Card>
        </HashLink>
      </Grid>

      {/* ----- Card 2 ----- */}
      <Grid
        item
        xs={12}
        sx={{
          my: { xs: 2, md: 3 },
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <HashLink to="applications/#applications" style={{ textDecoration: "none", width: "100%" }}>
          <Card
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: { xs: 560, md: 840 },
              mx: "auto",
              textAlign: "left",
            }}
          >
            <CardMedia
              component="img"
              image={imgs[0]}
              alt="Applications"
              sx={{
                height: { xs: 200, sm: 260, md: 350 },
                objectFit: "cover",
                display: "block",
                width: "100%",
                borderRadius: { xs: 1, md: 1 },
              }}
            />
            <CardContent sx={{ py: { xs: 1.25, md: 2.5 } }}>
              <Typography
                variant="h1"
                sx={(t) => ({
                  fontSize: { xs: "clamp(26px, 8.5vw, 38px)", md: t.typography.h1.fontSize },
                  lineHeight: { xs: 1.1, md: t.typography.h1.lineHeight || 1.2 },
                  mb: { xs: 0.5, md: 1 },
                })}
              >
                APPLICATIONS
              </Typography>
              <Typography
                variant="h5"
                sx={(t) => ({
                  fontSize: { xs: "clamp(14px, 4.2vw, 18px)", md: t.typography.h5.fontSize },
                  lineHeight: { xs: 1.28, md: t.typography.h5.lineHeight || 1.35 },
                })}
              >
                SEE HOW THE TOOLKIT CAN BE APPLIED
              </Typography>
            </CardContent>
          </Card>
        </HashLink>
      </Grid>
    </Grid>
  );
}
