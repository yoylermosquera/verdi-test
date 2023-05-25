import React from 'react';
import { NextPageWithLayout } from '../_app';
import { BaseLayout } from '../../components/layouts/BaseLayout';
import FolderProductsPage from '@/components/folders/folderProductsPage';
import FolderPage from '@/components/folders/folderPage';
import QuotationContainer from '@/components/quotationContainer/quotationDetailed';
import QuotationProduct from '@/components/quotationContainer/quotationProduct';
import productSample from '@/assets/images/examples/productSample.png';
import UserDetailsContainer from '@/components/userDetailsContainer';
import FolderCard from '@/components/folderCard';
import ProductCard from '@/components/productCard';
import QuotationPage from '@/components/quotationContainer/quotationPage';
import QuotationType from '@/components/quotationType';
import QuotationDetailedPage from '@/components/quotationContainer/quotationDetailedPage';
import FoldersContainer from '@/components/folders/foldersContainer';
import UserType from '@/components/userType';




const FoldersPage: NextPageWithLayout = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row lg:justify-center">
      
    </div>
  );
};

FoldersPage.getLayout = (page) => {
  return <BaseLayout title="Perfil">{page}</BaseLayout>;
};

export default FoldersPage;
