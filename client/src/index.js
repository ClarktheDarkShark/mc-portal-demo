import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import usmcTheme from './theme/usmcTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={usmcTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
