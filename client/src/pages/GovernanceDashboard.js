// Governance.js
import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  Button
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

// Updated compliance data with DoD-relevant metric
const complianceData = [
  { title: 'DoD Cybersecurity Compliance', percentage: 92 },
  { title: 'Data Security', percentage: 88 },
  { title: 'Access Controls', percentage: 95 }
];

const activePolicies = [
  {
    title: 'Data Classification Policy',
    description: 'Guidelines for classifying and handling sensitive data',
    lastUpdated: '2024-01-15'
  },
  {
    title: 'AI Ethics Policy',
    description: 'Framework for ethical AI development and deployment',
    lastUpdated: '2024-01-10'
  }
];

const dataAccessControls = [
  { resource: 'Data Lake', accessLevel: 'Restricted', users: 150 },
  { resource: 'AI Platform', accessLevel: 'Controlled', users: 75 }
];

const Governance = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Dashboard Title */}
      <Typography variant="h4" gutterBottom>
        Governance Dashboard
      </Typography>
      
      {/* Compliance Status with Bar Graph */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Compliance Status
        </Typography>
        <Grid container spacing={4}>
          {/* Bar Chart Visualization */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  Compliance Overview
                </Typography>
                <Box width="100%" height={250}>
                  <ResponsiveContainer>
                    <BarChart data={complianceData} layout="vertical" margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                      <YAxis dataKey="title" type="category" width={150} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Bar dataKey="percentage" fill="#1976d2" />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Individual Compliance Cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {complianceData.map((item) => (
                <Grid item xs={12} key={item.title}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="h4" color="primary">
                        {item.percentage}%
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Active Policies Section */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Active Policies
        </Typography>
        <Grid container spacing={2}>
          {activePolicies.map((policy) => (
            <Grid item xs={12} md={6} key={policy.title}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" color="textSecondary">
                    {policy.lastUpdated}
                  </Typography>
                  <Typography variant="h6">{policy.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {policy.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Data Access Controls Section */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Data Access Controls
        </Typography>
        <Grid container spacing={2}>
          {dataAccessControls.map((access) => (
            <Grid item xs={12} md={6} key={access.resource}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">{access.resource}</Typography>
                  <Typography variant="body1">
                    Access Level: {access.accessLevel}
                  </Typography>
                  <Typography variant="body1">
                    Users: {access.users}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Enterprise Data Fabric Section */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Enterprise Data Fabric
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          What is IMDF?
        </Typography>
        <Typography variant="body1" paragraph>
          The Enterprise Data Fabric revolutionizes how we handle mission-critical data. It provides seamless integration, real-time analytics, and secure data sharing across the enterprise.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2">Seamless Integration</Typography>
            <Typography variant="body2">
              Connect all your data sources with our advanced integration layer
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2">Real-time Analytics</Typography>
            <Typography variant="body2">
              Process and analyze data in real-time for immediate insights
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2">Security First</Typography>
            <Typography variant="body2">
              Enterprise-grade security with end-to-end encryption
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2">Scalable Architecture</Typography>
            <Typography variant="body2">
              Built to grow with your organization's needs
            </Typography>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Button variant="contained" color="primary">
            Join the Pilot Program
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Governance;
