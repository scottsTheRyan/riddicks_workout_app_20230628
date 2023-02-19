import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import Logo from '../assets/images/Logo.png'


const HeroBanner = () => {
 return (
    <Box sx={{
        mt: { lg: '21px', xs: '70px' },
        ml: { sm: '50-px' }
    }} position= "relative" p="20px">
                <Typography 
            fontWeight={600}
            sx={{ fontSize: { lg: '44px', xs: '40px', borderBottom: '5px solid #000000, p=20px'}}}>
                Riddick's Gym Workout
        </Typography>
        <Typography 
            fontWeight={600}
            lineheight="10px"
            mb={1.75}
            sx={{ fontSize: { lg: '25px', xs: '20px', }}}>
              
        </Typography>
        <Stack>
      <a href="#exercises" 
        style={{ 
            marginTop: '4px', 
            textDecoration: 'none', 
            width: '200px', 
            textAlign: 'center', 
            background: '#000000', 
            padding: '11px', 
            fontSize: '22px', 
            textTransform: 'none', 
            color: 'white', 
            borderRadius: '12px' }}
            >
                Get fit to SURVIVE
        </a>
    </Stack>
        <Typography
            fontWeight={600}
            color= "#000000"
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none'}
            }}
            fontSize='175px'
            >
                Pitch <br /> Black
        </Typography>
        <img 
            src={Logo} 
            alt="logo" 
            className="hero-banner-img" 
            style={{ 
                borderLeft: '4px solid #000000',
                borderBottom: '2px solid #000000',
                borderRadius: '2%',
                marginTop: '1px',
                width: '875px', 
                height: '600px',                          
        }} />
    </Box>
  )
}

export default HeroBanner