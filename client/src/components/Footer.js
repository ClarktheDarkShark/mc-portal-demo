// client/src/components/Footer.js

import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#424242',
    color: '#fff',
    padding: theme.spacing(2, 0),
    position: 'static',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
  link: {
    color: '#d32f2f',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Typography variant="body2">
        © {new Date().getFullYear()} USMC Data and AI Portal. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="https://www.marines.mil/" target="_blank" rel="noopener" className={classes.link}>
          Official USMC Website
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
