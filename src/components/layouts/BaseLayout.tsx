import Head from 'next/head';
import Header from '../header';
import SidenBar from '../sidebar';
import useAppContext from '../../hooks/useAppContext';
import SearchBarMobile from '../searchMobile/SearchBarMobile';
import { getLinksForHeaderAndBottomBar } from '@/helpers/links';
import { useRouter } from 'next/router';
import BottomNavigationBar from '../header/BottomNavigationBar';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const BaseLayout = ({ title, children }: Props) => {
  const router = useRouter();

  const { showSidebar, user, state } = useAppContext();

  const { showSearchSection } = state;

  const isComercial = false;

  const isActive = (path: string) => {
    return router.pathname === path;
  };
  const { allLinksWithIconAndActiveStatu } = getLinksForHeaderAndBottomBar(
    isComercial,
    isActive,
  );

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />

      {showSidebar && (
        <div
          className={`absolute top-header_mobile lg:top-header_dektop z-40 h-full w-full min-h-screen`}
        >
          <SidenBar />
        </div>
      )}
      {/* Le puse el mt-[4.5rem] lg:mt-[7.5rem] para que el contenido de la página no se sobreponga en el Header. */}
      <div className="z-10 pb-24 lg:pb-0 grow flex flex-col mt-[4.5rem] lg:mt-[7.5rem]  ">
        {showSearchSection && <SearchBarMobile />}
        {children}
        <BottomNavigationBar links={allLinksWithIconAndActiveStatu} />
      </div>
    </div>
  );
};
