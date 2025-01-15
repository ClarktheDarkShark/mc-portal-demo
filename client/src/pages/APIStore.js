import React, { useEffect, useState } from 'react';

function APIStore() {
  const [apis, setApis] = useState([]);

  useEffect(() => {
    fetch('/api/apistore')
      .then((res) => res.json())
      .then((data) => setApis(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>API Store</h2>
      <ul>
        {apis.map((api, idx) => (
          <li key={idx}>
            <strong>{api.name}</strong>  
            <br />
            Endpoint: {api.endpoint}  
            <br />
            {api.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default APIStore;
