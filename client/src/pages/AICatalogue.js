// client/src/pages/AICatalogue.js

import React, { useEffect, useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

function AICatalogue() {
  const [aiCatalogue, setAICatalogue] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');

  useEffect(() => {
    fetch('/api/repository/ai')
      .then((res) => res.json())
      .then((data) => {
        setAICatalogue(data);
        if (data.length > 0) {
          setSelectedModel(data[0].name);
        }
      })
      .catch((err) => console.error('Error fetching AI Catalogue:', err));
  }, []);

  const handleChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const selectedModelDetails = aiCatalogue.find((model) => model.name === selectedModel);

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h2" gutterBottom>
        AI Catalogue
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="model-select-label">Select Model</InputLabel>
        <Select
          labelId="model-select-label"
          value={selectedModel}
          label="Select Model"
          onChange={handleChange}
        >
          {aiCatalogue.map((model, index) => (
            <MenuItem key={index} value={model.name}>
              {model.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedModelDetails && (
        <Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Description:</strong> {selectedModelDetails.description}
          </Typography>
          <Typography variant="body1">
            <a href={selectedModelDetails.link} target="_blank" rel="noopener noreferrer">
              [Link]
            </a>
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default AICatalogue;
