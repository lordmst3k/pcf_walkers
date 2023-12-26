import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const TopBar = (props) => {
  const user = { props }
  return (
    <div>
      <React.Fragment>
        <Toolbar
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            overflowX: 'auto',
          }}
        >
          <Toolbar>
            <i className="fa-solid fa-person-walking"></i>
            <Typography variant="h6" color="inherit" noWrap sx={{ ml: 2 }}>
              Pets Come First Walkers
            </Typography>
          </Toolbar>
          {user.name ? (
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap sx={{ ml: 2 }}>
                Hello, {user.name}
              </Typography>
              <Button
                href="/signout"
                variant="outlined"
                sx={{ my: 1, mx: 1.5 }}
              >
                Sign Out
              </Button>
            </Toolbar>
          ) : (
            <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Login
            </Button>
          )}
        </Toolbar>
      </React.Fragment>
    </div>
  )
}

export default TopBar
