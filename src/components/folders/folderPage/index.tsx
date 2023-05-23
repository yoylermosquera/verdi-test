import React, { useState } from 'react';
import FolderCard from '@/components/folderCard';
import productSample from '@/assets/images/examples/productSample.png';
import ReturnContainer from '@/components/returnContainer';
import Icon from '@/components/icon';
import ConfirmationModal from '../../modals/confirmationModal/ConfirmationModal';
import SuccessMessageModal from '@/components/modals/successMessage';
import RenameFavoriteFolder from '@/components/modals/renameFavoriteFolder/RenameFavoriteFolder';
import ErrorMessageModal from '@/components/modals/errorMessage';

const mockData = Array.from({ length: 20 }).map((_, i) => ({
  id: `${i + 1}`,
  img1: productSample,
  img2: productSample,
  img3: productSample,
  title1: `Tapete Heritage - ${i + 1}`,
  title2: `Tapete Heritage - ${i + 1}`,
  title3: `Tapete Heritage - ${i + 1}`,
  folderTitle: 'Todos mis favoritos' + i,
  productsAmmount: '20',
}));

interface FolderPageProps {
  // description: string;
}
type FolderCardActions = 'delete' | 'rename';

function FolderPage({}: FolderPageProps) {
  const [selectedFolder, setSelectedFolder] = useState('');
  const [folderActionType, setFolderActionType] = useState<FolderCardActions>();

  return (
    <section className="w-full h-full lg:flex lg:flex-row lg:justify-center ">
      <div className=" w-full px-4 lg-w-[65.75rem] lg:max-w-[75rem]">
        <ReturnContainer title="Mis favoritos" className="my-7 lg:my-12 " />
        <div className="w-full h-full px-4 grid grid-cols-2 gap-2 justify-between lg:grid-cols-4 lg:gap-8 ">
          <FolderCard {...mockData[0]} />
          {mockData.map((folder, idx) => (
            <FolderCard
              key={idx}
              {...folder}
              onClickDelete={(id) => {
                setSelectedFolder(id);
                setFolderActionType('delete');
              }}
              onClickRename={(id) => {
                setSelectedFolder(id);
                setFolderActionType('rename');
              }}
            />
          ))}
        </div>
      </div>
      <ConfirmationModal
        message="¿Estás seguro que deseas eliminar está carpeta?"
        open={false}
        onClose={() => {}}
        showCloseIcon={false}
      />
      <SuccessMessageModal
        message="ELIMINADA CON ÉXITO"
        onClose={() => {}}
        showCloseIcon={false}
        open={false}
      />
      <RenameFavoriteFolder
        onClose={() => {}}
        showCloseIcon={false}
        open={false}
      />
      <ErrorMessageModal
        message="Se presento un error al eliminar la carpeta inténtalo nuevamente"
        onClose={() => {}}
        showCloseIcon={false}
        open={false}
      />
    </section>
  );
}
export default FolderPage;
