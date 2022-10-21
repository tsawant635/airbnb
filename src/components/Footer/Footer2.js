import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FaSearch, FaRegHeart, FaRegUserCircle } from 'react-icons/fa';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const data = [
  { id: 1, text: 'Explore', icon: <FaSearch size={18} color={"red"} /> },
  { id: 2, text: 'Wishlists', icon: <FaRegHeart size={18} /> },
  { id: 3, text: 'Log in', icon: <FaRegUserCircle size={18} /> },
];

const Footer2 = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
      <Stack>
        {data.map((item) => {
          return (
            <Button key={item.id}>
              <Stack
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                direction="column"
                spacing={1}
              >
                {item.icon}
                <Typography> {item.text}</Typography>
              </Stack>
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Footer2;
