// client/src/components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#d32f2f', // USMC Red
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
            src="/images/home-icon.png"  // Ensure you have a home icon image, or use an alternative path
            alt="Home"
            style={{ height: '40px' }}
          />
        </Button>
        
        {/*
        // Alternatively, if you prefer text, uncomment the following:
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            mr: 2,
          }}
        >
          Home
        </Typography>
        */}
        
        <Box sx={{ flexGrow: 1 }} />
        {/* Navigation buttons with images */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/policy-docs"
            sx={{ p: 0 }}
          >
            <img
              src="/images/policy-icon.png"
              alt="Policy Docs"
              style={{ height: '40px' }}
            />
          </Button>
          <Button
            component={RouterLink}
            to="/data-ai-repository"
            sx={{ p: 0 }}
          >
            <img
              src="/images/repository-icon.png"
              alt="Data Repository"
              style={{ height: '40px' }}
            />
          </Button>
          <Button
            component={RouterLink}
            to="/chat"
            sx={{ p: 0 }}
          >
            <img
              src="/images/chat-icon.png"
              alt="Chat Assistant"
              style={{ height: '40px' }}
            />
          </Button>
          <Button
            component={RouterLink}
            to="/api-store"
            sx={{ p: 0 }}
          >
            <img
              src="/images/api-icon.png"
              alt="API Store"
              style={{ height: '40px' }}
            />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
