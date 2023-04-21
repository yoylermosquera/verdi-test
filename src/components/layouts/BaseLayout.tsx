import Head from 'next/head';
import Header from '../header';
import SidenBar from '../sidebar';
import useAppContext from '../../hooks/useAppContext';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const BaseLayout = ({ title, children }: Props) => {
  const { showSidebar } = useAppContext();
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {showSidebar && <SidenBar />}

      <div className="z-10 pb-24 lg:pb-0">{children}</div>
    </div>
  );
};
