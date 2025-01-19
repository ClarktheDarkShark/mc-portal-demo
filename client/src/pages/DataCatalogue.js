import React, { useEffect, useState } from 'react';

function DataCatalogue() {
  const [dataCatalogue, setDataCatalogue] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState('Data Assets');
  const [selectedDataset, setSelectedDataset] = useState(null);
  const [openCategories, setOpenCategories] = useState({});

  useEffect(() => {
    fetch('/api/repository/data')
      .then((res) => res.json())
      .then((data) => {
        setDataCatalogue(data);
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

  const renderDatasetDetails = (dataset) => (
    <div>
      <h4>{dataset.name}</h4>
      <p><strong>Overview:</strong> {dataset.overview}</p>
      <p><strong>Data Quality:</strong> {dataset.dataQuality}</p>
      <p><strong>Lineage:</strong> {dataset.lineage}</p>
      <p><strong>Connection Details:</strong> {dataset.connectionDetails}</p>
      <a href={dataset.link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
        [Link]
      </a>
    </div>
  );

  const renderContent = () => {
    switch (selectedMenu) {
      case 'Data Assets':
        return (
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
                          cursor: 'pointer',
                        }}
                        onClick={() => setSelectedDataset(dataset)}
                      >
                        <strong>{dataset.name}</strong> - {dataset.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        );
      case 'Systems':
        return <div>Systems content goes here...</div>;
      case 'Data Source':
        return <div>Data Source content goes here...</div>;
      case 'Infrastructure':
        return <div>Infrastructure content goes here...</div>;
      case 'Standards':
        return <div>Standards content goes here...</div>;
      default:
        return null;
    }
  };

  if (!dataCatalogue) {
    return <div>Loading Data Catalogue...</div>;
  }

  return (
    <div style={{ display: 'flex', padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <nav style={{ width: '200px', marginRight: '2rem' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {['Data Assets', 'Systems', 'Data Source', 'Infrastructure', 'Standards'].map((menu) => (
            <li key={menu} style={{ marginBottom: '1rem' }}>
              <button
                onClick={() => {
                  setSelectedMenu(menu);
                  setSelectedDataset(null);
                }}
                style={{
                  background: selectedMenu === menu ? '#007bff' : '#f0f0f0',
                  color: selectedMenu === menu ? '#fff' : '#000',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                {menu}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main style={{ flex: 1 }}>
        {selectedDataset ? renderDatasetDetails(selectedDataset) : renderContent()}
      </main>
    </div>
  );
}

export default DataCatalogue;
