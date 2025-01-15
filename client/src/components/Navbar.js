import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    background: '#d32f2f',
    padding: '1rem',
    alignItems: 'center',
    color: 'white'
  };

  const linkStyle = {
    color: 'white',
    marginRight: '1rem',
    textDecoration: 'none'
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ marginRight: '2rem' }}>USMC AI Portal</h2>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/policy-docs" style={linkStyle}>Policy Docs</Link>
      <Link to="/data-ai-repository" style={linkStyle}>Data & AI Repo</Link>
      <Link to="/chat" style={linkStyle}>Chat</Link>
      <Link to="/imdf" style={linkStyle}>IMDF</Link>
      <Link to="/api-store" style={linkStyle}>API Store</Link>
    </nav>
  );
}

export default Navbar;
