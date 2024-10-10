import React from 'react';
import {Container } from '@mui/material';
import MainContent from './components/MainContent';
import Latest from './components/Latest';
import Footer from './components/Footer';
// Remove any ThemeProvider imports and usage

export default function Blog() {
  return (
    <>
      {/* Theme is managed globally; no need for ThemeProvider */}
      {/* Optionally, you can include CssBaseline here if not already included globally */}
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        {/* You can include a toggle button here if desired */}
        {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <ToggleColorMode />
        </Box> */}
        <MainContent />
        <Latest />
      </Container>
      <Footer />
    </>
  );
}
