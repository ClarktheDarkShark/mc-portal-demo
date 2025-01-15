import { createTheme } from '@mui/material/styles';

const usmcTheme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f' // USMC Red
    },
    secondary: {
      main: '#424242'
    }
  },
  typography: {
    fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(',')
  }
});

export default usmcTheme;
