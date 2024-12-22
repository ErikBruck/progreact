import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'red' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Rakenduste Programmeerimine 2024 :p
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            sx={{ fontSize: '1.2rem', marginX: 2 }}
          >
            HomePage
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/login"
            sx={{ fontSize: '1.2rem', marginX: 2 }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/profile"
            sx={{ fontSize: '1.2rem', marginX: 2 }}
          >
            Profile
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
