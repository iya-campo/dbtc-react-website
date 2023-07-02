import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Box, Container, InputAdornment, TextField, Typography } from '@/shared/lib/mui';
import { capitalize } from '@/utils/Utils';
import Image from 'next/image';
import { Search, Menu } from '@mui/icons-material/';

function Navbar() {
  const navLinks: string[] = ['home', 'admission', 'programs', 'news', 'gallery', 'about'];

  const [isOpen, setIsOpen] = useState<boolean>(false);
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
    <Box position='fixed' width='100%' zIndex='1'>
      <Box sx={{ background: 'linear-gradient(#3e5693, #1D2E58)', py: 2 }}>
        <Container>
          <Box display='flex' justifyContent='space-between' alignItems='center' columnGap={4}>
            <Box display='flex' alignItems='center' columnGap={4}>
              <Image alt='dbtc logo' src='/images/logo.png' height={80} width={80} style={{ cursor: 'pointer' }}></Image>
              <Typography component='h5' variant='h5' fontWeight='bold' color='#fff'>
                Don Bosco Technical College
              </Typography>
            </Box>
            {!isMobile ? (
              <TextField
                variant='outlined'
                size='small'
                placeholder='Search'
                sx={{
                  fieldset: { border: '1px solid #fff !important' },
                  input: { color: '#fff', fontWeight: 300 },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Search htmlColor='#fff' />
                    </InputAdornment>
                  ),
                }}
              />
            ) : (
              <Menu fontSize='large' htmlColor='#fff' onClick={() => setIsOpen((prevState: boolean) => !prevState)} />
            )}
          </Box>
        </Container>
      </Box>
      {!isMobile && (
        <Box sx={{ backgroundColor: '#1a1a1a', py: 1 }}>
          <Container>
            <Box display='flex' justifyContent='center' columnGap={5}>
              {navLinks.map((navLink: string, index: number) => (
                <Typography component='p' key={index} color='#fff'>
                  <Link href={`/${navLink === 'home' ? '' : navLink}`}>{capitalize(navLink)}</Link>
                </Typography>
              ))}
            </Box>
          </Container>
        </Box>
      )}
      {isMobile && isOpen && (
        <Box sx={{ backgroundColor: '#1a1a1a', py: 1, width: '100vw' }}>
          <Container>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' rowGap={2}>
              <TextField
                variant='outlined'
                size='small'
                placeholder='Search'
                fullWidth
                sx={{
                  fieldset: { border: '1px solid #fff !important' },
                  input: { color: '#fff', fontWeight: 300 },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Search htmlColor='#fff' />
                    </InputAdornment>
                  ),
                }}
              />
              {navLinks.map((navLink: string, index: number) => (
                <Typography component='p' key={index} color='#fff'>
                  <Link href={`/${navLink === 'home' ? '' : navLink}`} onClick={() => setIsOpen((prevState: boolean) => !prevState)}>
                    {capitalize(navLink)}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Container>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
