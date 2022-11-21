import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import ResponsiveAppBar from "../components/AppBar";
export default function Contact() { 
    const [name, setName] = useState('Name')
    const [email, setEmail] = useState('Email')
    const [title, setTitle] = useState("Company / Title");
    const [message, setMessage] = useState('Message')
    const [submit, setSubmit] = useState(false)
    const form = useRef()
    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };

    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };

    function resetStates() {
        setName()
        setEmail()
        setTitle()
        setMessage()
    }

    const handleFormSubmit = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
        var templateParams = {
            name: name,
            email: email, 
            title: title,
            message: message
        }
        
        emailjs
          .send(
            "service_93jr4sa",
            "template_7nfkd5o",
            templateParams,
            "D2n3EELGlTLPxhE6j"
          )
          .then(
            (res) => {
                  console.log(res.status, res.text);
                  setSubmit(true)
            },
            (err) => {
              console.log("failed...", err);
            }
          );
    };
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
            xs={0}
            md={6}
            sx={{
              textAlign: "center",
              padding: { md: "5em" },
              alignSelf: "center",
            }}
          >
                    <img
                        alt='nogas-grid'
              src={
                "https://nogas-swar.s3.amazonaws.com/img/11_Contact+Page/1.png"
              }
              style={{ maxWidth: "70%" }}
            />
          </Grid>
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
            {submit ? null : <Typography variant="h2">Contact Us!</Typography>}

            {submit ? (
              <Typography>Thank you for submitting your message.</Typography>
            ) : (
              <>
                <Typography>
                  If you want to contact us for more information, collaboration,
                  or other inqueries, feel free to send us a message. The
                  submitted message will be sent to nogas@mit.edu. We will
                  respond as soon as possible.
                  </Typography>
                  <Typography color='red'>
                    Note: the information provided on this site if for informational purposes only.
                  </Typography>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1 },
                  }}
                  noValidate
                  autoComplete="off"
                  ref={form}
                >
                  <TextField
                    onChange={handleNameChange}
                    id="contact-name"
                    label="Name"
                    fullWidth
                    variant="standard"
                    value={name}
                  />
                  <br></br>
                  <TextField
                    onChange={handleEmailChange}
                    id="contact-email"
                    label="Email"
                    value={email}
                    fullWidth
                    variant="standard"
                  />
                  <br></br>
                  <TextField
                    onChange={handleTitleChange}
                    id="contact-title"
                    label="Company / Title"
                    value={title}
                    variant="standard"
                    fullWidth
                  />
                  <br></br>
                  <TextField
                    onChange={handleMessageChange}
                    id="contact-message"
                    label="Message"
                    value={message}
                    variant="standard"
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Box>
                <Box>
                  <Button onClick={handleFormSubmit} variant="outlined">
                    Submit
                  </Button>
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </>
    );
}
