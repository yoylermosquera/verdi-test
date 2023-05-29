import React from 'react';
import Icon from '../icon';
import useAppContext from '../../hooks/useAppContext';
import CategorySection from './CategorySections';
import { getAllFiltersByCategory } from '../../util/getAllFiltersByCategory';
import CategoryFilters from './CategoryFilters';
import { useOuterClick } from '@/hooks';

function SidenBar() {
  const { showSidebar, toggleSidebar,  categories, state: { colors,  } } = useAppContext();

  if(!showSidebar) return null

  return (
    <div
      className={` fixed top-1 overflow-y-auto h-screen w-full lg:w-[19.75rem] lg:pb-10 z-20 bg-beige-light animate__animated ${
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
          <CategorySection key={category?.id} categoryName={category?.name} >
            <section className="flex flex-col bg-white px-6 pt-5 pb-6 gap-6">
              {getAllFiltersByCategory(category, colors)?.filters?.map(
                (filter, idx) => {
                  return <CategoryFilters isFromSideBar key={idx} filter={filter} />;
                },
              )}
            </section>
          </CategorySection>
        ))}
      </div>
    </div>
  );
}

export default SidenBar;
