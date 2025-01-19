import React, { useEffect, useState } from 'react';

function DataCatalogue() {
  const [dataCatalogue, setDataCatalogue] = useState(null);
  const [selectedSection, setSelectedSection] = useState('repository');
  const [selectedDataset, setSelectedDataset] = useState(null);
  const [openCategories, setOpenCategories] = useState({});
  const [expandedDatasets, setExpandedDatasets] = useState({});

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

  const toggleDataset = (catIndex, dsIndex) => {
    const key = `${catIndex}-${dsIndex}`;
    setExpandedDatasets(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const renderDatasetDetails = (dataset, isExpanded) => (
    <div style={{
      padding: isExpanded ? '1rem' : 0,
      backgroundColor: '#f8f9fa',
      borderRadius: '4px',
      marginTop: isExpanded ? '1rem' : 0,
      height: isExpanded ? 'auto' : 0,
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }}>
      {isExpanded && (
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <img src={dataset.image} alt={dataset.name} style={{ width: '100%', borderRadius: '4px' }} />
          </div>
          <div>
            <p><strong>Overview:</strong> {dataset.overview}</p>
            <p><strong>Last Updated:</strong> {dataset.lastUpdated}</p>
            <p><strong>Data Quality:</strong> 
              <span style={{ 
                color: dataset.dataQuality === 'High' ? 'green' : 'orange',
                fontWeight: 'bold',
                marginLeft: '0.5rem'
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
      )}
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
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
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
                      <li key={dsIndex}>
                        <div
                          onClick={() => toggleDataset(catIndex, dsIndex)}
                          style={{
                            margin: '0.5rem 0',
                            padding: '0.5rem',
                            borderBottom: '1px solid #e0e0e0',
                            cursor: 'pointer',
                            backgroundColor: 'white',
                            borderRadius: '4px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'background-color 0.2s',
                            ':hover': {
                              backgroundColor: '#f0f0f0'
                            }
                          }}
                        >
                          <div>
                            <strong>{dataset.name}</strong>
                            <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>{dataset.description}</p>
                          </div>
                          <span style={{ color: '#007bff' }}>
                            {expandedDatasets[`${catIndex}-${dsIndex}`] ? '▼' : '▶'}
                          </span>
                        </div>
                        {renderDatasetDetails(dataset, expandedDatasets[`${catIndex}-${dsIndex}`])}
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
    <div style={{ display: 'flex', padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '1400px', margin: '0 auto' }}>
      <nav style={{ width: '200px', marginRight: '2rem', flexShrink: 0 }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {['repository', 'reports', 'apis'].map((menu) => (
            <li key={menu} style={{ marginBottom: '1rem' }}>
              <button
                onClick={() => setSelectedSection(menu)}
                style={{
                  background: selectedSection === menu ? '#007bff' : '#f0f0f0',
                  color: selectedSection === menu ? '#fff' : '#000',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main style={{ flex: 1 }}>
        {renderContent()}
      </main>
    </div>
  );
}

export default DataCatalogue;
