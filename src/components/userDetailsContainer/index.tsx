import React from 'react';
import Icon from '@/components/icon';
import { Colors } from '@/styles/config/base';

interface FolderTypeHeroProps {
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
}: FolderTypeHeroProps) {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    // ver el tema del height?
    <section
      className={`w-[20.5rem] h- lg:w-[21.75rem] border rounded-lg py-4 pl-6 pr-2 bg-beige-light ${className} `}
    >
      <div className="flex flex-col gap-4">
        <section className="w-full flex flex-row justify-between">
          <span className="text-title">{userName}</span>
          <div className="hover:cursor-pointer" 
          onClick={() => {}}>
            <Icon
              size={24}
              iconName="TickBoxLarge"
              color={Colors.greenAccept}
            />
          </div>
        </section>

        <section className="w-full flex flex-row justify-between">
          <span className="text-title">{dateOfBirth}</span>
          <div className="hover:cursor-pointer" 
          onClick={() => {}}>
            <Icon 
            size={24} 
            iconName="CrossBoxLarge" 
            color={Colors.redCancel} />
          </div>
        </section>

        <span className="text-title">
          {city}, {country}
        </span>

        {showDetails && (
          <>
            <span className="text-title">{adress}</span>

            <span className="text-title">{companyName}</span>

            <span className="text-title">{companyUrl}</span>

            <span className="text-title">{email}</span>

            <span className="text-title">{methodOfknow}</span>

            <span className="text-title">{userType}</span>
          </>
        )}
        <section className="flex flex-row justify-end">
          <span
            className=" text-input underline underline-offset-1 hover:cursor-pointer my-auto"
            onClick={() => {
              setShowDetails(!showDetails);
            }}
          >
            {showDetails ? 'Menos Información' : 'Mas Información'}
          </span>
        </section>
      </div>
    </section>
  );
}

export default UserDetailsContainer;
