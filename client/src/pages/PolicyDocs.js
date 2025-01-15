import React, { useEffect, useState } from 'react';

function PolicyDocs() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    fetch('/api/policy')
      .then((res) => res.json())
      .then((data) => setPolicies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Data & AI Policy Documents</h2>
      <ul>
        {policies.map((doc, index) => (
          <li key={index}>
            <strong>{doc.title}</strong> - {doc.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PolicyDocs;
