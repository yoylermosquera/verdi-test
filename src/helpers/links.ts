import { NavLinkItemProps } from "@/components/header/NavLink";

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

export const getLinksForHeaderAndBottomBar = (
  isComercial: boolean,
  isActive: (link: string) => boolean,
) => {
  // const isComercial = false;

  const headerLinks = isComercial
    ? LinksHeaderComercial
    : LinksHeaderIntermediary;

  const allLinksWithIconAndActiveStatu = headerLinks.left
    .concat(headerLinks.rigth)
    ?.map((link) => {
      return { ...link, active: isActive(link.link) };
    });

  return {
    headerLinks,
    allLinksWithIconAndActiveStatu,
  };
};
