import React from 'react'
import { NextPageWithLayout } from '../_app';
import { BaseLayout } from '../../components/layouts/BaseLayout';
import FolderPage from '@/components/folders/folderPage';
import ProductCard from '@/components/productCard';
import NoProductsContainer from '@/components/folders/noProducts/index';
import FolderNameModal from '@/components/modals/folderName/index';
import ErrorMessageModal from '@/components/modals/errorMessage';
import SuccessMessageModal from '@/components/modals/successMessage';
import FoldersContainer from '@/components/folders/foldersContainer';

const  FoldersPage: NextPageWithLayout = () => {

  return (
    <div className='h-full flex flex-col grow lg:flex-row lg:justify-center'>
      {/* <ProfileInfo /> */}
      {/* <FolderTypeContainer description='NUEVA CARPETA' /> */}
      {/* <FolderPage /> */}
      {/* <NoProductsContainer /> */}
      {/* <FolderNameModal /> */}
      {/* <ErrorMessageModal/> */}
      {/* <SuccessMessageModal/> */}
      <FoldersContainer/>
    </div>
  )
}

FoldersPage.getLayout = (page) => {
  return (
    <BaseLayout title='Perfil'>
      {page}
    </BaseLayout>
  )
}

export default FoldersPage