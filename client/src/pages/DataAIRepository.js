import React, { useEffect, useState } from 'react';

function DataAIRepository() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    fetch('/api/repository')
      .then((res) => res.json())
      .then((data) => setCatalog(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '2rem' }}>
        <h2>Data and AI Repository</h2>
        <ul>
          {catalog.map((item, idx) => (
            <li key={idx}>
              <strong>{item.name}</strong> - {item.description} 
              <a href={item.link} target="_blank" rel="noopener noreferrer"> [Link]</a>
            </li>
          ))}
        </ul>
      </div>
    </ThemeProvider>
  );
}

export default DataAIRepository;
