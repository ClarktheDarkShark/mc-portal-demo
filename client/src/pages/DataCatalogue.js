// client/src/pages/DataCatalogue.js

import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';

function DataCatalogue() {
  const [dataCatalogue, setDataCatalogue] = useState(null);

  useEffect(() => {
    fetch('/api/repository/data')
      .then((res) => res.json())
      .then((data) => {
        setDataCatalogue(data);
      })
      .catch((err) => console.error('Error fetching Data Catalogue:', err));
  }, []);

  if (!dataCatalogue) {
    return (
      <Typography variant="h6" sx={{ p: 2 }}>
        Loading Data Catalogue...
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h2" gutterBottom>
        Data Catalogue
      </Typography>
      <Grid container spacing={2}>
        {dataCatalogue.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              {/* If you have an image field, you can uncomment the CardMedia component.
                  Otherwise, you can remove it or use a placeholder image.
              */}
              {/* <CardMedia
                component="img"
                height="140"
                image={item.image || '/images/data-repo-placeholder.jpg'}
                alt={item.name}
              /> */}
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    [Link]
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DataCatalogue;
