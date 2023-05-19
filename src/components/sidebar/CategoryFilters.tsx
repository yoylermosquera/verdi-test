import React from 'react';
import {
  CategoryFiltersProps,
  Colors,
  MultiChecks,
} from '../filters/filters-type';
import Range from '../filters/filters-type/Range';
import OnlyCheck from '../filters/filters-type/OnlyCheck';

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

function CategoryFilters(props: CategoryFiltersProps) {
  const { filter } = props;

  if (!filter?.type) return null;

  switch (filter?.type) {
    case 'MultiChecks':
      return <MultiChecks {...props} />;

    case 'MultiCheck':
      return <MultiChecks {...props} />;

    case 'Colors':
      return <Colors {...props} />;

    case 'Range':
      return <Range {...props} />;

    case 'OnlyCheck':
      return <OnlyCheck {...props} />;

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

  
    default:
      return null;
  }
}

export default CategoryFilters;
