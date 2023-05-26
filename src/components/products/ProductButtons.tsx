import Button from '@/components/button';
import Icon from '@/components/icon';

interface Props {
  iconSize: number;
}

export const ProductButtons = ({ iconSize }: Props) => {
  return (
    <section className="flex flex-col justify-center gap-4 mx-5 mt-10 lg:w-1/5">
      <Button
        type="submit"
        variant="white"
        className="flex flex-col uppercase"
        size="full"
      >
        <div className="flex  items-center gap-3">
          <Icon iconName="Download" size={iconSize} />
          <h1 className="underline">Ficha Ténica</h1>
        </div>
      </Button>

      <Button type="submit" className="uppercase" size="full">
        Más información
      </Button>
    </section>
  );
};
