import React from 'react'
import { NextPageWithLayout } from '../_app';
import { BaseLayout } from '../../components/layouts/BaseLayout';
import FolderPage from '@/components/folders/folderPage';
import QuitationContainer from '@/components/quotationContainer';

const  FoldersPage: NextPageWithLayout = () => {

  return (
    <div className='h-full flex flex-col grow lg:flex-row lg:justify-center'>
      <QuitationContainer 
      quotationType='recibida'
      productName='Tapetes Hotel Neura'
      dateQuoteCreated='02/04/21'
      cotizationNumber='1234'
      dateQuoteAccepted='02/04/21'
      productType='Tapete'
      productDescription={'Tapete tejido con lana de alpaca y bordados de metales finos con acabados en materiales naturales'}
      userType='Comercial'
      userName='Juan Perez'
      productCost='1,000,000'
      />
      {/* <FolderPage /> */}
      
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