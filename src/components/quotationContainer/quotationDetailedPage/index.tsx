import React from 'react';
import productSample from '@/assets/images/examples/productSample.png';
import ReturnContainer from '@/components/returnContainer';
import Button from '@/components/button';
import QuotationType from '@/components/quotationType';
import QuotationContainer from '../quotationDetailed';

const mockData = Array.from({ length: 6 }).map((_, i) => ({
  quotationType: 'recibida',
  productName: 'Tapetes Hotel Neura',
  dateQuoteCreated: '02/04/21',
  quotationNumber: '1234',
  dateQuoteAccepted: '02/0/21',
  productType: 'Tapete',
  productDescription: 'Tapete tejido con lana de alpaca y bordados de metales finos con acabados en materiales naturales',
  userType: 'Comercial',
  userName: 'Juan Perez',
  productCost: '1,000,000',
}));

interface FolderPageProps {
  // description: string;
}

function QuotationDetailedPage({}: // description,
FolderPageProps) {
  return (
    <section className="w-full h-full lg:w-[67.75rem] lg:mt-12 ">
      <div className='px-4 flex flex-col mb-7 lg:mb-16'>
        <QuotationType className='my-4'/>
        <section className='w-full flex flex-row justify-center my-4'>
          <span className=' text-paragraph underline underline-offset-8'>
            NUMERO DE COTIZACIONES
          </span>
        </section >
        <section className="w-full grid grid-cols-1 gap-6 mt-4 lg:grid-cols-3">
          {mockData.map((product) => (
            <QuotationContainer {...product} />
          ))}
        </section>
      </div>
    </section>
  );
}
export default QuotationDetailedPage;
