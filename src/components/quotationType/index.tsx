import React, { useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import Icon from '../icon';
import { Colors } from '@/styles/config/base';

interface QuotationTypeProps {
  userType?: string;
  className?: string;
}

function QuotationType({
  userType,
  className,
}:
QuotationTypeProps) {
  const [quotationType, setQuotationType] = useState('first');

  return (
    <section className={`w-full h-12 flex flex-row justify-between ${className}`}>
      <span
        className={`h-12 w-1/3 text-center text-button__line border border-beige hover:cursor-pointer flex flex-col justify-center mr-2 ${
          quotationType === 'first' ? 'bg-beige' : 'bg-white'
        }`}
        onClick={() => setQuotationType('first')}
      >
         {userType === 'comercial' ? 'NUEVAS' : 'TODOS'}
      </span>
      <span
        className={`h-12 w-1/3 text-center text-button__line border border-beige hover:cursor-pointer flex flex-col justify-center mx-1 ${
          quotationType === 'second' ? 'bg-beige ' : 'bg-white'
        }`}
        onClick={() => setQuotationType('second')}
      >
        {userType === 'comercial' ? 'PENDIENTES' : 'ENVIADAS'}
      </span>
      <span
        className={`h-12 w-1/3 text-center text-button__line border border-beige hover:cursor-pointer flex flex-col justify-center ml-2 ${
          quotationType === 'third' ? 'bg-beige ' : 'bg-white'
        }`}
        onClick={() => setQuotationType('third')}
      >
        {userType === 'comercial' ? 'HISTORIAL' : 'RECIBIDAS'}
      </span>
    </section>
  );
}
export default QuotationType;
