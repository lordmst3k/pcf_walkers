import Copyright from './Copyright'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Thank you to all of our walkers!
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        <a href="https://www.freepik.com/free-vector/hand-drawn-dog-outline-illustration_23044828.htm#page=6&query=dog%20placeholder&position=35&from_view=search&track=ais&uuid=2681e713-4997-4f1d-b394-5f1afc84c5cf">
          Placeholder dog image by Freepik
        </a>
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Links to facebook & twitter go here.
      </Typography>
      <Copyright />
    </Box>
  )
}

export default Footer
