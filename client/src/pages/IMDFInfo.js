//  client/src/pages/IMDFInfo.js

import React, { useEffect, useState } from 'react';

function IMDFInfo() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch('/api/imdf')
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.error(err));
  }, []);

  if (!info) return <div>Loading...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Integrated Mission Data Fabric (IMDF)</h2>
      <p>{info.description}</p>
      <h3>How to Participate</h3>
      <ul>
        {info.participation_steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ul>
    </div>
  );
}

export default IMDFInfo;
