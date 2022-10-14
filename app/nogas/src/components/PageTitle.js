import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PageTitle() {
    
    return (
      <Box sx={{ height: "80vh", alignItems: "center", marginTop: "20em" }}>
        <Typography variant="landingTitle" sx={{}}>
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