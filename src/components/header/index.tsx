import React from 'react';
import Icon from '../icon';
import { useRouter } from 'next/router';

import { VerdiLogo } from '../icon/Icons/VerdiLogo';
import Input from '../input';

import { Colors, HEADER_HEIGHT } from '@/styles/config/base';
import useWindowSize from '@/hooks/useWindowSize';
import BottomNavigationBar from './BottomNavigationBar';
import NavLinkItem, { NavLinkItemProps } from './NavLink';
import SidenBar from '../sidebar';
import useAppContext from '../../hooks/useAppContext';
import LanguageChangerBox from '../languageChanger';
import useMediaQuery from '@/hooks/useMediaQuery';

type ListIconsHeader = {
  [key in 'left' | 'rigth']: NavLinkItemProps[];
};

const LinksHeaderIntermediary: ListIconsHeader = {
  left: [
    {
      text: 'INICIO',
      link: '/',
      iconName: 'Home',
    },
    {
      text: 'COTIZACIONES',
      link: '/icons',
      iconName: 'CotizationList',
    },
  ],
  rigth: [
    {
      text: 'FAVORITOS',
      link: '',
      iconName: 'Heart',
    },
    {
      text: 'PERFIL',
      link: '/profile',
      iconName: 'Profile',
    },
  ],
};

const LinksHeaderComercial: ListIconsHeader = {
  left: [
    {
      text: 'METRICAS',
      link: '/metrics',
      iconName: 'Metrics',
    },
    {
      text: 'COTIZACIONES',
      link: '/icons',
      iconName: 'CotizationList',
    },
  ],
  rigth: [
    {
      text: 'ACCESOS',
      link: '',
      iconName: 'HandAccess',
    },
    {
      text: 'PERFIL',
      link: '/profile',
      iconName: 'Profile',
    },
  ],
};

function Header() {
  const router = useRouter();


  const isDesktop = useMediaQuery('(min-width: 768px)');


  const { toggleSidebar, showSidebar } = useAppContext()


  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const isComercial = false;

  const headerLinks = isComercial
    ? LinksHeaderComercial
    : LinksHeaderIntermediary;

  const allLinksWithIconAndActiveStatu = headerLinks.left
    .concat(headerLinks.rigth)
    ?.map((link) => {
      return { ...link, active: isActive(link.link) };
    });

  return (
    <header className={`h-[${HEADER_HEIGHT}] w-full flex justify-center bg-beige-light items-center lg:h-[7.5rem] `}>
      <nav className="max-w-lg-wrapper px-4 lg:px-o w-full">
        <section className="grid grid-cols-header">
          {/* items left  */}
          <div className="flex items-center lg:justify-evenly gap-4 lg:gap-[3.25rem]">
            {!isComercial ? (
              <div className="cursor-pointer">
                <Icon onClick={toggleSidebar} iconName={ showSidebar ? 'Close' : 'ListIcon' } size={18} />
              </div>
            ) : null}

            <div className='hidden lg:block'>
              <LanguageChangerBox language='ES' />
            </div>

            {headerLinks.left.map((linkItem) => (
              <NavLinkItem
                key={linkItem.text}
                active={isActive(linkItem.link)}
                text={linkItem.text}
                link={linkItem.link}
              />
            ))}
          </div>

          <div className="flex justify-center items-center">
            <VerdiLogo
              size={isDesktop ? 150 : 120}
              height={isDesktop ? 82 : 50}
              fill={Colors.blackVerdi}
            />
          </div>

          {/* items rigth */}
          <div className="flex justify-end lg:justify-start items-center gap-4 lg:gap-[3.25rem]">
            {headerLinks.rigth.map((linkItem) => (
              <NavLinkItem
                key={linkItem.text}
                active={isActive(linkItem.link)}
                text={linkItem.text}
                link={linkItem.link}
              />
            ))}

            {!isComercial ? (
              <>
                <Input
                  placeholder="BUSCAR"
                  className="pl-1 bg-transparent italic w-44 "
                  containerClassName="w-44 hidden lg:block"
                />
                <div className="lg:hidden">
                  <Icon iconName="Lupe" />
                </div>
                <div>
                  <Icon iconName="BagHeader" size={20} />
                </div>
              </>
            ) : null}
          </div>
        </section>
      </nav>
      <BottomNavigationBar links={allLinksWithIconAndActiveStatu} />
    </header>
  );
}

export default Header;
