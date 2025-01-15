// client/src/components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: 'url(/images/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // Optional: If the image is busy, you can darken it:
        backgroundColor: 'rgba(0,0,0,0.5)',
        backgroundBlendMode: 'multiply',
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
              // Optional: Add text shadow for improved readability
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
            }}
          >
            USMC Data & AI Portal
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
