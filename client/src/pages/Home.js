// client/src/pages/Home.js

import React, { useState, useEffect } from 'react';
import Tutorial from '../components/Tutorial';
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
  const [runTutorial, setRunTutorial] = useState(false);

  useEffect(() => {
    // Check if tutorial has been completed
    const tutorialComplete = localStorage.getItem('tutorialComplete');
    if (!tutorialComplete) {
      setRunTutorial(true);
    }
  }, []);

  const features = [
    {
      title: 'Data Catalogue',
      description:
        'Central repository indexing all datasets with metadata, sources, schema, ownership, and lineage information.',
      image: process.env.PUBLIC_URL + '/images/data-repo.jpg',
      link: '/data-repository',
    },
    {
      title: 'AI Operations',
      description:
        'Register, track, and deploy AI/ML models with versioning, metrics, and integration workflows.',
      image: process.env.PUBLIC_URL + '/images/ai-repo.jpg',
      link: '/ai-repository',
    },
    {
      title: 'AI Capabilities',
      description:
        'Directory of AI use cases, tools, and enterprise capabilities with success metrics.',
      image: process.env.PUBLIC_URL + '/images/ai-registry.png',
      link: '/ai-registry',
    },
    {
      title: 'Governance Dashboard',
      description:
        'Centralized oversight of data governance, security, compliance, and access controls.',
      image: process.env.PUBLIC_URL + '/images/governance.png',
      link: '/governance',
    },
    {
      title: 'IMDF Integration',
      description:
        'Integrated Mission Data Fabric (IMDF) for seamless data ingestion and integration across sources.',
      image: process.env.PUBLIC_URL + '/images/imdf.jpg',
      link: '/imdf',
    },
    {
      title: 'Developer Workspace',
      description:
        'Unified environment for coding, experiments, and collaboration with shared notebooks and best practices.',
      image: process.env.PUBLIC_URL + '/images/developer-workspace.png',
      link: '/developer-workspace',
    },
    {
      title: 'Self-Service Analytics',
      description:
        'Tools for independent data exploration, visualization, and insight generation.',
      image: process.env.PUBLIC_URL + '/images/analytics.png',
      link: '/analytics',
    },
    {
      title: 'Standards & Best Practices',
      description:
        'Enterprise-wide frameworks, templates, and guidance for data and AI practices.',
      image: process.env.PUBLIC_URL + '/images/standards.png',
      link: '/standards',
    },
  ];

  const toggleChat = () => {
    setOpenChat(!openChat);
  };

  return (
    <Box>
      <Tutorial run={runTutorial} setRun={setRunTutorial} />

      {/* Hero Section with Subtle Overlay */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/home-portal2-copy.png)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          color: '#fff',
          py: 8,
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Subtle Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgb(0, 0, 0)',
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
            Your centralized hub for data & AI policies, catalogues, and innovative
            solutions to empower the Marine Corps.
          </Typography>
        </Container>
      </Box>

      {/* Announcements Section */}
      <Box sx={{ py: 4, px: 2, backgroundColor: '#f1f1f1' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Announcements
          </Typography>
          <Grid container spacing={2}>
            {/* Announcement Card */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: 2,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={`${process.env.PUBLIC_URL}/images/alfred.png`}
                  alt="Demo Alfred"
                  sx={{
                    width: '100%',
                    // Use a 16:9 ratio to make the card image rectangular
                    aspectRatio: '16/9',
                    objectFit: 'cover',
                  }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Demo Alfred
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Experience Alfred, our latest AI assistant, now available for
                    demonstration.
                  </Typography>
                </CardContent>
                <Fab
                  variant="extended"
                  color="primary"
                  onClick={() =>
                    (window.location.href =
                      'https://alfred-demo-311fd5c8f0bf.herokuapp.com')
                  }
                  sx={{
                    mt: 2,
                    px: 3,
                    backgroundColor: '#1976d2',
                    '&:hover': {
                      backgroundColor: '#1565c0',
                    },
                  }}
                >
                  Explore Alfred
                </Fab>
              </Card>
            </Grid>
            {/* Placeholder for future announcements */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 2,
                  textAlign: 'center',
                  border: '1px dashed gray',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  New announcements coming soon!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Demo Alfred Button (Bottom Left) */}
      <Fab
        variant="extended"
        onClick={() =>
          (window.location.href =
            'https://alfred-demo-311fd5c8f0bf.herokuapp.com')
        }
        sx={{
          position: 'fixed',
          bottom: 20,
          left: 20,
          zIndex: 1300,
          px: 2,
          backgroundColor: '#1976d2',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/alfred.png`}
          alt="Demo Alfred"
          style={{
            width: '30px',
            height: '30px',
            marginRight: '8px',
          }}
        />
        Demo Alfred
      </Fab>

      {/* Features Section */}
      <Box
        className="feature-grid"
        sx={{ py: 4, textAlign: 'center', backgroundColor: '#f9f9f9' }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Data and AI Resources
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            paragraph
            sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}
          >
            Comprehensive tools and resources to support your data and AI
            initiatives, ensuring governance, collaboration, and standardization
            across the enterprise.
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Link to={feature.link} style={{ textDecoration: 'none' }}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={feature.image}
                      alt={feature.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="h3">
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
          className="chat-assistant"
          color="secondary"
          aria-label="ai-chat"
          onClick={toggleChat}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 16,
            zIndex: 1300,
            width: 70,
            height: 70,
            background: 'transparent',
            boxShadow: 'none',
            '&:hover': { background: 'transparent' },
            p: 0,
          }}
        >
          <img
            src={process.env.PUBLIC_URL + '/images/chat-icon.png'}
            alt="AI Chat"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '50%',
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
            src="https://mc-ai-agent-4181d506847b.herokuapp.com"
            title="Chat Assistant"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
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
