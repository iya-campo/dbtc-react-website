import type { AppProps } from 'next/app';
import Layout from '@/shared/components/Layout';
import { ThemeProvider } from '@emotion/react';
import theme from '@/themes/Theme';
import '../shared/styles/globals.css';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [screen, setScreen] = useState<string>('desktop');
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleResize = () => {
    if (window.innerWidth > 767) {
      setScreen('desktop');
      setIsMobile(false);
    } else if (window.innerWidth <= 767 && window.innerWidth >= 470) {
      setScreen('tablet');
      setIsMobile(true);
    } else if (window.innerWidth < 470) {
      setScreen('mobile');
      setIsMobile(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout isMobile={isMobile}>
        <Component screen={screen} isMobile={isMobile} {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
