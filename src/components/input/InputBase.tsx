import React from 'react';
import styles from '@/styles/components/input/styles.module.scss';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  inputRigthSection?: React.ReactNode;
}

function InputBase(props: InputProps) {
  const { inputRigthSection, ...restProps } = props;
  const className = `w-full ${styles.input__component} 
      placeholder:italic placeholder:text-black-verdi placeholder:text-input placeholder:uppercase text-black-verdi
    `;

  return (
    <div className="w-full h-6 flex border-b border-black-verdi focus-visible:ring">
      <input {...restProps} className={className} />
      {inputRigthSection || null}
    </div>
  );
}

export default InputBase;
