import { BOTTON_NAVIGATION_HEIGHT, Colors } from '@/styles/config/base';
import React from 'react';
import Button from '../button';
import Icon, { IconName } from '../icon';

interface FilterFABProps {
  className?: string;
  onClick?: () => void;
  iconName?: IconName
}

function FilterFAB({ onClick, iconName = 'Filter', className = '' }: FilterFABProps) {
  return (
    <section
      className={` z-[100] fixed right-4 lg:hidden  ${className}`}
      style={{
        bottom: `calc(${BOTTON_NAVIGATION_HEIGHT} + 12px)`,
      }}
    >
      <div
        className={`w-10 h-10 rounded-full bg-black-verdi flex justify-center items-center overflow-hidden`}
      >
        <Button
          onClick={onClick}
          variant="black"
          size="full"
          className="bg-black-verdi"
        >
          <Icon iconName={iconName} size={20} color={Colors.white} />
        </Button>
      </div>
    </section>
  );
}

export default FilterFAB;
