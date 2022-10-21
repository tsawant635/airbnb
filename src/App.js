import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import Section from './components/Section1/Section';
import Container from '@mui/material/Container';
import Cards from './components/Section2/Main';
import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Footer2 from './components/Footer/Footer2';



function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box>
          <Header />
          <Section />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll',
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <Cards />
          </Container>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Footer2 />
        </Box>
        <Box sx={{display: { xs: 'none', md: 'block' }}}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
