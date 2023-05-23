import React from 'react';
import FolderCard from '@/components/folderCard';
import productSample from '@/assets/images/examples/productSample.png';
import ReturnContainer from '@/components/returnContainer';
import Button from '@/components/button';
import QuotationProduct from '../quotationProduct';

const mockData = Array.from({ length: 20 }).map((_, i) => ({
    img: productSample,
    imgTitle : `Tapete`,
    productName: `Tapete - ${i + 1}`,
    productDescription: `Tapete de fibras naturales y alambre chino`,
    quotationNumber : `0${i + 1}`,
}));

interface FolderPageProps {
  // description: string;
}

function QuotationPage({}: // description,
FolderPageProps) {
  return (
    <section className="w-full h-full lg:flex lg:flex-row lg:justify-center ">
      <section className=" w-full  flex flex-col  px-2 lg-w-[65.75rem] lg:max-w-[75rem]">
        <ReturnContainer title="Cotizaciones" className="my-7 lg:my-12 align-items-left" />
        <section className="w-full h-full px-4 grid grid-cols-1 items-center justify-items-center gap-4 lg:grid lg:grid-cols-3  ">
          {mockData.map((product, idx) => (
            <QuotationProduct key={idx} {...product} />
          ))}
        </section>
        <div className='w-full mt-6 mb-2'>
        <Button className='mx-auto' size='large'>Enviar</Button>
        </div>
      </section>
    </section>
  );
}
export default QuotationPage;
