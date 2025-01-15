// client/src/pages/AICatalogue.js

import React, { useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';

function AICatalogue() {
  const [aiData, setAIData] = useState(null);
  const [selectedSection, setSelectedSection] = useState('modelRepository'); // "modelRepository" or "aiToolkits"
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('/api/repository/ai')
      .then((res) => res.json())
      .then((data) => {
        setAIData(data);
        if (data && data.modelRepository && data.modelRepository.categories.length > 0) {
          setSelectedCategory(data.modelRepository.categories[0].name);
        }
      })
      .catch((err) => console.error('Error fetching AI Catalogue:', err));
  }, []);

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (!aiData) {
    return <Typography variant="h6" sx={{ p: 2 }}>Loading AI Catalogue...</Typography>;
  }

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h2" gutterBottom>
        AI Catalogue
      </Typography>

      {/* Top-Level Section Selector */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="ai-section-select-label">Select Section</InputLabel>
        <Select
          labelId="ai-section-select-label"
          value={selectedSection}
          label="Select Section"
          onChange={handleSectionChange}
        >
          <MenuItem value="modelRepository">Model Repository</MenuItem>
          <MenuItem value="aiToolkits">AI Toolkits</MenuItem>
        </Select>
      </FormControl>

      {/* If Model Repository is selected, show nested category selector and model list */}
      {selectedSection === 'modelRepository' && (
        <>
          {/* Category Selector */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="category-select-label">Select Category</InputLabel>
            <Select
              labelId="category-select-label"
              value={selectedCategory}
              label="Select Category"
              onChange={handleCategoryChange}
            >
              {aiData.modelRepository.categories.map((category, index) => (
                <MenuItem key={index} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Display models in the selected category */}
          {(() => {
            const category = aiData.modelRepository.categories.find(
              (cat) => cat.name === selectedCategory
            );
            if (!category)
              return <Typography variant="body1">No models available in this category.</Typography>;

            return (
              <>
                <Typography variant="h5" gutterBottom>
                  {selectedCategory} Models
                </Typography>
                <Grid container spacing={2}>
                  {category.models.map((model, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="140"
                          image="/images/ai-repo2.jpg" // Use a placeholder image or if you have specific images, change accordingly
                          alt={model.name}
                        />
                        <CardContent>
                          <Typography variant="h6">
                            {model.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {model.description}
                          </Typography>
                          <Typography variant="body2">
                            <a href={model.link} target="_blank" rel="noopener noreferrer">
                              [Link]
                            </a>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </>
            );
          })()}
        </>
      )}

      {/* If AI Toolkits is selected, show its details */}
      {selectedSection === 'aiToolkits' && (
        <Box>
          <Typography variant="h5" gutterBottom>
            {aiData.aiToolkits.name}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            {aiData.aiToolkits.description}
          </Typography>
          <Typography variant="body1">
            <a href={aiData.aiToolkits.link} target="_blank" rel="noopener noreferrer">
              [Link]
            </a>
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default AICatalogue;
