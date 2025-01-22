// DevelopersWorkspace.js
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Divider, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const developmentEnvironments = [
  {
    title: 'Dev Environment',
    description: 'Interactive development environment for data scientists',
    link: '#',
    icon: <DeveloperModeIcon />
  },
  {
    title: 'VS Code Server',
    description: 'Web-based IDE for collaborative development',
    link: '#',
    icon: <CodeIcon />
  },
  {
    title: 'Azure Sandbox',
    description: 'Sandbox environment for testing and development',
    link: '#',
    icon: <DeveloperModeIcon />
  },
];

const resources = [
  {
    title: 'Code Templates',
    description: 'Standard code templates and boilerplates',
    link: '#',
    icon: <CodeIcon />
  },
  {
    title: 'Best Practices',
    description: 'Coding standards and best practices documentation',
    link: '#',
    icon: <DeveloperModeIcon />
  },
];

const DevelopersWorkspace = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Developer Workspace
      </Typography>

      {/* Development Environments Section */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Development Environments
        </Typography>
        <Grid container spacing={2}>
          {developmentEnvironments.map((env) => (
            <Grid item xs={12} md={4} key={env.title}>
              <Card variant="outlined">
                <CardContent>
                  <Box display="flex" alignItems="center" mb={1}>
                    {env.icon}
                    <Typography variant="h6" ml={1}>{env.title}</Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {env.description}
                  </Typography>
                  <Box mt={2}>
                    <Button variant="outlined" href={env.link} size="small">
                      Open {env.title}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Resources Section */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Resources
        </Typography>
        <List>
          {resources.map((res) => (
            <ListItem key={res.title} divider button component="a" href={res.link}>
              <ListItemIcon>{res.icon}</ListItemIcon>
              <ListItemText primary={res.title} secondary={res.description} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default DevelopersWorkspace;
