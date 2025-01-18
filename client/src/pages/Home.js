// client/src/pages/Home.js

import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Fab,
  Drawer,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

function Home() {
  const [openChat, setOpenChat] = useState(false);

  const features = [
    {
      title: 'Data',
      description:
        'Access a comprehensive collection of USMC data resources.',
      image: '/images/data-repo.jpg',
      link: '/data-repository',
    },
    {
      title: 'AI',
      description:
        'Access a comprehensive collection of USMC AI resources.',
      image: '/images/ai-repo.jpg',
      link: '/ai-repository',
    },
    {
      title: 'Enterprise AI Registry',
      description:
        'Submit and browse USMC AI Use Cases.',
      image: '/images/ai-registry.png', // Ensure this image exists
      link: '/ai-registry',
    },
    {
      title: 'IMDF',
      description:
        'Learn more about the Integrated Mission Data Fabric (IMDF) and how to participate.',
      image: '/images/imdf.jpg',
      link: '/imdf',
    },
    {
      title: 'Policy Documents',
      description: 'Stay updated with the latest data and AI policies.',
      image: '/images/policy-docs.jpg',
      link: '/policy-docs',
    },
    {
      title: 'API Store',
      description:
        'Discover and access a range of APIs for your development needs.',
      image: '/images/api-icon.png', // Ensure this image exists
      link: '/apistore',
    },
  ];

  const toggleChat = () => {
    setOpenChat(!openChat);
  };

  return (
    <Box>
      {/* Hero Section with Dark Overlay */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url(/images/home-portal.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          py: 8,
          textAlign: 'center',
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
        />
        <Container
          maxWidth="md"
          sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#fff',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
              mb: 2,
            }}
          >
            USMC Data & AI Portal
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{
              fontWeight: 500,
              color: '#fff',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
              lineHeight: 1.4,
            }}
          >
            Your centralized hub for data & AI policies, catalogues, and innovative solutions to empower the Marine Corps.
          </Typography>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 4, textAlign: 'center', backgroundColor: '#f9f9f9' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Data and AI Resources
          </Typography>
          <Typography variant="subtitle1" align="center" paragraph>
            Resources that support your data and AI needs.
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Link to={feature.link} style={{ textDecoration: 'none' }}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      margin: 'auto',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={feature.image}
                      alt={feature.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Floating Action Button for Chat with Custom Image */}
      <Tooltip title="Talk to our AI Chat Assistant!" arrow>
        <Fab
          color="secondary"
          aria-label="ai-chat"
          onClick={toggleChat}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 16,
            zIndex: 1300,
            width: 90,
            height: 90,
            background: 'transparent', // Remove background
            boxShadow: 'none', // Remove box shadow
            '&:hover': {
              background: 'transparent', // Ensure no background on hover
            },
            p: 0, // Remove any padding
          }}
        >
          {/* Use the custom image as the chat icon */}
          <img
            src="/images/chat-icon.png"
            alt="AI Chat"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain', // Ensure the image fits within the Fab
              borderRadius: '50%', // Ensure the image has rounded corners to match the Fab shape
            }}
          />
        </Fab>
      </Tooltip>



      {/* Chat Drawer */}
      <Drawer
        anchor="right"
        open={openChat}
        onClose={toggleChat}
        PaperProps={{
          sx: { width: { xs: '100%', sm: '500px' }, p: 2 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant="h6">Chat Assistant</Typography>
          <IconButton onClick={toggleChat}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box>
          <iframe
            src="http://mc-chat-app.eastus.azurecontainer.io:3000"
            title="Chat Assistant"
            style={{
              width: '100%',
              height: 'calc(100vh - 150px)',
              border: 'none',
            }}
          ></iframe>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Home;
