import React from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import { BsGlobe } from 'react-icons/bs';
import { IoChevronUpOutline } from 'react-icons/io5';


const data = [
  { id: 1, text: 'Privacy' },
  { id: 2, text: 'Terms'},
  { id: 3, text: 'Sitemap' },
  { id: 4, text: 'Company Details' },
  { id: 5, text: 'Destinations' },

];

const Footer = () => {
  return (
    <Box
      sx={{
        color:"black",
        display: 'flex',
       width: '100%',
        borderTop: '1px solid #ddd',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
             display: 'flex',
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Stack sx={{ px: 2,
          py: 1,
        spacing: 2,
        direction: 'row'}}>
            <Paper>
              <Link href="#" style={{color:"black"}}> © 2022 Airbnb, Inc. </Link>
            </Paper>
            {data.map((link) => {
              return (
                <Paper key={link.id}>
                  <Link style={{color:"black"}}> {link.text}</Link>
                </Paper>
              );
            })}
          </Stack>

          <Stack>
            <Paper sx={{display: 'flex', justifyContent: 'center'}}>
              <Button>
                <Box sx={{ display: 'flex', justifyContent: 'center', mr: 1 }}>
                  <BsGlobe style={{fontWeight:"Bold",color:"black"}}size={24} />
                </Box>
                <span style={{fontWeight:"Bold",color:"black"}}>English (IN) </span>
              </Button>
    
              <Button> <span style={{fontWeight:"Bold",color:"black"}}> ₹ INR  </span> </Button>
              <Button>
               
                <span style={{fontWeight:"Bold",color:"black"}}>  Support & Resources </span>
                <Box sx={{ display: 'flex', justifyContent: 'center', ml: 1 }}>
                  <IoChevronUpOutline style={{fontWeight:"Bold",color:"black"}} size={24} />
                </Box>
              </Button>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
