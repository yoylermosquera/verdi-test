import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React from 'react';
import Icon from '../../icon';
import { Colors } from '@/styles/config/base';
import FolderCard from '@/components/folderCard';
import productSample from '@/assets/images/examples/productSample.png';
import ReturnContainer from '@/components/returnContainer';

const mockData = Array.from({ length: 20 }).map((_, i) => ({
  id: `${i + 1}`,
  img1: productSample,
  img2: productSample,
  img3: productSample,
  title1: `Tapete Heritage - ${i + 1}`,
  title2: `Tapete Heritage - ${i + 1}`,
  title3: `Tapete Heritage - ${i + 1}`,
  description: 'Crin de caballo tejido',
  
}));

interface FolderPageProps {
// description: string;
 }


function ProductsPage({
// description,
}: FolderPageProps
) {
  
const matches = useMediaQuery('(min-width: 768px)');
const iconSize = matches ? 17 : 24;
  return (
   <section className='w-full h-full  px-4 pt-7 lg:pt-12'>
        <ReturnContainer
          title='Mis favoritos'
        />
     
   </section>
  );
}
export default ProductsPage;