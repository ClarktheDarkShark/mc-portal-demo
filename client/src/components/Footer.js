import React from 'react';

function Footer() {
  const style = {
    background: '#d32f2f',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: 0,
    width: '100%'
  };

  return (
    <footer style={style}>
      <p>© {new Date().getFullYear()} USMC Data and AI Portal</p>
    </footer>
  );
}

export default Footer;
