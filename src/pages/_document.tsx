import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es" className='scroll-smooth'>
      <Head />
      <body className='h-full'>
        <div id="portal-root"  />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
