import { Categorie } from '@/services/categories/getCateriesAndFilters';
import { useState } from 'react';
import Icon from '../icon';
import CategoryFilters from './CategoryFilters';
import { getAllFiltersByCategory } from '@/util';

interface CategorySectionProps {
  // category: Categorie;
  initialActive?: boolean;
  children?: React.ReactNode;
  categoryName: string
}
const CategorySection = ({ categoryName, initialActive = false, children }: CategorySectionProps) => {
  const [activeSection, setActiveSection] = useState(initialActive);

  // const { filters } = getAllFiltersByCategory(category);

  const toggleSection = () => {
    setActiveSection(!activeSection);
  };
  return (
    <div className="overflow-y-auto hide__scroll_bar">
      <section
        onClick={toggleSection}
        className=" pointer h-16 bg-beige-light pl-5 pr-4 flex w-full justify-between items-center"
      >
        <h3 className="text-title uppercase">{categoryName}</h3>
        <Icon
          onClick={toggleSection}
          iconName={activeSection ? 'ArrowUp' : 'ArrowDown'}
          size={12}
        />
      </section>
      { activeSection && children }
      {/* {activeSection && (
        <>
        <section className='flex flex-col bg-white px-6 pt-5 pb-6 gap-6' >
          {
            filters?.map((filter, idx) => {
              return (
                <CategoryFilters key={idx} filter={filter}  />
              )
            })
          }
        </section>
        </>
      )} */}
    </div>
  );
};

export default CategorySection;
