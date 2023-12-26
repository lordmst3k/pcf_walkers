import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pets Come First Dogs
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Below you can view our dogs. You can see information and previous
          comments about the dogs. Please add a comment about your walk!
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Link to="/dog/add">
            <Button variant="contained">Add New Dog</Button>
          </Link>
          <Link to="/dogs/recent">
            <Button variant="outlined">Recent Activity</Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  )
}

export default Header
