import React, { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  });

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <Box display='flex' flexDirection='column' justifyContent='space-between' height='100%' position='relative'>
      <Navbar />
      <Box display='flex' flexDirection='column' flexGrow={1} pt={!isMobile ? 19 : 12} pb={8}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
