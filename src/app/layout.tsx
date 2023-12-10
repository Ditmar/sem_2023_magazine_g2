import { AppProps } from 'next/app';
import './globals.css';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Header from '@/components/Header';

function MyApp({ children }: AppProps & { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <meta
        name='format-detection'
        content='telephone=no, date=no, email=no, address=no'
      />
      <body>
        {' '}
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>{' '}
    </html>
  );
}

export default MyApp;
