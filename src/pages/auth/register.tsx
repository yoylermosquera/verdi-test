import React from 'react';
import { NextPageWithLayout } from '../_app';
import { getAuthLayout } from '../../components/layouts/AuthLayout';
import Button from '@/components/button';
import Icon from '@/components/icon';

const RegisterPage: NextPageWithLayout = () => {
  return (
    <div>
      <h2>REGISTER PAGE</h2>
      <Button variant="primary" size="medium">
        <span>BOTON</span>
      </Button>
      <br />
      <Button size="small" variant="black">
        <span>BOTON</span>
      </Button>
      <br />
      <Button variant="white" size="full">
        <span>BOTON</span>
      </Button>

      <br />
      <Icon size={50} color={'blue'} iconName='Metrics' />
      <Icon size={50} color={'orange'} iconName='CotizationList' />
      
      <Icon size={50} color={'pink'} iconName='Profile' />
      
      <br />
      <br />
      
      
    </div>
  );
};

RegisterPage.getLayout = getAuthLayout;

export default RegisterPage;
