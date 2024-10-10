import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppAppBar from './main-components/AppAppBar'; // Import your custom AppAppBar
import Blog from './pages/blog/Blog';
import Map from './pages/Map';
import About from './pages/About';
import SignIn from './pages/sign-in/SignIn';
//import SignUp from './pages/SignUp';
import ColorModeContext from './contexts/ColorModeContext';

function App() {
  // Initialize mode from localStorage or default to 'light'
  const [mode, setMode] = React.useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode ? savedMode : 'light';
  });

  // Function to toggle between light and dark modes
  const toggleColorMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', newMode); // Persist mode
      return newMode;
    });
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
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                transition: 'all 0.3s ease', // Smooth theme transition
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        {/* Apply CssBaseline for consistent styling */}
        <CssBaseline />
        <Router>
          {/* Integrate the custom AppAppBar without passing props */}
          <AppAppBar />
          {/* Main Content Area */}
          <Container sx={{ mt: 12 }}>
            <Routes>
              <Route path="/" element={<Blog />} />
              <Route path="/map" element={<Map />} />
              <Route path="/about" element={<About />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

//            <Route path="/signup" element={<SignUp />} />
//            <Route path="*" element={<div>404 - Page Not Found</div>} />