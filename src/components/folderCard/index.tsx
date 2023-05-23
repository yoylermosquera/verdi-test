import React, { useState } from 'react';
import Image from 'next/image';
import Icon from '../icon';
import { Colors } from '@/styles/config/base';
import { useOuterClick } from '@/hooks/useOuterClick';


interface ProductCardProps {
  id?: string;
  img1: any;
  img2: any;
  img3: any;
  title1: string;
  title2: string;
  title3: string;
  folderTitle: string;
  productsAmmount: string;

  // handlers props
  onClickDelete?(folderId: string): void;
  onClickRename?(folderId: string): void;
}


function FolderCard({
  id,
  img1,
  img2,
  img3,
  title1,
  title2,
  title3,
  folderTitle,
  productsAmmount,
  //
  onClickDelete,
  onClickRename,
}: ProductCardProps) {
  const [showFolderOptionMenu, setShowFolderOptionMenu] = useState(false);

  const folderOptionMenuRef = useOuterClick(() => {
    if (showFolderOptionMenu) {
      setShowFolderOptionMenu(false);
    }
  });
  return (
    <article
      className={`h-[14.125rem] max-h-[16.65rem]  lg:h-[13.25rem] lg:max-h-[500px] w-full flex flex-col`}
      key={id}
      ref={folderOptionMenuRef}
    >
      <section className="h-3/5 lg:h-4/5 relative flex flex-row ">
        <section className="h-full w-3/5">
          <Image
            className="w-full h-full object-fill"
            src={img1}
            alt={title1}
          />
        </section>

        <section className="h-full w-2/5 flex flex-col gap-0">
          <Image className="w-full h-3/5 object-fill" src={img2} alt={title2} />
          <Image className="w-full h-2/5 object-fill" src={img3} alt={title3} />
        </section>

        <div className="bg-blend-multiply bg-black30 w-[1.875rem] h-[1.875rem] absolute bottom-0 right-0 pl-1 pt-1 flex justify-center items-center ">
          <Icon
            iconName="ThreeDots"
            color={Colors.beige}
            size={24}
            className="mx-auto"
            onClick={() => {
              setShowFolderOptionMenu(true);
            }}
          />
        </div>

        {showFolderOptionMenu && (
          <div className="absolute bg-gold top-[100%] right-0 w-[155px] h-16">
            <div className="flex flex-col h-full w-full items-center justify-center gap-1">
              <span
                onClick={() => {
                  if (onClickRename) onClickRename(id!);
                }}
                className="text-paragraph italic text-black-verdi"
              >
                Cambiar nombre
              </span>
              <span
                onClick={() => {
                  if (onClickDelete) onClickDelete(id!);
                }}
                className="text-paragraph italic text-black-verdi"
              >
                Eliminar carpeta
              </span>
            </div>
          </div>
        )}
      </section>
      <section className=" h-2/5 lg:h-1/5 pt-4">
        <h2 className="text-input font-normal w-2/3 uppercase mb-1">
          {folderTitle}
        </h2>
        <p className="text-font_10">{productsAmmount} productos</p>
      </section>
    </article>
  );
}

export default FolderCard;
