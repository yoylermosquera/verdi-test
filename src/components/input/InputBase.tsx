import React from 'react';
import styles from '@/styles/components/input/styles.module.scss';

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  inputRigthSection?: React.ReactNode;
  errorMsg?: string;
}

function InputBase(props: InputProps) {
  const { inputRigthSection, errorMsg, ...restProps } = props;
  const className = `w-full ${styles.input__component} 
      placeholder:italic placeholder:text-black-verdi placeholder:text-input placeholder:uppercase text-black-verdi
    `;

  return (
    <div className="w-full">
      <div className="w-full h-6 flex border-b border-black-verdi focus-visible:ring">
        <input className={className} {...restProps} />
        {inputRigthSection || null}
      </div>
      {errorMsg && (
        <span className="text-input text-need-changes italic">{errorMsg}</span>
      )}
    </div>
  );
}

export default InputBase;
