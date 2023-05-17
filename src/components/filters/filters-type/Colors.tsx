import React from 'react';
import { CategoryFiltersProps } from '.';
export function Colors({ filter, showTitle = true }: CategoryFiltersProps) {
  if (!filter?.type) return null;

  const { name, characteristics = [] } = filter;
  return (
    <section>
      {showTitle && <h3 className="uppercase text-title mb-[1.125rem]">{name}</h3>}
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
}

export default Colors;
