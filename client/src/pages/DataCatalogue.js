// client/src/pages/DataCatalogue.js

import React, { useEffect, useState } from 'react';

function DataCatalogue() {
  const [dataCatalogue, setDataCatalogue] = useState(null);
  // Track which categories are expanded (true) or collapsed (false)
  const [openCategories, setOpenCategories] = useState({});

  useEffect(() => {
    fetch('/api/repository/data')
      .then((res) => res.json())
      .then((data) => {
        setDataCatalogue(data);

        // Initialize openCategories state to have all categories collapsed
        const initialOpenState = {};
        data.dataRepository.categories.forEach((_, index) => {
          initialOpenState[index] = false;
        });
        setOpenCategories(initialOpenState);
      })
      .catch((err) => console.error('Error fetching Data Catalogue:', err));
  }, []);

  const toggleCategory = (index) => {
    setOpenCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!dataCatalogue) {
    return <div>Loading Data Catalogue...</div>;
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Data Catalogue</h2>

      {/* Data Repository Section */}
      <section>
        <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '0.5rem' }}>Data Repository Categories</h3>
        {dataCatalogue.dataRepository.categories.map((cat, catIndex) => (
          <div
            key={catIndex}
            style={{
              marginBottom: '1rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <h4 style={{ margin: 0 }}>{cat.name}</h4>
              <button
                onClick={() => toggleCategory(catIndex)}
                style={{
                  background: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                }}
              >
                {openCategories[catIndex] ? 'Hide Datasets' : 'Show Datasets'}
              </button>
            </div>
            <p>{cat.description}</p>
            {openCategories[catIndex] && (
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {cat.datasets.map((dataset, dsIndex) => (
                  <li
                    key={dsIndex}
                    style={{
                      margin: '0.5rem 0',
                      padding: '0.5rem',
                      borderBottom: '1px solid #e0e0e0',
                    }}
                  >
                    <strong>{dataset.name}</strong> - {dataset.description}{' '}
                    <a
                      href={dataset.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#007bff' }}
                    >
                      [Link]
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Data Reports Section */}
      {dataCatalogue.dataReports && (
        <section style={{ marginTop: '2rem' }}>
          <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '0.5rem' }}>{dataCatalogue.dataReports.name}</h3>
          <p>{dataCatalogue.dataReports.description}</p>
          <p>
            <a
              href={dataCatalogue.dataReports.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#007bff' }}
            >
              [Link]
            </a>
          </p>
        </section>
      )}

      {/* Data APIs Section */}
      {dataCatalogue.dataAPIs && (
        <section style={{ marginTop: '2rem' }}>
          <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '0.5rem' }}>{dataCatalogue.dataAPIs.name}</h3>
          <p>{dataCatalogue.dataAPIs.description}</p>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {dataCatalogue.dataAPIs.endpoints.map((endpoint, index) => (
              <li
                key={index}
                style={{
                  margin: '0.5rem 0',
                  padding: '0.5rem',
                  borderBottom: '1px solid #e0e0e0',
                }}
              >
                <strong>{endpoint.endpoint}</strong>: {endpoint.description}
              </li>
            ))}
          </ul>
          <p>
            <a
              href={dataCatalogue.dataAPIs.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#007bff' }}
            >
              [Link]
            </a>
          </p>
        </section>
      )}
    </div>
  );
}

export default DataCatalogue;
