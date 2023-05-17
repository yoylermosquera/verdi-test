import React, { useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import Icon from '../icon';
import { Colors } from '@/styles/config/base';

interface QuotationTypeProps {
  className?: string;
}

function QuotationType({
  className,
}: // description,
QuotationTypeProps) {
  const [quotationType, setQuotationType] = useState('todas');

  return (
    <section className={`w-full h-12 flex flex-row justify-between ${className}`}>
      <span
        className={`h-12 w-1/3 text-center text-button__line border border-beige hover:cursor-pointer flex flex-col justify-center mr-2 ${
          quotationType === 'todas' ? 'bg-beige' : 'bg-white'
        }`}
        onClick={() => setQuotationType('todas')}
      >
        TODAS
      </span>
      <span
        className={`h-12 w-1/3 text-center text-button__line border border-beige hover:cursor-pointer flex flex-col justify-center mx-1 ${
          quotationType === 'enviadas' ? 'bg-beige ' : 'bg-white'
        }`}
        onClick={() => setQuotationType('enviadas')}
      >
        ENVIADAS
      </span>
      <span
        className={`h-12 w-1/3 text-center text-button__line border border-beige hover:cursor-pointer flex flex-col justify-center ml-2 ${
          quotationType === 'recibidas' ? 'bg-beige ' : 'bg-white'
        }`}
        onClick={() => setQuotationType('recibidas')}
      >
        RECIBIDAS
      </span>
    </section>
  );
}
export default QuotationType;
