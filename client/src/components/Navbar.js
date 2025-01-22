import React from 'react';
import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#b71c1c', // Slightly darker red
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Home Link (Image version) */}
        <Button
          component={RouterLink}
          to="/"
          sx={{ p: 0, ml: 1 }}
        >
          <img
            src="/images/home-icon.png" // Ensure you have the correct path for the home icon image
            alt="Home"
            style={{ height: '40px' }}
          />
        </Button>

        {/* Centered Title */}
        {/* <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            marginBottom: 0, // Reset any additional margin
            flexGrow: 1, // Make the title take up available space
            textAlign: 'center',
          }}
        >
          USMC Data & AI Portal
        </Typography> */}

        {/* Placeholder for other navbar content */}
        <Box sx={{ mr: 2 }}>
          {/* Additional buttons or links */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
