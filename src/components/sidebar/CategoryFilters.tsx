import React from 'react';
import CheckBox from '../checkbox';
import RangeSlider from '../rangeSlider';
import { CategoryFilter } from '@/services/categories/getCateriesAndFilters';

const mockColors = [
  '#AD5C5C',
  '#CB9494',
  '#E0BD9C',
  '#DCC077',
  '#B4A287',
  '#AD5C5C',
  '#CB9494',
  '#E0BD9C',
  '#DCC077',
  '#B4A287',
];

interface CategoryFiltersProps {
  filter?: CategoryFilter;
}

function CategoryFilters({ filter }: CategoryFiltersProps) {
  if (!filter?.type) return null;

  const { name, characteristics = [] } = filter
  switch (filter?.type) {
    case 'MultiChecks':
      return (
        <section>
          <h3 className="uppercase text-title mb-[1.125rem]">{name}</h3>
          <div className="px-4 flex flex-col gap-7 ">
            {characteristics?.map((item, index) => (
              <div key={index} className="flex gap-3">
                <CheckBox />
                <span className="text-title">{item?.name}</span>
              </div>
            ))}
          </div>
        </section>
      );

    case 'MultiCheck':
      return (
        <section>
          <h3 className="uppercase text-title mb-[1.125rem]">{name}</h3>
          <div className="px-4 flex flex-col gap-7 ">
            {characteristics?.map((item, index) => (
              <div key={index} className="flex gap-3">
                <CheckBox />
                <span className="text-title">{item?.name}</span>
              </div>
            ))}
          </div>
        </section>
      );

    case 'Colors':
      return (
        <section>
          <h3 className="uppercase text-title mb-[1.125rem]">{name}</h3>
          <div className="h-7 pl-4 flex gap-4 w-full  overflow-x-auto hide__scroll_bar">
            {characteristics?.map((item, index) => (
              <div
                style={{ backgroundColor: item?.name }}
                key={index}
                className={` cursor-pointer flex-shrink-0 w-6 h-6 rounded-2xl`}
              ></div>
            ))}
          </div>
        </section>
      );

    case 'Range':
      return (
        <section>
          <h3 className="uppercase text-title mb-[1.125rem]">{name}</h3>
          <div className="pl-4  w-full">
            <RangeSlider />
          </div>
        </section>
      );

    // collections
    // case null: {
    //   return (
    //     <section>
    //       <h3 className="uppercase text-title mb-[1.125rem]">COLLECTION</h3>
    //       <div className="px-4 flex flex-col gap-7 ">
    //         {['Sui', 'Heritage', 'Macorina', 'Aes', 'Tatami'].map(
    //           (item, index) => (
    //             <div key={index} className="flex gap-3">
    //               <CheckBox />
    //               <span className="text-title">{item}</span>
    //             </div>
    //           ),
    //         )}
    //       </div>
    //     </section>
    //   );
    // }

    case 'OnlyCheck':
      return (
        <section>
          <div className="flex justify-between items-center ">
            <h3 className="uppercase text-title ">{name}</h3>
            <CheckBox />
          </div>
        </section>
      );
    default:
      return null;
  }

  // return (
  //   <>
  //     {/* colors */}

  //     {/* price */}

  //     {/* CUSTOM - CUT RUGS */}
  //     <section>
  //       <div className="flex justify-between items-center ">
  //         <h3 className="uppercase text-title ">CUSTOM - CUT RUGS</h3>
  //         <CheckBox />
  //       </div>
  //     </section>

  //     {/* BEST SELLER */}
  //     <section>
  //       <div className="flex justify-between items-center ">
  //         <h3 className="uppercase text-title ">BEST SELLER</h3>
  //         <CheckBox />
  //       </div>
  //     </section>
  //   </>
  // );
}

export default CategoryFilters;
