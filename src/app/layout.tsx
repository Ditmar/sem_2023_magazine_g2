// pages/_app.tsx
import { AppProps } from 'next/app';

import './globals.css';
import Layout from '../components/MainNavigation';
import Footer from '../components/Footer';
import Container from '../components/Container';

function MyApp({ children }: AppProps & { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <meta
        name='format-detection'
        content='telephone=no, date=no, email=no, address=no'
      />
      <body>
        {' '}
        <Layout />
        <Container>{children}</Container>
        <Footer />
      </body>{' '}
    </html>
  );
}

export default MyApp;
