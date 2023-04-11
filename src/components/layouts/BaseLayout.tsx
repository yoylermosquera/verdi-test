import Head from 'next/head';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const BaseLayout = ({ title, children }: Props ) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>

      <div>
        { children }
      </div>
    </>
  )
}
