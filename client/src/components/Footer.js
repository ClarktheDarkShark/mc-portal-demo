// client/src/components/Footer.js

import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        color: '#fff',
        py: 2, // Equivalent to theme.spacing(2)
        textAlign: 'center',
        position: 'static',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} USMC Data and AI Portal. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link
          href="https://www.marines.mil/"
          target="_blank"
          rel="noopener"
          sx={{
            color: 'primary.main', // USMC red from the theme
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Official USMC Website
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
