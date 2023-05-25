import React, { useState } from 'react';
import Icon, { IconName } from '@/components/icon';

type FolderData = {
  id: string;
  title: string;
  icon: IconName;
};
interface FoldersContainerProps {
  onClickNewFolder?: () => void;
  onClickAddFavorites?: (folderId: string) => void;
  folders: FolderData[];
}

function FoldersContainer({
  folders,
  onClickNewFolder,
  onClickAddFavorites,
}: FoldersContainerProps) {

  const onClickFolder = (folderId: string) => {
    if(onClickAddFavorites) onClickAddFavorites(folderId);
  }
  return (
    <div className="w-[22.5rem] bg-white ">
      <h1 className="mx-auto text-center my-6 text-font_18  text-black-verdi">
        Selecciona carpeta
      </h1>
      <section className="h-[300px] px-7 overflow-scroll hide__scroll_bar flex flex-col gap-4">
        {folders.map((item) => (
          <FolderRow
            key={item.id}
            {...item}
            onClickFolder={onClickFolder}
          />
        ))}
        <div className="w-full h-[72px] flex items-center gap-4 ">
          <div className="w-[72px] h-[72px] bg-gold flex justify-center items-center">
            <Icon iconName="DottedCookieLarge" color="black" size={32} />
          </div>
          <p className="text-title uppercase">TODOS FAVORITOS</p>
        </div>
      </section>
      <button
        onClick={onClickNewFolder}
        className="w-full h-16 flex flex-row bg-beige "
      >
        <Icon
          iconName="AddIconWhite"
          size={40}
          color="black"
          className="my-auto mx-10"
        />
        <h1 className="text-title justify-center my-auto">NUEVA CARPETA</h1>
      </button>
    </div>
  );
}

interface FolderRowProps extends FolderData {
  onClickFolder?: (folderId: string) => void;
  isSelected?: boolean;
}
function FolderRow({ icon, id, title, isSelected = false, onClickFolder }: FolderRowProps) {
  return (
    <button
      onClick={() => {
        if (onClickFolder) onClickFolder(id);
      }}
      className={`w-full h-[72px] flex items-center gap-4 cursor-pointer hover:bg-beige`}
    >
      <div className="w-[72px] h-[72px] bg-gold flex justify-center items-center">
        <Icon iconName={icon} color="black" size={32} />
      </div>
      <p className="text-title uppercase">{title}</p>
    </button>
  );
}

export default FoldersContainer;
