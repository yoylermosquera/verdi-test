import React from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import Icon from '../icon';
import { Colors } from '@/styles/config/base';

interface ReturnContainerProps {
  title?: string;
  className?: string;
}
function ReturnContainer({ title, className }: ReturnContainerProps) {
  return (
    <section
      className={`w-full h-6 flex flex-row justify-between lg:w-[17.5rem] lg:max-w-[31.25rem] ${className}`}
    > 
    <div className="hover:cursor-pointer"
    // TODO implementar next router
    onClick={() => window.history.back()}>
    <Icon
        iconName="ArrowBackward"
        size={24}
        color={Colors.black}
        className="flex justify-items-start my-auto"
        
      />
    </div>
      
      <div className="text-font_18 flex justify-items-center my-auto">
        {title}
      </div>
      <div className="lg:hidden"></div>
    </section>
  );
}
export default ReturnContainer;
