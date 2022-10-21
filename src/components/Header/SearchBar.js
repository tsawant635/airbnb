import React from 'react';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { IoSearchCircleSharp } from 'react-icons/io5';


const data = [
  { id: 1, text: 'Anywhere' },
  { id: 2, text: 'Any week' },
  { id: 3, text: 'Add guest', withIcon: true },
];

const SearchBar = () => {
  return (
    <Paper
      sx={{
        borderRadius: 20,
        ml: 25,
      }}
      elevation={3}
    >
      <Stack
        sx={{
          borderRadius: 20,
          pl: 2,
        }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {data.map((choice) => {
          return (
            <Button onClick={()=>alert("hi")} key={choice.id}>
              <Typography
                sx={{
                  color: "black",
                  fontWeight: 'bold',
                }}
              >
                {choice.text}
              </Typography>
              {choice.withIcon && (
                <Box
                  sx={{
                    ml: 1,
                    mt: 1,
                    mr: 1,
                  }}
                >
                  <IoSearchCircleSharp color={"red"} size={32} />
                </Box>
              )}
            </Button>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default SearchBar;
