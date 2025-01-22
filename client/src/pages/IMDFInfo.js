// IMDF.js
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';

const features = [
  {
    title: 'Seamless Integration',
    description: 'Connect all your data sources with our advanced integration layer',
  },
  {
    title: 'Real-time Analytics',
    description: 'Process and analyze data in real-time for immediate insights',
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade security with end-to-end encryption',
  },
  {
    title: 'Scalable Architecture',
    description: "Built to grow with your organization's needs",
  },
];

const IMDF = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Enterprise Data Fabric
      </Typography>

      <Box mb={4}>
        <Typography variant="h6" align="center" gutterBottom>
          What is IMDF?
        </Typography>
        <Typography variant="body1" align="center">
          The Enterprise Data Fabric revolutionizes how we handle mission-critical data. It provides seamless integration, real-time analytics, and secure data sharing across the enterprise.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={4} display="flex" justifyContent="center">
        <Button variant="contained" color="primary">
          Join the Pilot Program
        </Button>
      </Box>
    </Container>
  );
};

export default IMDF;
