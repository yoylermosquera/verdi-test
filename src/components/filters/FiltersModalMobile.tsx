import React from 'react';
import Icon from '../icon';
import { CategoryFilter } from '../../services/categories/getCateriesAndFilters';
import CategorySection from '../sidebar/CategorySections';
import CategoryFilters from '../sidebar/CategoryFilters';
import { useOuterClick } from '@/hooks';
import useIsMounted from '../../hooks/useIsMounted';

interface FiltersModalMobileProps {
  filters: CategoryFilter[];
  open: boolean;
  onClose: () => void;
}

function FiltersModalMobile({ filters, open, onClose }: FiltersModalMobileProps) {

  const isMounted = useIsMounted()

  const ref = useOuterClick(() => {
    // if(open && isMounted()) onClose();
  })

  if(!open) return null;

  return (
    <div  className="lg:hidden fixed z-[100] top-0 left-0 w-full h-screen bg-black15">
      <div className="w-full h-full flex flex-col justify-end">
        <div ref={ref} className=" px-5 py-3 h-[70%] bg-beige-light animate__bounceInUp animate__animated animate__faster">
          <div className="flex justify-between items-center mb-3">
            <span></span>
            <h4 className="text-title uppercase">Filters</h4>
            <div>
              <Icon iconName="ArrowDown" className="cursor-pointer" size={12} onClick={onClose} />
            </div>
          </div>

          <div className="">
            <>
              {filters.map((filter, idx) => {
                return (
                  <div key={idx} className="w-full">
                    <CategorySection categoryContainerClassName="px-0 pl-0 pr-0" categoryName={filter?.name}>
                      <div className="flex flex-col bg-beige px-6 pt-5 pb-6 gap-6">
                        <CategoryFilters
                          showTitle={false}
                          key={idx}
                          filter={filter}
                        />
                      </div>
                    </CategorySection>
                  </div>
                );
              })}
            
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltersModalMobile;
