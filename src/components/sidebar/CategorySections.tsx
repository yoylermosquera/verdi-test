import { Categorie } from '@/services/categories/getCateriesAndFilters';
import { useState } from 'react';
import Icon from '../icon';
import CategoryFilters from './CategoryFilters';
import { removeDuplicateByKey } from '../../util/array';
import { CategoryFilter } from '../../services/categories/getCateriesAndFilters';

interface CategorySectionProps {
  active?: boolean;
  category: Categorie;
}
const CategorySection = ({ active = false, category }: CategorySectionProps) => {
  const [activeSection, setActiveSection] = useState(active);

  const materialList = category?.collections?.reduce((acc, cur) => {
    return [...acc, ...cur.materials];
  }, [] as Categorie['filters']);

  const material: CategoryFilter = {
    name: 'Material',
    characteristics: removeDuplicateByKey(materialList!, 'name'),
    id: '',
    type: 'MultiChecks'
  };

  const collectionsList = category?.collections?.map((item) => {
    return {
      name: item.name,
      id: item.id,
    }
  });

  const collections: CategoryFilter = {
    name: 'Collections',
    characteristics: removeDuplicateByKey(collectionsList! , 'name'),
    id: '',
    type: 'MultiChecks'
  };

  const filters = [material, collections, ...category?.filters];
  const toggleSection = () => {
    setActiveSection(!activeSection);
  };
  return (
    <div className="overflow-y-auto hide__scroll_bar">
      <section
        onClick={toggleSection}
        className=" pointer h-16 bg-beige-light pl-5 pr-4 flex w-full justify-between items-center"
      >
        <h3 className="text-title uppercase">{category?.name}</h3>
        <Icon
          onClick={toggleSection}
          iconName={activeSection ? 'ArrowUp' : 'ArrowDown'}
          size={12}
        />
      </section>
      {activeSection && (
        <section className='flex flex-col bg-white px-6 pt-5 pb-6 gap-6' >
          {
            filters?.map((filter, idx) => {
              return (
                <CategoryFilters key={idx} filter={filter}  />
              )
            })
          }
        
        </section>
      )}
    </div>
  );
};

export default CategorySection;
