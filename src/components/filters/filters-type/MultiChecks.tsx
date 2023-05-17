import CheckBox from '@/components/checkbox';
import React from 'react';
import { CategoryFiltersProps } from '.';

export function MultiChecks({ filter, showTitle = true }: CategoryFiltersProps) {
  if(!filter?.type) return null;

  const { name, characteristics = [] } = filter;

  return (
    <section>
      {showTitle && <h3 className="uppercase text-title mb-[1.125rem]">{name}</h3>}
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
}

export default MultiChecks;
