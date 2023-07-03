import React, { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

interface ILayoutProps {
  children: ReactNode;
  isMobile: boolean;
}

function Layout({ children, isMobile }: ILayoutProps) {
  return (
    <Box display='flex' flexDirection='column' justifyContent='space-between' height='100%' position='relative'>
      <Navbar isMobile={isMobile} />
      <Box display='flex' flexDirection='column' flexGrow={1} pt={!isMobile ? 19 : 12} pb={8}>
        {children}
      </Box>
      <Footer isMobile={isMobile} />
    </Box>
  );
}

export default Layout;
