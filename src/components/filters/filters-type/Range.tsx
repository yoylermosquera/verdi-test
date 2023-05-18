import RangeSlider from '@/components/rangeSlider';
import React from 'react';
import { CategoryFiltersProps } from '.';

function Range({ filter, showTitle = true }: CategoryFiltersProps) {
  if (!filter?.type) return null;

  const { name, characteristics = [] } = filter;
  return (
    <section>
      {showTitle && (
          <h3 className="uppercase text-title mb-[1.125rem]">{name}</h3>
        )}
      <div className="pl-4  w-full">
        <RangeSlider />
      </div>
    </section>
  );
}

export default Range;
