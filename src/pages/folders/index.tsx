import React from 'react'
import { NextPageWithLayout } from '../_app';
import { BaseLayout } from '../../components/layouts/BaseLayout';
import FolderPage from '@/components/folders/folderPage';
import QuitationContainer from '@/components/quotationContainer';
import FoldersContainer from '@/components/folders/foldersContainer';
import NoProductsContainer from '@/components/folders/noProducts';
const  FoldersPage: NextPageWithLayout = () => {

  return (
    <div className='h-full flex flex-col grow lg:flex-row lg:justify-center'>
      {/* <QuitationContainer/> */}
      <FolderPage />
      {/* <NoProductsContainer/> */}
      {/* <FoldersContainer/> */}
      
      
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