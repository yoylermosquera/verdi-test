import React, { useRef, useState } from 'react';
import Image from 'next/image';

import useMediaQuery from '@/hooks/useMediaQuery';
import FoldersContainer from '../folders/foldersContainer';
import Icon from '../icon';
import { ModalBase } from '../modals';
import { IconName } from '../icon/index';
import FolderNameModal from '../modals/createFavoriteFolder';
import { IProductForCard } from '@/interfaces/product';

const mockFolders = Array.from({ length: 20 }).map((_, i) => ({
  id: `${i + 1}`,
  icon: 'DottedCookieLarge' as IconName,
  title: `TODOS FAVORITOS${i + 1}`,
}));

interface ProductCardProps {
  id: string;
  img: any;
  // img: string | StaticImport;
  title: string;
  description: string;
  lgMaxHeight?: 'lg:max-h-[500px]' | 'lg:max-h-[16.65rem]';
  onClickLikeIcon?: (product: IProductForCard) => void;
}

function ProductCard({ img, id, title, description, lgMaxHeight = 'lg:max-h-[500px]', onClickLikeIcon }: ProductCardProps) {
  const [showFolders, setShowFolders] = useState(false);
  const [showModalCreateFolder, setShowModalCreateFolder] = useState(false);
  const matches = useMediaQuery('(min-width: 768px)');
  const iconSize = matches ? 16 : 20;

  const heartContainerRef = useRef<HTMLDivElement>(null);

  return (
    <article
      className={`max-h-[16.65rem] h-56 lg:h-[20.75rem] ${lgMaxHeight} w-full flex flex-col`}
      key={id}
    >
      <section className="h-3/5 lg:h-4/5 relative">
        <Image className="w-full h-full object-fill" src={img} alt={title} />
        <div
          ref={heartContainerRef}
          className="bg-blend-multiply  bg-black30 w-6 h-6 absolute bottom-1 right-1 cursor-pointer flex justify-center items-center "
        >
          <Icon
            iconName="Heart"
            color="white"
            size={iconSize}
            onClick={() => {
              setShowFolders(!showFolders);
              if(onClickLikeIcon) onClickLikeIcon({
                id,
                title,
                description,
                img,
              });
            }}
          />
          {showFolders && (
            <>
              <ModalBase
                showCloseIcon={false}
                className="px-0"
                open={showFolders}
                onClose={() => setShowFolders(false)}
              >
                <FoldersContainer
                  folders={mockFolders}
                  onClickNewFolder={() => {
                    setShowFolders(false);
                    setShowModalCreateFolder(true);
                  }}
                />
              </ModalBase>
            </>
          )}

          {showModalCreateFolder && (
            <FolderNameModal
              open={showModalCreateFolder}
              onClose={() => setShowModalCreateFolder(false)}
            />
          )}
        </div>
      </section>
      <section className=" h-2/5 lg:h-1/5 pt-5">
        <h2 className="text-input font-normal mb-4">{title}</h2>
        <p className="text-input">{description}</p>
      </section>
    </article>
  );
}

export default ProductCard;
