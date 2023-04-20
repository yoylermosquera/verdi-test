import React from 'react';
import Icon from '../icon';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { VerdiLogo } from '../icon/Icons/VerdiLogo';
import Input from '../input';

import { Colors } from '@/styles/config/base';
import useWindowSize from '../../hooks/useWindowSize';
import NavLinkItem from './NavLink';
import BottomNavigationBar from './BottomNavigationBar';

const LinksHeaderIntermediary = {
  left: [
    {
      text: 'INICIO',
      link: '/',
    },
    {
      text: 'COTIZACIONES',
      link: '/icons',
    },
  ],
  rigth: [
    {
      text: 'FAVORITOS',
      link: '',
    },
    {
      text: 'PERFIL',
      link: '',
    },
  ],
};

const LinksHeaderComercial = {
  left: [
    {
      text: 'METRICAS',
      link: '/metrics',
    },
    {
      text: 'COTIZACIONES',
      link: '/icons',
    },
  ],
  rigth: [
    {
      text: 'ACCESOS',
      link: '',
    },
    {
      text: 'PERFIL',
      link: '',
    },
  ],
};

function Header() {
  const router = useRouter();

  const { width } = useWindowSize();

  const isDesktop = width > 768;

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const isComercial = true;
  const headerLinks = isComercial
    ? LinksHeaderComercial
    : LinksHeaderIntermediary;

  return (
    <header className="h-[4.5rem] w-full flex justify-center bg-beige-light items-center lg:h-[7.5rem] ">
      <nav className="max-w-[80rem] px-4 lg:px-o w-full">
        <section className="grid grid-cols-header">
          {/* items left  */}
          <div className="flex items-center  gap-4 lg:gap-[3.25rem]">
            {!isComercial ? (
              <div className="grow">
                <Icon iconName="ListIcon" size={22} />
              </div>
            ) : null}

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

          {/* rigth */}
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
      <BottomNavigationBar />
    </header>
  );
}

export default Header;
