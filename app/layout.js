import { GoogleTagManager } from '@next/third-parties/google';
import { Afacad } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';

const afacad = Afacad({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-afacad'
});

export const metadata = {
  title: 'Portfolio of Jasper Munene',
  description: 'This is the portfolio of Jasper Munene. I am a full stack developer and a self-taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </head>
      <body className={afacad.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
