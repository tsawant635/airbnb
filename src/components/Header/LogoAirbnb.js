import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FaAirbnb } from 'react-icons/fa';

const LogoAirbnb = () => {
  return (
    <Box sx={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ml:5,
    }}>
      <FaAirbnb size={40} color={"red"}  />
      <Typography
        sx={{
          ml: 1,
          color:"red",
          fontSize: '30px',
          fontWeight: 'bold',
          
        }}
        component="h3"
      >
        airbnb
      </Typography>
    </Box>
  );
};

export default LogoAirbnb;
