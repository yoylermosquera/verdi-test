import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React from 'react';
import Icon from '../../icon';
import FolderTypeContainer from '../folderTypeContainer';
import ProductCard from '@/components/productCard';
import productSample from '@/assets/images/examples/productSample.png';
import Select from '@/components/select';
import { Colors } from '../../../styles/config/base';

const mockData = Array.from({ length: 20 }).map((_, i) => ({
  id: `${i + 1}`,
  title: `Tapete Heritage - ${i + 1}`,
  description: 'Crin de caballo tejido',
  img: productSample,
}));

interface FolderPageProps {
// description: string;
 }


function FolderPage({
// description,
}: FolderPageProps
) {
  
  return (
   <section className='w-full h-full'>
    {/* Mobile */}
    <section className='w-full h-full pt-4 px-4 flex flex-row justify-between lg:hidden'>
      <section className='flex flex-col gap-6 w-full px-2'>
        <FolderTypeContainer description='NUEVA CARPETA' folderIconName='CarpetLarge' className=' mx-auto'/>
        {
          mockData.map((product, index) =>{
            if (index % 2 === 0) return null
            return <ProductCard key={index} {...product}/>
          })
        }
      </section>
      <section className='flex flex-col gap-6 w-full px-2  '>
        {
          mockData.map((product, index) =>{
            if (index % 2 != 0) return null
            return <ProductCard key={index} {...product}/>
          })
        }
      </section>
    </section>
    
    {/* Desktop */}
    <section className=' hidden w-full h-full px-[11.25rem] pt-6 lg:flex lg:flex-col gap-4 pb-[8.625rem] '>
      <FolderTypeContainer description='NUEVA CARPETA' folderIconName='CarpetLarge'/>
      <section>
        <div
          style={{
            height: 65,
          }}
        >
        <Select
          className='h-full'
          isMulti
          height={65}
          bgColorControl={Colors.beigeLight}
          showBottomBorder={false}
          options={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
          ]}
        />
        </div>
    
    
      </section>
      <section className=' grid grid-cols-4 gap-10  '>
        {
          mockData.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
            />
          ))
        }
      </section>
    </section>
   </section>
  );
}

export default FolderPage;
