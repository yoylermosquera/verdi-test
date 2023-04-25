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
  const { showSidebar, toggleSidebar, categories } = useAppContext();
  //overflow-y-auto sticky h-full w-full lg:w-[19.75rem] lg:pb-10 z-20 bg-beige-light animate__animated
  return (
    <div
      className={`overflow-y-auto sticky h-full w-full lg:w-[19.75rem] lg:pb-10 z-20 bg-beige-light animate__animated ${
        showSidebar
          ? 'animate__bounceInLeft animate__faster'
          : 'animate__bounceOutLeft animate__faster'
      }  `}
    >
      <section className="hidden lg:flex h-16 bg-gold pl-5 pr-4 w-full justify-between items-center">
        <h3 className="text-button uppercase">{'CATEGORIAS'}</h3>
        <Icon onClick={toggleSidebar} iconName={'Close'} size={12} />
      </section>

      <div className="w-full flex flex-col">
        {categories?.map((category) => (
          <CategorySection
            key={category?.id}
            category={category}
            // active={category === 'RUGS'}
          />
        ))}
      </div>
    </div>
  );
}

export default SidenBar;
