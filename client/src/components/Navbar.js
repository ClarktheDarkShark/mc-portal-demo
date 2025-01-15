import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#b71c1c', // Slightly darker red
      }}
    >
      <Toolbar>
        {/* Home Link (Image version) */}
        <Button
          component={RouterLink}
          to="/"
          sx={{ p: 0, mr: 2 }}
        >
          <img
            src="/images/home-icon.png" // Ensure you have the correct path for the home icon image
            alt="Home"
            style={{ height: '40px' }}
          />
        </Button>

        {/* Placeholder for other navbar content */}
        <Box sx={{ flexGrow: 1 }}>
          {/* Add additional components, e.g., links or text */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
