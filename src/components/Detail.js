import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/gym.png';
import TargetImage from '../assets/icons/gym.png';
import EquipmentImage from '../assets/icons/gym.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography 
            sx={{ fontSize: { lg: '64px', xs: '30px' } }} 
            fontWeight={700} 
            textTransform="capitalize">
                {name}
        </Typography>
        <Typography 
            sx={{ fontSize: { lg: '24px', xs: '18px' } }} 
            color="#4F4C4C">
            Exercise keeps bioraptors away (kinda).{' '}
                Leverage the <span style={{ textTransform: 'capitalize' }}>{name}</span> to target your {target} and let those pesky bioraptors know ... you work oooooutt.{' '}
                   
        </Typography>
        {extraDetail?.map((item) => (
          <Stack 
            key={item.name} 
            direction="row" 
            gap="24px" 
            alignItems="center">
                <Button sx={{ 
                    background: '#dcdce0', 
                    borderRadius: '50%', 
                    width: '100px', 
                    height: '100px' 
                }}>
                <img 
                    src={item.icon} 
                    alt={bodyPart} 
                    style={{ width: '50px', height: '50px', borderRadius: '6px' }} 
                    />
                </Button>
            <Typography 
                textTransform="capitalize" 
                sx={{ fontSize: { lg: '30px', xs: '20px' } 
                }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;