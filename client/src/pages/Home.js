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
} from '@mui/material';
import { Link } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

function Home() {
  const [openChat, setOpenChat] = useState(false);

  const features = [
    {
      title: 'Data Repository',
      description:
        'Access a comprehensive collection of USMC data and AI resources.',
      image: '/images/data-repo.jpg',
      link: '/data-ai-repository', // Link for Data Repository
    },
    {
      title: 'Policy Documents',
      description: 'Stay updated with the latest data and AI policies.',
      image: '/images/policy-docs.jpg',
      link: '/policy-docs', // Link for Policy Documents
    },
    {
      title: 'AI Assistant',
      description:
        'Interact with our ChatGPT-like assistant for support and inquiries.',
      image: '/images/ai-assistant.jpg',
      link: '/chat', // Link for AI Assistant
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
          backgroundImage: 'url(/images/hero-background.jpg)',
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
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Welcome to the USMC Data & AI Portal
          </Typography>
          <Typography variant="h5" paragraph sx={{ fontWeight: 500 }}>
            Your centralized hub for data, AI policies, and innovative solutions
            to empower the Marine Corps.
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
            Our Features
          </Typography>
          <Typography variant="subtitle1" align="center" paragraph>
            Explore the key features that make our portal indispensable for data
            and AI initiatives.
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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

      {/* Floating Action Button for Chat */}
      <Fab
        color="primary"
        aria-label="chat"
        onClick={toggleChat}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1300, // Ensure it appears above other content
        }}
      >
        <ChatIcon />
      </Fab>

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
            src="https://mc-chat-app-3dc46f63fc94.herokuapp.com"
            title="Chat Assistant"
            style={{
              width: '100%',
              height: 'calc(100vh - 150px)', // Adjust height as needed
              border: 'none',
            }}
          ></iframe>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Home;
