import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PageTitle() {
    
    return (
      <Box xs={12} sx={{ height: "100vh", width:'100vw', alignItems: "center", marginTop: "10vh" }}>
        <Typography variant="landingTitle" >
          NOGAS
        </Typography>
        <br></br>
        <Typography variant="landingSubtitle">
          Next Optimized Generation of Autonomous Suburbs
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr
          width="10%"
          color="00a360"
          style={{ borderBottomWidth: "15px" }}
        ></hr>
      </Box>
    );
}