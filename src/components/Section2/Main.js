import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Cards from './Cards';

const Main = () => {
 const places = [
  {
    id: 1,
    locationImages: [
      {
        id: 1,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355339/candolim_cb8uki.webp',
      },
      {
        id: 2,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355811/217f237f-3eac-49f1-993b-f95a2ce1a386_tmwmpo.webp',
      },
      {
        id: 3,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355812/d3cf32b2-1870-470a-b3dd-5ab56cdeead9_ftln7t.webp',
      },
      
    ],
    location: 'Candolim, Goa',
    days: 'Oct 21-25',
    price: ' ₹ 5000 night',
    rating: 4.8,
  },
  {
    id: 2,
    locationImages: [
      {
        id: 1,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355811/61243e65-4b9f-400d-936a-f90788e87c3e_hw7ucm.webp',
      },
      {
        id: 2,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355811/8a9b97ef-c6a8-4428-818b-825b9dbf4fe4_sldvhg.webp',
      }
    ],
    location: 'Lonavala',
    days: 'OCt 22-55',
    price: ' ₹ 4000 night',
    rating: 4.1,
  },
  {
    id: 3,
    locationImages: [
      {
        id: 1,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355812/09076352-7fc8-41e6-993c-fb3ac40b88e2_xbnzfp.webp',
      },
      {
        id: 2,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355812/3a987ae3-3ea6-430c-9d27-640dda4c9083_oiu3wy.webp',
      }
    ],
    location: 'Nashik',
    days: 'Oct 22-25',
    price: ' ₹ 3999 night',
    rating: 4.2,
  },
  {
    id: 4,
    locationImages: [
      {
        id: 1,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355811/407eaa03-2ffe-4aed-a0d9-2e020eab6afb_p60jqv.webp',
      },
      {
        id: 2,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355812/3a987ae3-3ea6-430c-9d27-640dda4c9083_oiu3wy.webp',
      }
    ],
    location: 'Panchgani',
    days: 'Oct 22-24',
    price: ' ₹ 2666 night',
   
    rating: 4.5,
  },
  {
    id: 5,
    locationImages: [
      {
        id: 1,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355811/2122b1af-5ae2-40df-b832-9c35728b5cae_lbjwv1.webp',
      },
      {
        id: 2,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355811/407eaa03-2ffe-4aed-a0d9-2e020eab6afb_p60jqv.webp',
      }
    ],
    location: 'Thane ',
    days: 'Oct 25-26',
    price: ' ₹ 3955 night',
    rating: 4.2,
  },
  {
    id: 6,
    locationImages: [
      {
        id: 1,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355812/ca2bee1a-ab7c-4f87-ba08-07bbb5f9c496_jdjpme.webp',
      },
      {
        id: 2,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355339/candolim_cb8uki.webp',
      }
    ],
    location: 'Pune',
    days: 'Oct 25-26',
    price: ' ₹ 1500 night',
    rating: 4.3,
  },
  {
    id: 7,
    locationImages: [
      {
        id: 1,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355812/candolim2_jekhna.webp',
      },
      {
        id: 2,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355339/candolim_cb8uki.webp',
      }
    ],
    location: 'Navi Mumbai',
    days: 'Oct 24-25',
    price: ' ₹ 2999 night',
    rating: 4.1,
  },
  {
    id: 8,
    locationImages: [
      {
        id: 1,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355811/9f1a76c8-c612-4b9f-8b64-6e7f240b2f27_kcs8tg.webp',
      },
      {
        id: 2,
        url: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1666355811/2122b1af-5ae2-40df-b832-9c35728b5cae_lbjwv1.webp',
      }
      
    ],
    location: 'Lower Parel ,Mumbai',
    days: 'Oct 23-26',
    price: ' ₹ 5000 night',
    rating: 4.6,
  }
];

 
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {places.map((place) => {
          return (
            <Grid key={place.id} item xs={12} sm={4} md={4} lg={3}>
              <Cards data={place} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Main;
