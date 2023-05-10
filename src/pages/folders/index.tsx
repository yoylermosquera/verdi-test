import React from 'react'
import { NextPageWithLayout } from '../_app';
import { BaseLayout } from '../../components/layouts/BaseLayout';
import FolderPage from '@/components/folders/folderPage';
import QuotationContainer from '@/components/quotationContainer/quotationDetailed';
import QuotationProduct from '@/components/quotationContainer/quotationProduct';
import productSample from '@/assets/images/examples/productSample.png';

const  FoldersPage: NextPageWithLayout = () => {

  return (
    <div className='h-full flex flex-col grow lg:flex-row lg:justify-center'>
      {/* <QuotationContainer 
      quotationType='recibida'
      productName='Tapetes Hotel Neura'
      dateQuoteCreated='02/04/21'
      quotationNumber='1234'
      dateQuoteAccepted='02/04/21'
      productType='Tapete'
      productDescription={'Tapete tejido con lana de alpaca y bordados de metales finos con acabados en materiales naturales'}
      userType='Comercial'
      userName='Juan Perez'
      productCost='1,000,000'
      /> */}

      <QuotationProduct
        img={productSample}
        imgTitle='Tapete'
        productName='Tapete'
        quotationNumber='1234'
        productDescription='Tapete de fibras naturales y alambre chino'
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