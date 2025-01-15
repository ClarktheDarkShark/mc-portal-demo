// client/src/components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
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
        {/* Remove any left-side branding text or links */}
        <Box sx={{ flexGrow: 1 }} />
        {/* Navigation buttons with images */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/policy-docs"
            sx={{ p: 0 }} // Remove extra padding so the image fits nicely
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
