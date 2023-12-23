import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const AppBar = () => {
  return (
    <div>
      <Toolbar>
        <i className="fa-solid fa-person-walking"></i>
        <Typography variant="h6" color="inherit" noWrap sx={{ ml: 2 }}>
          Pets Come First Walkers
        </Typography>
      </Toolbar>
    </div>
  )
}

export default AppBar
