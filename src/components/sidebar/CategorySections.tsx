import { useState } from 'react';
import Icon from '../icon';

interface CategorySectionProps {
  initialActive?: boolean;
  children?: React.ReactNode;
  categoryName: string
  className?: string
  categoryContainerClassName?: string
}
const CategorySection = ({ categoryName, initialActive = false, categoryContainerClassName = '', className = '',  children }: CategorySectionProps) => {
  const [activeSection, setActiveSection] = useState(initialActive);

  const toggleSection = () => {
    setActiveSection(!activeSection);
  };
  return (
    <div className={`h-max cursor-pointer overflow-y-auto hide__scroll_bar ${className}`}>
      <section
        onClick={toggleSection}
        className={`pointer h-16 bg-beige-light pl-5 pr-4 flex w-full justify-between items-center ${categoryContainerClassName}`}
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
