import { ITag } from '@/interfaces';

interface Props {
  minMeasure: number;
  maxMeasure: number;
  minPrice: number;
  maxPrice: number;
  tags: ITag[];
  className?: string;
}

export const CharacteristicsProduct = ({
  minMeasure,
  maxMeasure,
  minPrice,
  maxPrice,
  tags,
  className,
}: Props) => {
  return (
    <section className={`flex flex-col gap-4 mx-5 text-title uppercase overflow-hidden hide__scroll_bar lg:mx-0 lg:overflow-y-scroll ${className}`}>
      <div className="flex gap-7 justify-between items-center">
        <h1>Measures</h1>
        <h1 className='overflow-ellipsis overflow-hidden'>
          MIN {minMeasure} M - MAX {maxMeasure} M
        </h1>
      </div>

      <div className="border border-gold opacity-30" />

      {tags.map(({ id, name, type }, index) => (
        <div key={id} className="flex flex-col gap-4">
          <div className="flex gap-7 justify-between items-center">
            <h1>{type}</h1>
            <h1 className='overflow-ellipsis overflow-hidden'>{name}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
          </div>

          <div className="border border-gold opacity-30" />
        </div>
      ))}

      <div className="flex gap-7 justify-between items-center">
        <h1>Price</h1>
        <h1 className='overflow-ellipsis overflow-hidden'>
          ${minPrice} USD - ${maxPrice}
        </h1>
      </div>
    </section>
  );
};
