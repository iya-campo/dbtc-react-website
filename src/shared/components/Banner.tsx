import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface IBannerProps {
  image?: string;
}

function Banner({ image }: IBannerProps) {
  return (
    <Box height='25vh' width='100%' sx={{ backgroundColor: '#ddd' }} overflow='hidden'>
      {image && <Image alt='banner image' src={`/images/banners/${image}`} height={0} width={0} style={{ height: 'initial', width: '100%' }}></Image>}
    </Box>
  );
}

export default Banner;
