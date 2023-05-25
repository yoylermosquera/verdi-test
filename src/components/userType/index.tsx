import React, { useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import Icon from '../icon';
import { Colors } from '@/styles/config/base';

interface UserTypeProps {
  userType?: string;
  className?: string;
}

function UserType({
  userType,
  className,
}:
UserTypeProps) {
  const [UserType, setUserType] = useState('first');

  return (
    <section className={`w-full h-12 flex flex-row justify-between ${className}`}>
      <span
        className={`h-12 w-1/2 text-center text-button__line border border-beige hover:cursor-pointer flex flex-col justify-center mr-2 ${
          UserType === 'first' ? 'bg-beige' : 'bg-white'
        }`}
        onClick={() => setUserType('first')}
      >
         USUARIOS
      </span>
      <span
        className={`h-12 w-1/2 text-center text-button__line border border-beige hover:cursor-pointer flex flex-col justify-center mx-1 ${
          UserType === 'second' ? 'bg-beige ' : 'bg-white'
        }`}
        onClick={() => setUserType('second')}
      >
        SOLICITUDES
      </span>
    </section>
  );
}
export default UserType;