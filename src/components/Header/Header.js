import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LogoAirbnb from './LogoAirbnb';
import SearchBar from './SearchBar';
import User from './User';
import SearchBar2 from './SearchBar2';

const Header = () => {
  return (
    <Box
      sx={{
         display: 'flex',
         flexDirection: 'row',
         minHeight: 60,
         borderBottom: '1px solid #ddd',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 80,
            px: 4,
          }}
        >
          <Box sx= {{ display: { xs: 'none', md: 'block' } }}>
            <LogoAirbnb />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <SearchBar />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <User />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <SearchBar2 />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
