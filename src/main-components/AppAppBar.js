import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Container,
  Divider,
  MenuItem,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ToggleColorMode from './ToggleColorMode';
import logo from '../assets/BP-logo-X.png';

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
  { title: 'Map', path: '/map' },
  { title: 'About', path: '/about' },
  // Add more items as needed
];

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  // Function to toggle the Drawer open state
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: { xs: '10px', sm: '20px' }, // Adjust top offset here
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            {/* Logo Image */}
            <Box
              component="img"
              src={logo}
              alt="The Brilliant Portal Logo"
              sx={{
                height: { xs: 30, sm: 40 }, // Responsive height
                width: 'auto',
                mr: 2, // Margin right for spacing
                transition: 'transform 0.2s, opacity 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  opacity: 0.8,
                },
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
            <ToggleColorMode />
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
                    sx={{ p: 0.5 }}
                  >
                    <CloseRoundedIcon fontSize="small" />
                  </IconButton>

                  {/* Toggle Color Mode */}
                  <ToggleColorMode
                    sx={{
                      p: 0.5,
                    }}
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
