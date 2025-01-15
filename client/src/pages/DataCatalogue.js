// client/src/pages/DataCatalogue.js

import React, { useEffect, useState } from 'react';

function DataCatalogue() {
  const [dataCatalogue, setDataCatalogue] = useState([]);

  useEffect(() => {
    fetch('/api/repository/data')
      .then((res) => res.json())
      .then((data) => setDataCatalogue(data))
      .catch((err) => console.error('Error fetching Data Catalogue:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
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
    </div>
  );
}

export default DataCatalogue;
