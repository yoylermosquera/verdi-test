import React from 'react';
import Link from 'next/link';
import Icon from '../icon/index';
import { NavLinkItemProps } from './NavLink';

interface BottomNavigationBarProps {
  links?: NavLinkItemProps[];
}

function BottomNavigationBar({ links = [] }: BottomNavigationBarProps) {
  return (
    <div className="lg:hidden fixed bottom-[0] left-0 w-full h-[5.625rem] py-3 bg-beige-light z-0">
      <section className="flex w-full justify-evenly">
        {links.map((linkItem, index) => (
          <Link
            key={index}
            href={linkItem.link}
            className={`w-[4.375rem] h-16 ${
              linkItem.active ? 'bg-white' : ''
            } rounded flex flex-col justify-center items-center gap-4 `}
          >
            <Icon iconName={linkItem.iconName!} size={18} />
            <span className="text-menu text-[10px]">{linkItem.text}</span>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default BottomNavigationBar;
