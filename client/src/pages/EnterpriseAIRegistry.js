import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

function EnterpriseAIRegistry() {
  const [registry, setRegistry] = useState(null);

  useEffect(() => {
    fetch('/api/enterprise-ai/registry')
      .then((res) => res.json())
      .then((data) => setRegistry(data))
      .catch((err) => console.error('Error fetching registry info:', err));
  }, []);

  if (!registry) {
    return (
      <Box sx={{ padding: '2rem', textAlign: 'center' }}>
        <Typography variant="h4">Loading Registry...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        {registry.name}
      </Typography>
      <Typography variant="body1" paragraph>
        {registry.description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href={registry.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit the Registry
      </Button>
    </Box>
  );
}

export default EnterpriseAIRegistry;
