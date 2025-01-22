// Standards.js
import React from 'react';
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Standards = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Standards & Best Practices
      </Typography>
      
      {/* Data Management Standards */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Data Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            Guidelines for ensuring data quality across the organization:
          </Typography>
          <ul>
            <li>Implement data validation checks</li>
            <li>Regular data quality assessments</li>
            <li>Data cleansing procedures</li>
          </ul>
          <Box mt={2}>
            <Button variant="outlined" color="primary" href="#">
              View Full Documentation
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* AI Development Standards */}
      <Accordion sx={{ mt: 2 }} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">AI Development</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            Standard process for AI/ML model development:
          </Typography>
          <ul>
            <li>Version control requirements</li>
            <li>Testing procedures</li>
            <li>Documentation standards</li>
          </ul>
          <Box mt={2}>
            <Button variant="outlined" color="primary" href="#">
              View Full Documentation
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default Standards;
