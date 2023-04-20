import Head from 'next/head';
import Header from '../header';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const BaseLayout = ({ title, children }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="z-10 pb-24 lg:pb-0">{children}</div>
    </div>
  );
};
