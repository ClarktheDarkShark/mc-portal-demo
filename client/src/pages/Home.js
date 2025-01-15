// client/src/pages/Home.js

import React from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia 
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ArrowForward } from '@mui/icons-material';

// Custom Styles
const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: 'url(/images/hero-background.jpg)', // Add a background image in public/images/
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    padding: theme.spacing(8, 0),
    textAlign: 'center',
  },
  features: {
    padding: theme.spacing(4, 0),
  },
  card: {
    maxWidth: 345,
    margin: 'auto',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  cardMedia: {
    height: 140,
  },
}));

// Theme Customization (Optional)
const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f', // USMC Red
    },
    secondary: {
      main: '#424242',
    },
  },
  typography: {
    h2: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
  },
});

function Home() {
  const classes = useStyles();

  const features = [
    {
      title: 'Data Repository',
      description: 'Access a comprehensive collection of USMC data and AI resources.',
      image: '/images/data-repo.jpg', // Add images in public/images/
    },
    {
      title: 'Policy Documents',
      description: 'Stay updated with the latest data and AI policies.',
      image: '/images/policy-docs.jpg',
    },
    {
      title: 'AI Assistant',
      description: 'Interact with our ChatGPT-like assistant for support and inquiries.',
      image: '/images/ai-assistant.jpg',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* Hero Section */}
        <Box className={classes.hero}>
          <Container maxWidth="md">
            <Typography variant="h2" gutterBottom>
              Welcome to the USMC Data & AI Portal
            </Typography>
            <Typography variant="h5" paragraph>
              Your centralized hub for data, AI policies, and innovative solutions to empower the Marine Corps.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              endIcon={<ArrowForward />}
              href="/policy-docs" // Link to Policy Documents or desired route
            >
              Get Started
            </Button>
          </Container>
        </Box>

        {/* Features Section */}
        <Box className={classes.features}>
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
              Our Features
            </Typography>
            <Typography variant="subtitle1" align="center" paragraph>
              Explore the key features that make our portal indispensable for data and AI initiatives.
            </Typography>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={feature.image}
                      title={feature.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
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
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
