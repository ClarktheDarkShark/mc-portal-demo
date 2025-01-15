// client/src/theme/usmcTheme.js

import { createTheme } from '@mui/material/styles';

const usmcTheme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f', // USMC Red
    },
    secondary: {
      main: '#424242', // Secondary color
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
    h4: {
      fontWeight: 600, // Optional: Customize heading weights
    },
    h5: {
      fontWeight: 500,
    },
  },
  spacing: 8, // Default spacing unit
});

export default usmcTheme;
