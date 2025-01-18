// client/src/pages/DataCatalogue.js

import React, { useEffect, useState } from 'react';

function DataCatalogue() {
  const [dataCatalogue, setDataCatalogue] = useState(null);

  useEffect(() => {
    fetch('/api/repository/data')
      .then((res) => res.json())
      .then((data) => setDataCatalogue(data))
      .catch((err) => console.error('Error fetching Data Catalogue:', err));
  }, []);

  if (!dataCatalogue) {
    return <div>Loading Data Catalogue...</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Data Catalogue</h2>
      
      {/* Data Repository Section */}
      {dataCatalogue.dataRepository?.categories && (
        <div>
          <h3>Data Repository Categories</h3>
          {dataCatalogue.dataRepository.categories.map((cat, catIndex) => (
            <div key={catIndex}>
              <h4>{cat.name}</h4>
              <ul>
                {cat.datasets.map((dataset, dsIndex) => (
                  <li key={dsIndex}>
                    <strong>{dataset.name}</strong> - {dataset.description}{' '}
                    <a
                      href={dataset.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Link]
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Data Reports Section */}
      {dataCatalogue.dataReports && (
        <div>
          <h3>{dataCatalogue.dataReports.name}</h3>
          <p>{dataCatalogue.dataReports.description}</p>
          <p>
            <a
              href={dataCatalogue.dataReports.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              [Link]
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default DataCatalogue;
