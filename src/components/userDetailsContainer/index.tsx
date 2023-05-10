import React from 'react';
import Icon from '@/components/icon';
import { Colors } from '@/styles/config/base';

interface FolderTypeContainerProps {
  userName: string;
  dateOfBirth: string;
  city?: string;
  country?: string;
  adress?: string;
  companyName?: string;
  companyUrl?: string;
  email?: string;
  methodOfknow?: string;
  userType?: string;


  className?: string;
 }

function UserDetailsContainer({
    userName,
    dateOfBirth,
    city,
    country,
    adress,
    companyName,
    companyUrl,
    email,
    methodOfknow,
    userType,
  
    className,
}: FolderTypeContainerProps
) {

  return (
    // ver el tema del height?
    <section className={`w-[20.5rem]  lg:w-[21.75rem] flex flex-col gap-4 border rounded-lg py-4 pl-6 pr-2 ${className} bg-beige-light`} >
      <section className='w-full flex flex-row justify-between'>
        <span className='text-title'>{userName}</span>
        <Icon size={24} iconName='TickBoxLarge' color={Colors.greenAccept} />
      </section>

      <section className='w-full flex flex-row justify-between'>
        <span className='text-title'>{dateOfBirth}</span>
        <Icon size={24} iconName='CrossBoxLarge' color={Colors.redCancel} />
      </section>

      <span className='text-title'>{city}, {country}</span>

      <span className='text-title'>{adress}</span>

      <span className='text-title'>{companyName}</span>

      <span className='text-title'>{companyUrl}</span>

      <span className='text-title'>{email}</span>

      <span className='text-title'>{methodOfknow}</span>

      <span className='text-title'>{userType}</span>
      <section className='flex flex-row justify-end'>
            <span
            className=' text-input underline underline-offset-1 hover:cursor-pointer my-auto'
            onClick={() => { }}
            >
            Menos Información
            </span>
        </section>

    </section>
  );
}

export default UserDetailsContainer;
