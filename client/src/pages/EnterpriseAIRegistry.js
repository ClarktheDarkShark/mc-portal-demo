import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  Chip,
  Paper,
  Autocomplete,
} from '@mui/material';

function EnterpriseAIRegistry() {
  const [registry, setRegistry] = useState(null);
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Fetch the registry info
    fetch('/api/enterprise-ai/registry')
      .then((res) => res.json())
      .then((data) => {
        setRegistry(data.registryInfo);
        setProjects(data.projects);
        setCategories(data.categories);
      })
      .catch((err) => console.error('Error fetching registry info:', err));
  }, []);

  const filteredProjects = selectedCategory
    ? projects.filter((project) =>
        project.category.includes(selectedCategory)
      )
    : projects;

  if (!registry) {
    return (
      <Box sx={{ padding: '2rem', textAlign: 'center' }}>
        <Typography variant="h4">Loading Registry...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: '2rem' }}>
      <Grid container spacing={4}>
        {/* Left Side: Submit Use Case Button */}
        <Grid item xs={4}>
          <Typography variant="h5" gutterBottom>
            Submit Use Cases
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '100%', height: '3rem' }}
            onClick={() => alert('Prototype - Use Case Submission')}
          >
            Submit Use Case
          </Button>
        </Grid>

        {/* Right Side: Registry Info */}
        <Grid item xs={8}>
          <Typography variant="h4" gutterBottom>
            {registry.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {registry.description}
          </Typography>

          {/* Category Filter */}
          <Autocomplete
            options={categories}
            value={selectedCategory}
            onChange={(event, newValue) => setSelectedCategory(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Filter by Category" />
            )}
            sx={{ marginBottom: '1rem' }}
          />

          {/* Project List */}
          <Paper elevation={3} sx={{ padding: '1rem' }}>
            {filteredProjects.map((project) => (
              <Box
                key={project.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid #eee',
                }}
              >
                <Typography variant="h6">{project.name}</Typography>
                <Chip label={project.category} />
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default EnterpriseAIRegistry;
