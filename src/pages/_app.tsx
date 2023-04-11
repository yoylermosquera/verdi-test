import type { AppProps } from 'next/app';
import localFont from "next/font/local";

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
    }
  ]
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={Futura.className}>
      <Component {...pageProps} />
    </main>
  )
}