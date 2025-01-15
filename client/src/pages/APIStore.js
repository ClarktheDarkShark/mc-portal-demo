import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Button,
  CardActions,
} from '@mui/material';

function APIStore() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAPI, setSelectedAPI] = useState('');
  const [apis, setApis] = useState([]);

  useEffect(() => {
    // Mock API data grouped by categories
    const mockCategories = [
      {
        category: 'Weather APIs',
        apis: [
          {
            name: 'Marine Weather API',
            endpoint: '/api/weather',
            description: 'Get real-time weather data tailored for Marine Corps operations.',
            pricing: 'Free for up to 1,000 requests/month.',
            documentation: 'https://example.com/weather-docs',
          },
        ],
      },
      {
        category: 'Personnel APIs',
        apis: [
          {
            name: 'Personnel Tracking API',
            endpoint: '/api/personnel',
            description: 'Track and manage personnel information with robust filtering options.',
            pricing: '$25/month for up to 10,000 requests.',
            documentation: 'https://example.com/personnel-docs',
          },
        ],
      },
      {
        category: 'Logistics APIs',
        apis: [
          {
            name: 'Mission Planning API',
            endpoint: '/api/mission-planning',
            description: 'Access tools for automated mission planning and logistics management.',
            pricing: 'Contact us for enterprise pricing.',
            documentation: 'https://example.com/mission-planning-docs',
          },
          {
            name: 'Vehicle Logistics API',
            endpoint: '/api/vehicles',
            description: 'Monitor and manage vehicle fleets, including maintenance schedules.',
            pricing: 'Free for basic use; advanced features available in premium tiers.',
            documentation: 'https://example.com/vehicle-docs',
          },
        ],
      },
    ];

    setCategories(mockCategories);
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSelectedAPI(''); // Reset API selection when changing categories
    const selectedCategoryApis = categories.find((cat) => cat.category === category)?.apis || [];
    setApis(selectedCategoryApis);
  };

  const handleAPIChange = (event) => {
    setSelectedAPI(event.target.value);
  };

  const selectedAPIDetails = apis.find((api) => api.name === selectedAPI);

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h2" gutterBottom>
        API Store
      </Typography>
      <Typography variant="body1" paragraph>
        Browse and integrate APIs tailored for USMC operations. Select a category to view available APIs.
      </Typography>

      {/* Category Dropdown */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="category-select-label">Select Category</InputLabel>
        <Select
          labelId="category-select-label"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category, idx) => (
            <MenuItem key={idx} value={category.category}>
              {category.category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* API Dropdown */}
      {selectedCategory && (
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="api-select-label">Select API</InputLabel>
          <Select
            labelId="api-select-label"
            value={selectedAPI}
            onChange={handleAPIChange}
          >
            {apis.map((api, idx) => (
              <MenuItem key={idx} value={api.name}>
                {api.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* API Details Card */}
      {selectedAPIDetails && (
        <Card sx={{ maxWidth: 600, margin: 'auto' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {selectedAPIDetails.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              <strong>Endpoint:</strong> {selectedAPIDetails.endpoint}
            </Typography>
            <Typography variant="body2" paragraph>
              {selectedAPIDetails.description}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Pricing:</strong> {selectedAPIDetails.pricing}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={selectedAPIDetails.documentation}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Documentation
            </Button>
          </CardActions>
        </Card>
      )}
    </Box>
  );
}

export default APIStore;
