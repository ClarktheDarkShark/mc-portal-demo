// client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import usmcTheme from './theme/usmcTheme';

// Import your pages/components exactly:
import Home from './pages/Home';
import PolicyDocs from './pages/PolicyDocs';
import DataCatalogue from './pages/DataCatalogue';  // <-- Ensure the file exists and name is correct
import AICatalogue from './pages/AICatalogue';
import ChatGPTLike from './pages/ChatGPTLike';
import IMDFInfo from './pages/IMDFInfo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={usmcTheme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policy-docs" element={<PolicyDocs />} />
          <Route path="/data-repository" element={<DataCatalogue />} />
          <Route path="/ai-repository" element={<AICatalogue />} />
          <Route path="/ai-registry" element={<EnterpriseAIRegistry />} />
          <Route path="/chat" element={<ChatGPTLike />} />
          <Route path="/imdf" element={<IMDFInfo />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
