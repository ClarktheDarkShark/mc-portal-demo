// client/src/pages/DataAIRepository.js

import React, { useEffect, useState } from 'react';

function DataAIRepository() {
  const [dataCatalogue, setDataCatalogue] = useState([]);
  const [aiCatalogue, setAICatalogue] = useState([]);

  useEffect(() => {
    // Fetch Data Catalogue
    fetch('/api/repository/data')
      .then((res) => res.json())
      .then((data) => setDataCatalogue(data))
      .catch((err) => console.error('Error fetching Data Catalogue:', err));

    // Fetch AI Catalogue
    fetch('/api/repository/ai')
      .then((res) => res.json())
      .then((data) => setAICatalogue(data))
      .catch((err) => console.error('Error fetching AI Catalogue:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      {/* Data Catalogue Section */}
      <h2>Data Catalogue</h2>
      <ul>
        {dataCatalogue.map((item, idx) => (
          <li key={idx}>
            <strong>{item.name}</strong> - {item.description}{' '}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              [Link]
            </a>
          </li>
        ))}
      </ul>

      {/* AI Catalogue Section */}
      <h2>AI Catalogue</h2>
      <ul>
        {aiCatalogue.map((item, idx) => (
          <li key={idx}>
            <strong>{item.name}</strong> - {item.description}{' '}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              [Link]
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataAIRepository;
