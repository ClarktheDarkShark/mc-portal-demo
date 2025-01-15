// client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import Home from './pages/Home';
import PolicyDocs from './pages/PolicyDocs';
import DataAIRepository from './pages/DataAIRepository';
import ChatGPTLike from './pages/ChatGPTLike';
import IMDFInfo from './pages/IMDFInfo';
import APIStore from './pages/APIStore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Create a custom theme
const theme = createTheme({
  spacing: 8, // Default spacing unit
  palette: {
    primary: {
      main: '#004080', // USMC blue
    },
    secondary: {
      main: '#A81D24', // USMC red
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS across browsers */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policy-docs" element={<PolicyDocs />} />
          <Route path="/data-ai-repository" element={<DataAIRepository />} />
          <Route path="/chat" element={<ChatGPTLike />} />
          <Route path="/imdf" element={<IMDFInfo />} />
          <Route path="/api-store" element={<APIStore />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
