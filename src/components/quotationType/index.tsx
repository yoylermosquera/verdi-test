import React, { useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import Icon from '../icon';
import { Colors } from '@/styles/config/base';
import { array } from 'zod';

interface QuotationTypeProps {
  userType?: string;
  className?: string;
  onClick: (index : number) => void;
}

const textOptions = {
  first: ['TODOS', 'ENVIADAS', 'RECIBIDAS'],
  second: ['NUEVAS', 'PENDIENTES', 'HISTORIAL'],
  third: ['GENERALES', 'COTIZACIONES', 'OTRAS'],
}

function QuotationType({
  userType,
  className,
  onClick,
}:
QuotationTypeProps) {

  const [quotationType, setQuotationType] = useState(0);

  const handleOnClick = (i : number) => {
    onClick(i);
    setQuotationType(i)
  }

  return (
    <section className={`w-full h-12 flex flex-row justify-between ${className}`}>

      {[0,1,2].map((i) => {
        return <span
          key={i}
          className={`h-12 w-1/3 text-center text-button__line border border-beige hover:cursor-pointer flex flex-col justify-center mr-2 ${
            quotationType === i ? 'bg-beige' : 'bg-white'
          }`}
          onClick={() => handleOnClick(i)}
        >
          
          {userType === 'default' && textOptions.first[i]}
          {userType === 'comercial' && textOptions.second[i]}
          {userType === 'metrics' && textOptions.third[i]}
        </span>

      })}

    </section>
  );
}
export default QuotationType;
