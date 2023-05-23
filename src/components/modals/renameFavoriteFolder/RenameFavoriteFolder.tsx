import React, { useState } from 'react';
import Modalbase, { ModalBaseProps } from '../modalBase';
import Button from '@/components/button';
import Input from '@/components/input';

interface RenameFavoriteFolder extends ModalBaseProps {
  onClickConfirm?(newName: string): void;
}

function RenameFavoriteFolder(props: RenameFavoriteFolder) {
  const [newName, setNewName] = useState('');
  const { onClickConfirm, ...restProps } = props;

  const handleOnRenameFolder = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    e?.stopPropagation();

    if (!newName) return;

    if (onClickConfirm) {
      onClickConfirm(newName);
    }
  };
  return (
    <Modalbase {...restProps}>
      <form
        onSubmit={handleOnRenameFolder}
        className="flex flex-col gap-8 justify-between w-[330px] h-[268px] pt-16 pb-14 px-11  bg-white"
      >
        <p className="text-[14px] leading-5  tracking-[0.98px] uppercase">
          introduce el nuevo nombre
        </p>
        <Input
          placeholder="carpeta de cortinas"
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          required
        />
        <div className="flex w-full justify-between">
          <Button size="medium" className="mx-auto uppercase" type="submit">
            guardar
          </Button>
        </div>
      </form>
    </Modalbase>
  );
}

export default RenameFavoriteFolder;
