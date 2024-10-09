import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ToggleColorMode from './ToggleColorMode';
import logo from '../assets/BP-logo-X.png'; // Adjust the path as needed

// Styled Toolbar with custom styles
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

// Define your navigation items
const navItems = [
  { title: 'Home', path: '/' },
  { title: 'Blog', path: '/blog' },
  { title: 'Map', path: '/map' },
  { title: 'Animation', path: '/animation' },
  // Add more items as needed
];

export default function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  // Function to toggle the Drawer open state
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            {/* Replace <Sitemark /> with the Logo Image */}
            <Box
              component="img"
              src={logo}
              alt="The Brilliant Portal Logo"
              sx={{
                height: 40, // Adjust height as needed
                width: 'auto',
                mr: 2, // Margin right for spacing
              }}
            />
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  variant="text"
                  color="info"
                  size="small"
                  component={Link} // Use Link for routing
                  to={item.path}
                  sx={{ textTransform: 'none' }} // Optional: Remove uppercase
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Desktop Actions (Color Mode Toggle, Sign In, Sign Up) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            <Button
              color="primary"
              variant="text"
              size="small"
              component={Link}
              to="/signin" // Ensure you have this route
              sx={{ textTransform: 'none' }}
            >
              Sign in
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="small"
              component={Link}
              to="/signup" // Ensure you have this route
              sx={{ textTransform: 'none' }}
            >
              Sign up
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                {/* Drawer Header with Close Button and ToggleColorMode */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Close Button */}
                  <IconButton
                    onClick={toggleDrawer(false)}
                    aria-label="Close menu"
                    size="small"
                  >
                    <CloseRoundedIcon/>
                  </IconButton>

                  {/* Toggle Color Mode */}
                  <ToggleColorMode
                    mode={mode}
                    toggleColorMode={toggleColorMode}
                  />
                </Box>
                <Divider sx={{ my: 3 }} />

                {/* Mobile Navigation Links */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {navItems.map((item) => (
                    <MenuItem
                      key={item.title}
                      component={Link}
                      to={item.path}
                      onClick={toggleDrawer(false)}
                      sx={{ textTransform: 'none' }}
                    >
                      {item.title}
                    </MenuItem>
                  ))}

                  {/* Sign Up and Sign In Buttons */}
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    component={Link}
                    to="/signup" // Ensure you have this route
                    onClick={toggleDrawer(false)}
                    sx={{ textTransform: 'none' }}
                  >
                    Sign up
                  </Button>
                  <Button
                    color="primary"
                    variant="outlined"
                    fullWidth
                    component={Link}
                    to="/signin" // Ensure you have this route
                    onClick={toggleDrawer(false)}
                    sx={{ textTransform: 'none' }}
                  >
                    Sign in
                  </Button>
                </Box>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
