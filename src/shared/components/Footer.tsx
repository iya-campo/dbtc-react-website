import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';

interface IFooterProps {
  isMobile: boolean;
}

function Footer({ isMobile }: IFooterProps) {
  const footerLinks: string[] = ['Terms of Use', 'Privacy Statement', 'dbmanda.one-bosco.org'];
  return (
    <Box bgcolor='#1a1a1a'>
      <Container sx={{ py: 1 }}>
        <Box display='flex' flexDirection={!isMobile ? 'row' : 'column'} justifyContent='center' rowGap={2} columnGap={5}>
          {footerLinks.map((footerLink: string, index: number) => (
            <Typography component='p' key={index} color='#fff' textAlign='center'>
              <Link href={`/`}>{footerLink}</Link>
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
