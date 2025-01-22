// SelfService.js
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Divider, Button } from '@mui/material';

const dashboards = [
  {
    title: 'Operational Metrics',
    description: 'Real-time operational performance indicators',
    link: '#'
  },
  {
    title: 'Data Quality Monitor',
    description: 'Track data quality metrics across systems',
    link: '#'
  },
  {
    title: 'Usage Analytics',
    description: 'System and data usage patterns',
    link: '#'
  },
];

const SelfService = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Self-Service Analytics
      </Typography>
      
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Data Visualization Tools
        </Typography>
        <Grid container spacing={2}>
          {dashboards.map((dashboard) => (
            <Grid item xs={12} md={4} key={dashboard.title}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {dashboard.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {dashboard.description}
                  </Typography>
                  <Box mt={2}>
                    <Button variant="contained" color="primary" href={dashboard.link}>
                      View Dashboard
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SelfService;
