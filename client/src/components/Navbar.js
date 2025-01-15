// client/src/components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
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
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: '#fff',
          }}
        >
          USMC AI Portal
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/policy-docs"
            sx={{
              color: '#fff',
              textTransform: 'none',
            }}
          >
            Policy Docs
          </Button>
          <Button
            component={RouterLink}
            to="/data-ai-repository"
            sx={{
              color: '#fff',
              textTransform: 'none',
            }}
          >
            Data Repository
          </Button>
          <Button
            component={RouterLink}
            to="/chat"
            sx={{
              color: '#fff',
              textTransform: 'none',
            }}
          >
            Chat Assistant
          </Button>
          <Button
            component={RouterLink}
            to="/api-store"
            sx={{
              color: '#fff',
              textTransform: 'none',
            }}
          >
            API Store
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
