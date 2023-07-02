import type { AppProps } from 'next/app';
import Layout from '@/shared/components/Layout';
import { ThemeProvider } from '@emotion/react';
import theme from '@/themes/Theme';
import '../shared/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
