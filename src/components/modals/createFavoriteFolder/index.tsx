import React, { useState } from 'react';
import Input from '@/components/input';
import Modalbase, { ModalBaseProps } from '../modalBase';
import { IconsFoldersNames } from '@/components/icon/Icons/icons-Folder';
import Icon from '@/components/icon';
import Button from '@/components/button';

interface FolderNameModalProps extends ModalBaseProps {
  onCreateFolder?: (newFolderData: {
    folderName: string;
    folderIcon: string;
  }) => void;
}

function FolderNameModal({
  onCreateFolder,
  ...modalBaseProps
}: FolderNameModalProps) {
  const [selectedIcon, setSelectedIcon] = useState(IconsFoldersNames[0]);
  const [folderName, setFolderName] = useState('');

  const handleOnCreateFolder = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    e?.stopPropagation()

    if (!selectedIcon || !folderName) return;

    const newFolderData = {
      folderName,
      folderIcon: selectedIcon
    }

    if(onCreateFolder) {
      onCreateFolder(newFolderData);
    };
  };
  return (
    <Modalbase {...modalBaseProps} showCloseIcon={false}>
      <section className="w-[20.625rem] py-8">
        <form onSubmit={handleOnCreateFolder} className=" w-64 flex flex-col mx-auto">
          <p className="text-center text-paragraph font-normal uppercase mb-8 ">
            CREAR CARPETA
          </p>
          <span className="mb-6 text-input ">Selecciona un icono</span>
          <div className="w-full grid grid-cols-5 cols-gap-4 gap-4 mb-6">
            {IconsFoldersNames.map((item, idx) => {
              const isSelected = selectedIcon === item;
              return (
                <button
                  onClick={() => setSelectedIcon(item)}
                  key={idx}
                  className={`cursor-pointer  w-[50px] h-[50px] basis-12 border flex justify-center items-center ${
                    isSelected ? 'border-0 bg-gold' : ''
                  }`}
                >
                  <Icon iconName={item as any} key={idx} size={40} />
                </button>
              );
            })}
          </div>
          <div className="mb-6">
            <Input
              required
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              placeholder="Carpeta de Cortinas"
            ></Input>
          </div>
          <Button
            type="submit"
            className="mx-auto"
          >
            CREAR
          </Button>
        </form>
      </section>
    </Modalbase>
  );
}

export default FolderNameModal;
