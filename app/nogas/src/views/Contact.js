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
        <Grid
          container
          direction="row"
          sx={{
            height: "100vh",
          }}
          justifyContent="space-evenly"
          alignItems="stretch"
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: "center",
              padding: { md: "5em" },
              alignSelf: "center",
            }}
          >
            <YouTube
              videoId="9DhH-1BQGm8"
              opts={{
                height: "370",
                width: "640",
                playerVars: { autoplay: 1 },
              }}
            />
          </Grid>
          
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: "left",
              padding: { md: "5em" },
              alignSelf: "center",
            }}
          >
            {submit ? null : (
              <Typography variant="h2">SIGN UP TO DOWNLOAD NOGAS TOOLKIT</Typography>
            )}

            {submit ? (
              <Typography>Thank you for submitting your message.</Typography>
            ) : (
              <>
                <Typography>
                  Please fill out the form below and check the agreement. After
                  clicking the submit button, instructions for downloading the
                  toolkit will be automatically sent to the email address
                  provided.
                </Typography>                                           
                <Agreement />
              </>
            )}
          </Grid>
        </Grid>
      </>
    );
}
