import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppAppBar from './main-components/AppAppBar'; // Import your custom AppAppBar
import Home from './pages/Home';
import Blog from './pages/blog/Blog';
import Map from './pages/Map';
import Animation from './pages/Animation';
//import SignIn from './pages/SignIn';
//import SignUp from './pages/SignUp';

function App() {
  // State to manage the color mode
  const [mode, setMode] = React.useState('light');

  // Function to toggle between light and dark modes
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Create a theme instance based on the current mode
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode, // Set the palette mode
          primary: {
            main: '#ea213a',
          },
          secondary: {
            main: '#000000',
          },
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* Integrate the custom AppAppBar and pass necessary props */}
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

        {/* Main Content Area */}
        <Container sx={{ mt: 12 }}>
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

//            <Route path="/signin" element={<SignIn />} />
//            <Route path="/signup" element={<SignUp />} />