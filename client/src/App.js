// client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PolicyDocs from './pages/PolicyDocs';
import DataAIRepository from './pages/DataAIRepository';
import ChatGPTLike from './pages/ChatGPTLike';
import IMDFInfo from './pages/IMDFInfo';
import APIStore from './pages/APIStore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline /> {/* Normalize CSS across browsers */}
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
  );
}

export default App;
