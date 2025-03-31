import { GoogleTagManager } from '@next/third-parties/google';
import { Space_Grotesk } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-afacad'
});

export const metadata = {
  title: 'Jasper Munene | Software Engineer, SEO Specialist & Tech Innovator',
  description: 'Explore the portfolio of Jasper Munene, a seasoned software engineer and SEO specialist. Discover innovative tech projects and cutting-edge web solutions.',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </head>
      <body className={spaceGrotesk.className}>
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
