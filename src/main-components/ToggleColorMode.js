// src/components/ToggleColorMode.js
import React from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ColorModeContext from '../contexts/ColorModeContext';

function ToggleColorMode(props) {
  const theme = useTheme();
  const { toggleColorMode } = React.useContext(ColorModeContext); // Consume context

  return (
    <IconButton
      onClick={toggleColorMode}
      color="inherit"
      size="small"
      aria-label="Toggle theme"
      sx={{
        color: theme.palette.mode === 'light' ? '#000000' : 'inherit', // Golden in light mode
      }}
      {...props}
    >
      {theme.palette.mode === 'dark' ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )}
    </IconButton>
  );
}

export default ToggleColorMode;
