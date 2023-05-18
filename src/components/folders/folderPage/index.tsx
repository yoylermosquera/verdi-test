import React from 'react';
import FolderCard from '@/components/folderCard';
import productSample from '@/assets/images/examples/productSample.png';
import ReturnContainer from '@/components/returnContainer';
import Icon from '@/components/icon';

const mockData = Array.from({ length: 20 }).map((_, i) => ({
  id: `${i + 1}`,
  img1: productSample,
  img2: productSample,
  img3: productSample,
  title1: `Tapete Heritage - ${i + 1}`,
  title2: `Tapete Heritage - ${i + 1}`,
  title3: `Tapete Heritage - ${i + 1}`,
  folderTitle: 'Todos mis favoritos',
  productsAmmount: '20',
}));

interface FolderPageProps {
  // description: string;
}

function FolderPage({}: // description,
FolderPageProps) {
  return (
    <section className="w-full h-full lg:flex lg:flex-row lg:justify-center ">
      <section className=" w-full px-4 lg-w-[65.75rem] lg:max-w-[75rem]">
        <ReturnContainer title="Mis favoritos" className="my-7 lg:my-12 " />
        <section className="w-full h-full px-4 grid grid-cols-2 gap-2 justify-between lg:grid-cols-4 lg:gap-8 ">
          {mockData.map((product, idx) => (
            <FolderCard key={idx} {...product} />
          ))}
        </section>
      </section>
    </section>
  );
}
export default FolderPage;
