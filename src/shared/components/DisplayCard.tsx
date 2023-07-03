import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IDisplayCardProps {
  name: string;
  image: string;
  desc?: string;
  link?: string;
}

function DisplayCard({ name, image, link }: IDisplayCardProps) {
  return (
    <Box display='flex' flexDirection='column' justifyContent='space-between' alignItems='center' width={250} height={210}>
      <Typography component='p' variant='body1' textAlign='center' textTransform='uppercase' fontWeight='bold'>
        {name}
      </Typography>
      <Image alt={`${name} program image`} src={`/images/programs/${image}`} height={100} width={100}></Image>
      <Button variant='contained'>
        <Link href={`programs/${link}`}>Learn More</Link>
      </Button>
    </Box>
  );
}

export default DisplayCard;
