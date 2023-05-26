import React, { useEffect, useState } from 'react';
import Icon from '../icon';
import { useRouter } from 'next/router';

import { VerdiLogo } from '../icon/Icons/VerdiLogo';
import Input from '../input';

import { Colors } from '@/styles/config/base';
import BottomNavigationBar from './BottomNavigationBar';
import NavLinkItem, { NavLinkItemProps } from './NavLink';
import useAppContext from '../../hooks/useAppContext';
import LanguageChangerBox from '../languageChanger';
import useMediaQuery from '@/hooks/useMediaQuery';
import SearchProductsResults from '../searchMobile/SearchProductsResults';
import { productsMockData } from '@/util/products';
import useDebounce from '@/hooks/useDebounce';
import useProducts from '../../hooks/data/useProducts';
import { useOuterClick } from '@/hooks/useOuterClick';
import { getLinksForHeaderAndBottomBar } from '@/helpers/links';

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
      link: '/favorites',
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

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const {
    toggleSidebar,
    showSidebar,
    dispatch,
    state: { showSearchSection },
  } = useAppContext();

  // search products

  const [search, setSearch] = useState('');

  const debouncedValue = useDebounce<string>(search, 500);

  const [showProductsResults, setShowProductsResults] = useState(false);

  const refProductResultContainer = useOuterClick(() => {
    setShowProductsResults(false);
  });

  const { fetchProducsts, data, error } = useProducts();

  useEffect(() => {
    if (!debouncedValue) return;

    if (!showProductsResults) setShowProductsResults(true);

    fetchProducsts({
      query: {
        search: debouncedValue,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, fetchProducsts]);

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const toggleShowSearchSection = () => {
    dispatch({ type: 'TOGGE_SEACH_SECTION_MOBILE' });
  };

  const isComercial = false;

  // const headerLinks = isComercial
  // ? LinksHeaderComercial
  // : LinksHeaderIntermediary;

  const { allLinksWithIconAndActiveStatu, headerLinks } =
    getLinksForHeaderAndBottomBar(isComercial, isActive);

  const loadingProducts = !data && !error;
  const errorLoadingProducts = error;

  return (
    <>
      <header
        className={`h-h_sm w-full flex justify-center bg-beige-light items-center lg:h-h_lg fixed z-50`}
      >
        <nav className="max-w-lg-wrapper px-4 lg:px-o w-full">
          <section className="grid grid-cols-header">
            {/* items left  */}
            <div className="flex items-center lg:justify-evenly gap-4 xl:gap-[3.25rem]">
              {!isComercial ? (
                <div className="cursor-pointer">
                  <Icon
                    onClick={toggleSidebar}
                    iconName={showSidebar ? 'Close' : 'ListIcon'}
                    size={18}
                  />
                </div>
              ) : null}

              <div className="hidden lg:block">
                <LanguageChangerBox language="ES" />
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
            <div className="relative flex justify-end lg:justify-start items-center gap-4 xl:gap-[3.25rem]">
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
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="lg:hidden">
                    <Icon
                      iconName={showSearchSection ? 'Close' : 'Lupe'}
                      size={20}
                      onClick={toggleShowSearchSection}
                    />
                  </div>
                  <div>
                    <Icon iconName="BagHeader" size={20} />
                  </div>
                </>
              ) : null}

              {showProductsResults && isDesktop ? (
                <div
                  ref={refProductResultContainer}
                  className={`
                  absolute z-50 bg-beige-light w-[31.25rem] max-h-[654px]  overflow-y-auto top-[100%] mt-4 bottom-0 left-0 px-9 pt-4 pb-8
                     ${
                       loadingProducts || errorLoadingProducts
                         ? 'h-[400px]'
                         : 'h-[645px]'
                     }
                  `}
                >
                  <section className="w-full">
                    <SearchProductsResults
                      isLoading={loadingProducts}
                      error={errorLoadingProducts}
                      products={
                        data?.rows?.map((product) => ({
                          title: product?.name,
                          id: product?.id,
                          description: product?.description,
                          // TODO cargar imagen desde el mismo producto
                          img: productsMockData[0].img,
                        })) as any
                      }
                    />
                  </section>

                  <br />
                </div>
              ) : null}
            </div>
          </section>
        </nav>

      </header>
    </>
  );
}

export default Header;
