import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import ResponsiveAppBar from "../components/AppBar";
import YouTube from "react-youtube";
import Agreement from "../components/Agreement";
export default function Contact() { 
    const [submit, setSubmit] = useState(false)

    return (
      <>
        <ResponsiveAppBar />
       <Box
        sx={{
          position: "relative",
          pt: "56.25%", // 16:9 aspect ratio
          borderRadius: "0px",
          overflow: "hidden",
          mb: { xs: 4, md: 5 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <YouTube
            videoId="9DhH-1BQGm8"
            opts={{
              width: "100%",
              height: "100%",
              playerVars: { autoplay: 0 },
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
          
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          textAlign: "left",
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 3, md: 5 },
          alignSelf: "center",
        }}
      >
        {/* title */}
        <Typography
          variant="sectionTitle"
          sx={{ mb: 2, fontSize: { xs: "1.6rem", md: "2rem" }, lineHeight: 1.2 }}
        >
          SIGN UP TO DOWNLOAD NOGAS TOOLKIT
        </Typography>

        {/* body */}
        <Typography sx={{ mb: 3, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.6 }}>
          Please fill out the form below and check the agreement. After clicking the submit button,
          instructions for downloading the toolkit will be automatically sent to the email address provided.
        </Typography>

        <Agreement />
      </Grid>
      </>
    );
}
