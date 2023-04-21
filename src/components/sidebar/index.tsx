import React from 'react';
import Icon from '../icon';
import useAppContext from '../../hooks/useAppContext';
import CategorySection from './CategorySections';

const mockCategoryList = [
  'RUGS',
  'WINDOWS COVERING',
  'WALLCOVERING',
  'ACCESORIES',
  'COLLECTIBLE DESIGN',
  'BESTSELLER',
  'NEW',
  'TRADE SERVICES',
];

function SidenBar() {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <div
      className={`fixed h-full w-full lg:w-[19.75rem] z-20 bg-beige-light animate__animated ${
        showSidebar
          ? 'animate__bounceInLeft animate__faster'
          : 'animate__bounceOutLeft animate__faster'
      }  `}
    >
      <section className="hidden lg:flex h-16 bg-gold pl-5 pr-4 w-full justify-between items-center">
        <h3 className="text-button uppercase">{'CATEGORIAS'}</h3>
        <Icon onClick={toggleSidebar} iconName={'Close'} size={12} />
      </section>

      <div className="w-full">
        {mockCategoryList.map((category) => (
          <CategorySection
            key={category}
            name={category}
            // active={category === 'RUGS'}
          />
        ))}
      </div>
    </div>
  );
}

export default SidenBar;
