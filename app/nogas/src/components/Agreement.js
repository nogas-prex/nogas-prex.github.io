import { Dialog, DialogActions, List, Grid, ListItem, DialogTitle, DialogContent, Button, Typography } from "@mui/material";
import { useEffect, useState, useRef } from 'react'
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


export default function Agreement() {

  const [open, setOpen] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const [organization, setOrganization] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [orgName, setOrgName] = useState()
  const [orgAddress, setOrgAddress] = useState()
  const [orgCity, setOrgCity] = useState()
  const [orgState, setOrgState] = useState()
  const [orgZip, setOrgZip] = useState()
  const [orgPhone, setOrgPhone] = useState()
  
const form = useRef();
const handleNameChange = (event) => {
  setName(event.target.value);
};

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handleOrgChange = (event) => {
  setOrganization(event.target.value);
};

const handleMessageChange = (event) => {
  setMessage(event.target.value);
};

  const handleOrgNameChange = (e) => {
    setOrgName(e.target.value);
  };
  const handleOrgAddressChange = (e) => {
    setOrgAddress(e.target.value);
  };

  const handleOrgCityChange = (e) => {
    setOrgCity(e.target.value);
  };

  const handleOrgStateChange = (e) => {
  setOrgState(e.target.value);
};
  const handleOrgZipChange = (e) => {
    setOrgZip(e.target.value);
  };
  const handleOrgPhoneChange = (e) => { 
    setOrgPhone(e.target.value)
  }
  
function resetStates() {
  setName();
  setEmail();
  setTitle();
  setMessage();
}

  useEffect(() => {
    if (name.length > 0 && organization.length > 0 && email.length > 7) {
      setButtonDisabled(false)
    } else { 
      // console.log(name, organization, email)
    }
   }, [name, email, organization])
  
const handleFormSubmit = (e) => {
  e.preventDefault(); // prevents the page from reloading when you hit “Send”
  var templateParams = {
    to_name: name,
    to_email: 'mariogiampieri@gmail.com',
    title: title,
    message: message,
  };
  
  emailjs
    .send(
      "service_r8f5ogf",
      "template_r1o247a",
      templateParams,
      "D2n3EELGlTLPxhE6j"
    )
    .then(
      (res) => {
        // console.log(res.status, res.text);
        setSubmit(true);
      },
      (err) => {
        console.log("failed...", err);
      }
    );
};
    const handleClickOpen = () => { 
        setOpen(true)
    }

    const handleClose = () => { 
        setOpen(false)
    }

    return (
      <>
        <Button variant="outlined" onClick={handleClickOpen}>
          Review Agreement
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            Non-Commercial Internal Research End User Agreement
          </DialogTitle>
          <DialogContent>
            {setSubmit ? (
              <div>
                <Typography>
                  MIT is the owner of certain rights, title and interest in
                  software disclosed under MIT Case No. 23993, &quot;OASIS: A
                  land use scenario planning plugin for Rhinoceros3D&quot; by
                  Alan M. Berger, Mario Giampieri (as further defined herein,
                  the “Software”), and has the right to grant licenses
                  thereunder.
                </Typography>
                <br></br>
                <Typography>
                  This Non-Commercial Internal Research End User Agreement (the
                  “Agreement”), effective as of the date of signature below
                  (“Effective Date”), sets forth the terms of use governing your
                  (the “End User”) use of the Software. The Software is being
                  distributed for free by MIT to the End User for non-commercial
                  internal research purposes (the “Purpose”).
                </Typography>
                <br></br>
                <Typography>
                  FOR AVOIDANCE OF DOUBT, THE PURPOSE DOES NOT PERMIT USE OF THE
                  SOFTWARE IN HUMANS OR IN CONNECTION WITH HUMAN SUBJECTS,
                  INCLUDING FOR DIAGNOSTIC OR OTHER CLINICAL RESEARCH PURPOSES.
                </Typography>
                <br></br>
                <Typography>
                  MIT agrees to grant, hereunder, a perpetual, non-exclusive,
                  non-transferable, non-sublicensable license to End User for
                  the use of the Software solely for the Purpose on the
                  following terms and conditions:
                </Typography>
                <List sx={{ listStyleType: "decimal", padding: "0.75em" }}>
                  <ListItem sx={{ display: "list-item" }}>
                    <b>NO REDISTRIBUTION; RESTRICTIONS ON USE. </b> Software
                    remains the property of MIT and End User shall not: (a)
                    publish, distribute, or otherwise transfer or make available
                    the Software to any other third party for any purpose
                    whatsoever; (b) merge, reverse engineer, decompile or
                    reverse assemble the Software or any portion thereof; and
                    (c) modify, derivitize, rewrite, or otherwise adapt the
                    Software in any way, except as necessary to install and use
                    the Software for the Purpose in accordance with the terms
                    herein.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <b>NO COMMERCIAL USE.</b> End User shall use the Software
                    for the Purpose only and shall not use the Software for
                    commercial purposes; any such use of the Software is
                    expressly prohibited. Commercial purposes includes, but is
                    not limited to, use of the Software in fee-for-service
                    arrangements, core facilities or laboratories, to create or
                    include within commercial products or services, or to
                    provide research services to third parties for a fee. If End
                    User wishes to use Software for commercial purposes, or for
                    other purposes not permitted herein, End User must execute a
                    separate written license agreement with MIT.
                    <br></br>
                    <br></br>
                    <u>
                      In order to request use of the Software for commercial
                      purposes, or for other purposes not permitted herein,
                      please contact:
                    </u>
                    <br></br>
                    <br></br>
                    MIT Technology Licensing Office <br></br>
                    255 Main St <br></br>
                    Cambridge, MA 02142 <br></br>
                    Tel: 617-253-6966 <br></br>
                    Email:{" "}
                    <a href="software-licenses@mit.edu">
                      software-licenses@mit.edu
                    </a>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <b>OWNERSHIP AND COPYRIGHT NOTICE.</b> This Agreement does
                    not transfer any ownership of the Software to End User. All
                    right, title and interest in and to the Software, and any
                    intellectual property or proprietary rights therein, will
                    remain with MIT. End User acknowledges that the Software may
                    be covered by MIT’s copyrights, patents or patent
                    applications. End User acknowledges that there may be third
                    party code contained within the Software that may be
                    governed by separate terms and conditions and End User
                    agrees to comply with such separate terms and conditions.
                    End User shall not remove or delete and shall retain in the
                    Software and any modifications to Software, the copyright,
                    trademark, or other notices pertaining to the Software as
                    are provided with the Software.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <b>DELIVERY.</b> Upon execution of this Agreement, MIT shall
                    initiate delivery to End User of one (1) copy of the
                    Software. Such delivery shall be effected by an email to the
                    address set forth below. End User agrees to accept the
                    Software as delivered. End User agrees and acknowledges that
                    MIT shall not be required to: (a) load the Software onto End
                    User’s machines; (b) test for proper operation; (c) perform
                    debugging; (d) make corrections; (e) provide maintenance,
                    service, or updates; (f) release or provide enhancements,
                    modifications or new versions or (f) assist in the
                    understanding, implementation or use of the Software.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <b>FEEDBACK.</b> In order to improve the Software, comments
                    from End Users may be useful. End User agrees to provide MIT
                    with feedback on the End User’s use of the Software (e.g.,
                    any bugs in the Software, the user experience. etc.)
                    (collectively, “Feedback”). Feedback should be sent to:
                    Mario Giampieri (marioag@mit.edu). MIT is permitted to use
                    Feedback to make changes and improvements to the Software
                    without any compensation or an accounting to End User. End
                    User acknowledges that MIT may develop modifications to the
                    Software that may be based on Feedback. MIT shall not be
                    restricted in any way by End User regarding MIT’s use of
                    such Feedback.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <b>INTELLECTUAL PROPERTY.</b> End User agrees not to file
                    any patent applications that are related to, or claim, any
                    portion of the Software.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <b>PUBLICATION & ATTRIBUTION.</b> End User has the right to
                    publish, present, or share, results from the use of the
                    Software. If utilization of the Software results in outcomes
                    which will be published, End User shall acknowledge MIT as
                    the provider and MIT as the owner of the Software, shall
                    specify the version of Software used, and include the
                    following:
                    <br></br>
                    <br></br>
                    “Copyright Notice and Disclaimer. The software [or “portions
                    of the software”] incorporated herein is OASIS: A land use
                    scenario planning plugin for Rhinoceros3D, © MIT 2022 used
                    with permission. All Rights Reserved.”
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <b>LIMITATION OF LIABILITY.</b> IN NO EVENT SHALL MIT BE
                    LIABLE TO END USER, IN CONTRACT, TORT OR OTHERWISE, FOR
                    DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL,
                    PUNITIVE OR OTHER DAMAGES OF ANY KIND WHATSOEVER ARISING OUT
                    OF OR IN CONNECTION WITH THIS AGREEMENT, THE SOFTWARE AND/OR
                    USE OF THE SOFTWARE, EVEN IF MIT IS NEGLIGENT OR OTHERWISE
                    AT FAULT, AND REGARDLESS OF WHETHER MIT IS ADVISED OF THE
                    POSSIBILITY OF SUCH DAMAGES. USE OF THE SOFTWARE IS AT END
                    USER’S OWN RISK. IF END USER IS DISSATISFIED WITH THE
                    SOFTWARE, ITS EXCLUSIVE REMEDY IS TO STOP USING IT.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <b>DATA AND OTHER INFORMATION SUPPLIED BY END USERS.</b> Any
                    data, communication or other information End User transmits
                    to MIT will be deemed to be non- confidential and
                    non-proprietary.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <b>NO WARRANTIES.</b> THE SOFTWARE IS PROVIDED “AS IS.” TO
                    THE FULLEST EXTENT PERMITTED BY LAW, MIT HEREBY DISCLAIMS
                    ALL WARRANTIES OF ANY KIND (EXPRESS, IMPLIED OR OTHERWISE)
                    REGARDING THE SOFTWARE, INCLUDING BUT NOT LIMITED TO ANY
                    IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE, OWNERSHIP, AND NON-INFRINGEMENT. MIT
                    MAKE NO WARRANTY ABOUT THE ACCURACY, RELIABILITY,
                    COMPLETENESS, TIMELINESS, SUFFICIENCY OR QUALITY OF THE
                    SOFTWARE. MIT DOES NOT WARRANT THAT THE SOFTWARE WILL
                    OPERATE WITHOUT ERROR OR INTERRUPTION, OR THAT THE SOFTWARE
                    IS FREE OF COMPUTER VIRUSES OR OTHER HARMFUL COMPUTER CODE.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <b>INDEMNIFICATION.</b> To the fullest extent permitted by
                    law, End User shall indemnify, defend and hold harmless MIT
                    and their respective affiliates, current or future
                    directors, trustees, officers, faculty, employees, students
                    and agents and their respective successors, heirs and
                    assigns (the “Indemnitees”), against any liability, damage,
                    loss or expense (including reasonable attorney’s fees and
                    expenses of litigation) incurred by or imposed upon the
                    Indemnitees or any one of them in connection with any
                    claims, suits, actions, demands or judgments arising from
                    End User’s access to and/or use of the Software except to
                    the extent directly caused by the gross negligence or
                    willful misconduct of an Indemnitee.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <b>GOVERNING LAW.</b> This Agreement and all disputes
                    arising hereunder shall be construed and governed by the
                    laws of the Commonwealth of Massachusetts regardless of
                    otherwise applicable choice of law standards.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <b>NON-USE OF NAME.</b> Nothing in this Agreement shall be
                    construed as granting End Users or their institutions any
                    rights or licenses to use any trademarks, service marks or
                    logos displayed on the Software. End User shall not
                    otherwise use or allow the use of the name of “Massachusetts
                    Institute of Technology,” “MIT,” or any variation,
                    adaptation, or abbreviation thereof, or of any of its
                    trustees, officers, faculty, students, employees, or agents,
                    or any trademark owned by MIT, or any terms of this
                    Agreement in any other public announcement or disclosure
                    without prior written consent. MIT consent can be requested
                    by email (via tlo-uon@mit.edu), which MIT may withhold in
                    its sole discretion. If End User seeks to use the name of an
                    individual trustee, officer, faculty, student, employee or
                    agent, End User must receive the written consent of such
                    individual.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <b>MISCELLANEOUS.</b> This Agreement represents the entire
                    agreement between the parties with respect to the subject
                    matter hereof and supersedes all prior negotiations or
                    discussions, whether written or oral. End User shall use the
                    Software in compliance with all applicable laws and
                    regulations. These terms may be modified or amended only in
                    writing signed by authorized representatives of MIT and End
                    User. This Agreement may not be assigned without MIT’s prior
                    written consent. The failure of MIT to enforce at any time
                    any of the provisions of the Agreement will in no way be
                    construed to be a present or future waiver of such
                    provisions, nor in any way affect the ability to enforce
                    each and every such provision thereafter. The provisions
                    that by their nature are intended to survive expiration or
                    early termination of this Agreement shall survive expiration
                    or early termination of this Agreement, including but not
                    limited to: Sections 5-14.
                  </ListItem>
                </List>
                <Typography>
                  End User has caused this Agreement to be executed by a duly
                  authorized representative:
                </Typography>
              </div>
            ) : null}

            <Grid container>
              <Grid
                item
                xs={12}
                // md={6}
                // sx={{
                //   textAlign: "left",
                //   padding: { md: "5em" },
                //   alignSelf: "center",
                // }}
              >
                {/* {submit ? null : (
                  <Typography variant="h2">
                    SIGN UP TO DOWNLOAD TOOLKIT
                  </Typography>
                )} */}

                {submit ? (
                  <Typography>
                    Thank you for submitting your message.
                  </Typography>
                ) : (
                  <>
                    {/* <Typography>
                      Please fill out the form below and check the agreement.
                      After clicking the submit button, instructions for
                      downloading the toolkit will be automatically sent to the
                      email address provided.
                    </Typography> */}
                    {/* <Typography color="red">
                      Note: the information provided on this site is for
                      informational purposes only.
                    </Typography> */}
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1 },
                      }}
                      autoComplete="off"
                      ref={form}
                    >
                      <TextField
                        onChange={handleNameChange}
                        id="contact-name"
                        placeholder="Signature (Legal Name)*"
                        fullWidth
                        variant="standard"
                        value={name}
                        required
                      />
                      <br></br>
                      <TextField
                        onChange={handleEmailChange}
                        id="contact-email"
                        placeholder="Email*"
                        value={email}
                        fullWidth
                        variant="standard"
                        required
                      />
                      <br></br>
                      <TextField
                        onChange={handleOrgChange}
                        id="contact-title"
                        placeholder="Organization*"
                        value={organization}
                        variant="standard"
                        fullWidth
                        required
                      />
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1 },
                        paddingTop: "1em",
                        paddingBottom: "1em",
                      }}
                      autoComplete="off"
                      ref={form}
                    >
                      <Typography>
                        Optionally, please provide information about your
                        institution or organization.
                      </Typography>
                      <TextField
                        onChange={handleOrgNameChange}
                        id="org-name"
                        placeholder="Name"
                        fullWidth
                        variant="standard"
                        value={"Institution Name"}
                        required
                      />
                      <br></br>
                      <TextField
                        onChange={handleOrgAddressChange}
                        id="org-address"
                        placeholder="Address"
                        value={"Institution Address"}
                        fullWidth
                        variant="standard"
                        required
                        multiline
                        rows={2}
                      />
                      <br></br>

                      <TextField
                        onChange={handleOrgCityChange}
                        id="org-city"
                        placeholder="City"
                        value={"City"}
                        fullWidth
                        variant="standard"
                        required
                      />
                      <TextField
                        onChange={handleOrgStateChange}
                        id="org-state"
                        placeholder="State"
                        value={"State"}
                        fullWidth
                        variant="standard"
                        required
                      />
                      <TextField
                        onChange={handleOrgZipChange}
                        id="org-zip-code"
                        placeholder="Zip"
                        value={"Zip Code"}
                        fullWidth
                        variant="standard"
                        required
                      />
                      <TextField
                        onChange={handleOrgPhoneChange}
                        id="org-phone"
                        placeholder="Telephone"
                        value={"Telephone"}
                        fullWidth
                        variant="standard"
                        required
                      />
                    </Box>
                    <Box>
                      <Button
                        disabled={buttonDisabled}
                        onClick={handleFormSubmit}
                        variant="outlined"
                      >
                        Submit
                      </Button>
                      {/* <Agreement /> */}
                    </Box>
                  </>
                )}
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </>
    );

 }