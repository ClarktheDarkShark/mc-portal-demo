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
import EnterpriseAIRegistry from './pages/EnterpriseAIRegistry';
import APIStore from './pages/APIStore';
import Governance from './pages/GovernanceDashboard';
import Standards from './pages/Standards';
import DeveloperWorkspace from './pages/DeveloperWorkspace';
import Analytics from './pages/Analytics';

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
          <Route path="/apistore" element={<APIStore />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/standards" element={<Standards />} />
          <Route path="/developer-workspace" element={<DeveloperWorkspace />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
