// client/src/components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#d32f2f', // USMC Red
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: '#fff',
  },
  button: {
    marginLeft: theme.spacing(2),
    color: '#fff',
    textTransform: 'none',
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component={RouterLink} 
          to="/" 
          className={classes.title}
        >
          USMC AI Portal
        </Typography>
        <Box>
          <Button 
            component={RouterLink} 
            to="/policy-docs" 
            className={classes.button}
          >
            Policy Docs
          </Button>
          <Button 
            component={RouterLink} 
            to="/data-ai-repository" 
            className={classes.button}
          >
            Data Repository
          </Button>
          <Button 
            component={RouterLink} 
            to="/chat" 
            className={classes.button}
          >
            Chat Assistant
          </Button>
          <Button 
            component={RouterLink} 
            to="/api-store" 
            className={classes.button}
          >
            API Store
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
