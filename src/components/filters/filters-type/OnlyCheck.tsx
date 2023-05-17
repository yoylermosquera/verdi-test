import CheckBox from '@/components/checkbox';
import React from 'react';
import { CategoryFiltersProps } from '.';

function OnlyCheck({ filter, showTitle = true }: CategoryFiltersProps) {
  if (!filter?.type) return null;

  const { name, characteristics = [] } = filter;
  return (
    <section>
      <div className="flex justify-between items-center ">
        {showTitle && (
          <h3 className="uppercase text-title mb-[1.125rem]">{name}</h3>
        )}
        <CheckBox />
      </div>
    </section>
  );
}

export default OnlyCheck;
