import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.ico';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { 
      borderTop: '3px solid #000000',
      borderBottom: '3px solid #000000', 
      background: '#dcdce0', 
      borderRadius: '8px', 
      width: '200px', 
      height: '282px', 
      cursor: 'pointer', 
      gap: '47px',
      margin:'10px'} : { 
        background: '#dcdce0', 
        borderRadius: '20px',  
        width: '200px', 
        height: '282px', 
        cursor: 'pointer', 
        gap: '47px',
        margin: '10px' 
      }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1550, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: 'auto', height: '100%', borderRadius: "6px" }} />
    <Typography 
      fontSize="24px" 
      fontWeight="bold" 
      fontFamily="Alegreya" 
      color="#3A1212" 
      textTransform="capitalize"
    > 
      {item}
      </Typography>
  </Stack>
);

export default BodyPart;