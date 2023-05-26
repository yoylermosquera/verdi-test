import { ITag } from '@/interfaces';

interface Props {
  title?: string;
  tags: ITag[];
  className?: string;
  classNameTags?: string;
  classNameTitle?: string;
}

export const ListTags = ({
  tags,
  title = 'Etiquetas',
  className,
  classNameTags,
  classNameTitle,
}: Props) => {
  return (
    <section className={`flex flex-col gap-3 mt-3 mb-3 ${className}`}>
      <h1 className={`text-title uppercase ${classNameTitle}`}>{title}</h1>

      <div className={`flex gap-3 overflow-x-scroll hide__scroll_bar ${classNameTags}`}>
        {tags.map(({ id, name }) => (
          <div key={id} className="flex p-2 pr-10 border-2 border-gold">
            <h1 className="text-input uppercase">{name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};
