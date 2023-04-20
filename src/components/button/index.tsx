import React from 'react';
import styles from '@/styles/components/button/styles.module.scss';

type ButtonSizes = 'small' | 'medium' | 'full';

type ButtonVariant = 'primary' | 'white' | 'black';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  size?: ButtonSizes;
  variant?: ButtonVariant
}

type ObjectButtonSize = {
    [key in ButtonSizes]: string
}

const sizesWidth: ObjectButtonSize = {
    small: 'w-[90px] py-4 px-6',
    medium: 'w-[188px] py-4 px-16',
    full: 'w-full py-4 px-21',
}

function Button(props: ButtonProps) {
    
  const { size = "medium", variant = "primary", children, ...restProps } = props;

  const classNameProp = restProps.className || '';

  const buttonSize = sizesWidth[size];
  
  const varianValue = styles[variant as any] as any;

  const className = `${styles.button__component} ${varianValue} text-button__line h-12 ${buttonSize} ${classNameProp}`;

  return (
    <button {...restProps} className={className}>
      {children}
    </button>
  );
}

export default Button;
