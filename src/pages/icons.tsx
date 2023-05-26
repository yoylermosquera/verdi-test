import React from 'react';
import * as IconsList from '../components/icon/Icons';
import Icon from '@/components/icon';
import { NextPageWithLayout } from './_app';
import { BaseLayout } from '@/components/layouts';

const iconsArray = Object.keys(IconsList);

const IconsPage: NextPageWithLayout = () => {
  return (
    <div >
      <div className="grid grid-cols-3 gap-3">
        {iconsArray.map((icon, index) => {
          return (
            <div key={icon}>
              <span>{icon}</span>
              <Icon key={index} iconName={icon as any} size={45} />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

IconsPage.getLayout = (page) => {
  return (
    <BaseLayout title='ICONS'>
      {page}
    </BaseLayout>
  )
}

export default IconsPage;
