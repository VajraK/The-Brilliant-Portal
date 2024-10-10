import React from 'react';
import { Typography, Container } from '@mui/material';

function About() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        About The Brilliant Portal
      </Typography>
      <Typography variant="body1">
        Explore our blog, interactive map, and immersive 3D scenes.
      </Typography>
    </Container>
  );
}

export default About;
