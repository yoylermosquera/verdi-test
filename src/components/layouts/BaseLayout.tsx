import Head from 'next/head';
import Header from '../header';
import SidenBar from '../sidebar';
import useAppContext from '../../hooks/useAppContext';
import LanguageChangerBox from '../languageChanger';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const BaseLayout = ({ title, children }: Props) => {
  const { showSidebar, user } = useAppContext();
  return (
    <div className='relative'>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />

      {showSidebar && (
        <div className='absolute z-40 h-full w-full min-h-screen'>
          <SidenBar />
        </div>
      )}

      <section className="lg:hidden h-14 flex justify-end items-center px-4">
        <span className="w-full"></span>
        <h1 className=" text-title text-center uppercase">
          ¡hola {user?.name}!
        </h1>
        <div className="w-full flex justify-end">
          <LanguageChangerBox language="ES" />
        </div>
      </section>

      <div className="z-10 pb-24 lg:pb-0">{children}</div>
    </div>
  );
};
