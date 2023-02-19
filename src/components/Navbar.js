import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';


import gym from '../assets/icons/gym.png';


const Navbar = () => {
  return (
    <Stack 
      direction="row"
      justifyContent="space-around" 
      sx={{ 
        gap: { sm: '122px', xs: '40px'}, 
        mt: { sm: '32px', xs: '20px'}, 
        justifyContent: 'none'}} 
      px="20px">

    <Link to="/">
      <img src={gym} 
        alt="bioraptors" 
        style={{ 
          width: '85px', 
          height: '70px', 
          margin: '0 16px',
          borderRadius: "6px" 
        }} 
      />
    </Link>
     
    <Stack 
      direction="row"
      gap="40px"
      fontSize="24px"
      alignItems="flex-end">
      <Link to="/" 
        style={{
          textDecoration: 'none', 
          color: "#000000", 
          borderBottom: '3px solid #000000'
        }}>Home</Link>
          <a href="#exercises" style = {{
            textDecoration: 'none', 
            color: '#000000',
            borderBottom: '3px solid #000000'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar