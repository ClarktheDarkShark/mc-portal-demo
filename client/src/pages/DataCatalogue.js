import React, { useEffect, useState } from 'react';

function DataCatalogue() {
  const [dataCatalogue, setDataCatalogue] = useState(null);
  const [selectedSection, setSelectedSection] = useState('repository');
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
    <div style={{
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h3>{dataset.name}</h3>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
        <div>
          <img src={dataset.image} alt={dataset.name} style={{ width: '100%', borderRadius: '4px' }} />
        </div>
        <div>
          <p><strong>Description:</strong> {dataset.description}</p>
          <p><strong>Overview:</strong> {dataset.overview}</p>
          <p><strong>Last Updated:</strong> {dataset.lastUpdated}</p>
          <p><strong>Data Quality:</strong> 
            <span style={{ 
              color: dataset.dataQuality === 'High' ? 'green' : 'orange',
              fontWeight: 'bold'
            }}>
              {dataset.dataQuality}
            </span>
          </p>
          <p><strong>Lineage:</strong> {dataset.lineage}</p>
          <p><strong>Connection Details:</strong> {dataset.connectionDetails}</p>
          <a href={dataset.link} target="_blank" rel="noopener noreferrer" 
            style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}>
            Access Dataset
          </a>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div>
      <h3>Data Analytics Reports</h3>
      <p>{dataCatalogue.dataReports.description}</p>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {dataCatalogue.dataReports.reports.map((report, index) => (
          <div key={index} style={{
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            <h4>{report.title}</h4>
            <p>{report.summary}</p>
            <p><small>Published: {report.publishedDate}</small></p>
            <a href={report.link} target="_blank" rel="noopener noreferrer" 
              style={{ color: '#007bff' }}>
              View Report
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAPIs = () => (
    <div>
      <h3>Data Access APIs</h3>
      <p>{dataCatalogue.dataAPIs.description}</p>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {dataCatalogue.dataAPIs.endpoints.map((api, index) => (
          <div key={index} style={{
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            <code style={{ 
              backgroundColor: '#f8f9fa',
              padding: '0.5rem',
              borderRadius: '4px',
              display: 'block',
              marginBottom: '0.5rem'
            }}>
              {api.endpoint}
            </code>
            <p>{api.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    if (selectedDataset) {
      return renderDatasetDetails(selectedDataset);
    }

    switch (selectedSection) {
      case 'repository':
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
      case 'reports':
        return renderReports();
      case 'apis':
        return renderAPIs();
      default:
        return null;
    }
  };

  if (!dataCatalogue) {
    return <div>Loading Data Catalogue...</div>;
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        borderBottom: '1px solid #dee2e6'
      }}>
        {[
          { id: 'repository', label: 'Data Repository' },
          { id: 'reports', label: 'Reports' },
          { id: 'apis', label: 'APIs' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              setSelectedSection(tab.id);
              setSelectedDataset(null);
            }}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              background: 'none',
              borderBottom: selectedSection === tab.id ? '2px solid #007bff' : 'none',
              color: selectedSection === tab.id ? '#007bff' : '#6c757d',
              cursor: 'pointer'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default DataCatalogue;
