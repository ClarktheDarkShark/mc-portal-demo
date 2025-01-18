// client/src/pages/DataCatalogue.js

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

function DataCatalogue() {
  const [dataCatalogue, setDataCatalogue] = useState(null);
  const [selectedSection, setSelectedSection] = useState('dataRepository'); // "dataRepository" or "dataReports"
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('/api/repository/data')
      .then((res) => res.json())
      .then((data) => {
        setDataCatalogue(data);
        if (
          data &&
          data.dataRepository &&
          data.dataRepository.categories.length > 0
        ) {
          setSelectedCategory(data.dataRepository.categories[0].name);
        }
      })
      .catch((err) => console.error('Error fetching Data Catalogue:', err));
  }, []);

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (!dataCatalogue) {
    return (
      <Typography variant="h6" sx={{ p: 2 }}>
        Loading Data Catalogue...
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h2" gutterBottom>
        Data Catalogue
      </Typography>

      {/* Top-Level Section Selector */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="data-section-select-label">Select Section</InputLabel>
        <Select
          labelId="data-section-select-label"
          value={selectedSection}
          label="Select Section"
          onChange={handleSectionChange}
        >
          <MenuItem value="dataRepository">Data Repository</MenuItem>
          <MenuItem value="dataReports">Data Reports</MenuItem>
        </Select>
      </FormControl>

      {/* If Data Repository is selected, show nested category selector and dataset list */}
      {selectedSection === 'dataRepository' && (
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
              {dataCatalogue.dataRepository.categories.map((category, index) => (
                <MenuItem key={index} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Display datasets in the selected category */}
          {(() => {
            const category = dataCatalogue.dataRepository.categories.find(
              (cat) => cat.name === selectedCategory
            );
            if (!category)
              return (
                <Typography variant="body1">
                  No datasets available in this category.
                </Typography>
              );

            return (
              <>
                <Typography variant="h5" gutterBottom>
                  {selectedCategory} Datasets
                </Typography>
                <Grid container spacing={2}>
                  {category.datasets.map((dataset, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="140"
                          image={
                            dataset.image || '/images/data-repo-placeholder.jpg'
                          }
                          alt={dataset.name}
                        />
                        <CardContent>
                          <Typography variant="h6">{dataset.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {dataset.description}
                          </Typography>
                          <Typography variant="body2">
                            <a
                              href={dataset.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
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

      {/* If Data Reports is selected, show its details */}
      {selectedSection === 'dataReports' && (
        <Box>
          <Typography variant="h5" gutterBottom>
            {dataCatalogue.dataReports.name}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            {dataCatalogue.dataReports.description}
          </Typography>
          <Typography variant="body1">
            <a
              href={dataCatalogue.dataReports.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              [Link]
            </a>
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default DataCatalogue;
