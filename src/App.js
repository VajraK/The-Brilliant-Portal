import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import Blog from './pages/blog/Blog';
import Map from './pages/Map';
import Animation from './pages/Animation';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ea213a',
    },
    secondary: {
      main: '#000000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              The Brilliant Portal
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/blog">Blog</Button>
            <Button color="inherit" component={Link} to="/map">Map</Button>
          </Toolbar>
        </AppBar>
        <Container sx={{ mt: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/map" element={<Map />} />
            <Route path="/animation" element={<Animation />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
