import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import gym from '../assets/icons/gym.png'

const Footer = () => {
  return (
    <Box 
      mt="80px" 
      bgcolor="#dcdce0"
      >
      <Stack 
        gap="40px" 
        alignItems="center"
        px="40px"
        pt="24px"
        >
          <img 
            src={gym}
            alt="bioraptor"
            width="100px"
            height="80px"
            borderRadius="6px"
            />
            <Typography 
              variant="h5"
              pb="40px"
              mt="2px">
              Survive the Night Live Inc.
            </Typography>
        </Stack>


    </Box>
  )
}

export default Footer

