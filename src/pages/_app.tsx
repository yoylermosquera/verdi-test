import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';


import '@/styles/globals.scss';

const Futura = localFont({
  fallback: ['system-ui', 'arial'],
  variable: '--futura-font',
  src: [
    {
      path: '../assets/fonts/Futura_Std_Light.otf',
      weight: '300',
    },
    {
      path: '../assets/fonts/Futura_Std_Book.otf',
      weight: '400',
    },
    {
      path: '../assets/fonts/Futura_Std_Bold.otf',
      weight: '700',
    },
  ],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <main className={`${Futura.className}`}>
      <SessionProvider session={pageProps.session}>
        {getLayout(<Component {...pageProps} />)}
        <Toaster position={'top-right'} />
      </SessionProvider>
    </main>
  );
}
