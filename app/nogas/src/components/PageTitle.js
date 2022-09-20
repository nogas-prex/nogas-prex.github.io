import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PageTitle() {
    
    return (
        <Box>
            <Typography
                sx={{ fontSize: '12em' }}
                variant='h1'
            >
                NOGAS
            </Typography>
            <Typography variant='subtitle'>
                Next Optimized Generation of Autonomous Suburbs
            </Typography>
        </Box>
    )
}