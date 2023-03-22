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
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [title, setTitle] = useState("");
    // const [message, setMessage] = useState('')
    const [submit, setSubmit] = useState(false)
    // const form = useRef()
    // const handleNameChange = (event) => {
    //   setName(event.target.value);
    // };

    // const handleEmailChange = (event) => {
    //   setEmail(event.target.value);
    // };

    // const handleTitleChange = (event) => {
    //   setTitle(event.target.value);
    // };

    // const handleMessageChange = (event) => {
    //   setMessage(event.target.value);
    // };

    // function resetStates() {
    //     setName()
    //     setEmail()
    //     setTitle()
    //     setMessage()
    // }

    // const handleFormSubmit = (e) => {
    //     e.preventDefault(); // prevents the page from reloading when you hit “Send”
    //     var templateParams = {
    //         name: name,
    //         email: email, 
    //         title: title,
    //         message: message
    //     }
        
    //     emailjs
    //       .send(
    //         "service_93jr4sa",
    //         "template_7nfkd5o",
    //         templateParams,
    //         "D2n3EELGlTLPxhE6j"
    //       )
    //       .then(
    //         (res) => {
    //               console.log(res.status, res.text);
    //               setSubmit(true)
    //         },
    //         (err) => {
    //           console.log("failed...", err);
    //         }
    //       );
    // };
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
            {/* <img
              alt="nogas-grid"
              src={
                "https://nogas-swar.s3.amazonaws.com/img/11_Contact+Page/1.png"
              }
              style={{ maxWidth: "70%" }}
            /> */}
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
              <Typography variant="h2">SIGN UP TO DOWNLOAD TOOLKIT</Typography>
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
                {/* <Typography color="red">
                  Note: the information provided on this site is for
                  informational purposes only.
                </Typography> */}
                                  
                <Agreement />
              </>
            )}
          </Grid>
        </Grid>
      </>
    );
}
