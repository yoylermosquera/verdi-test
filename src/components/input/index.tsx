import React, { useState } from 'react';
import styles from '@/styles/components/input/styles.module.scss'

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}


function Input(props: InputProps) {

  const { type } = props;

  const [showPassword, setShowPassword] = useState(false);

  const className = `w-full ${styles.input__component} 
    placeholder:italic placeholder:text-input placeholder:uppercase
  `;

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='w-full h-8 flex border-b border-black-verdi focus-visible:ring'>
      <input {...props} className={className} type={ showPassword ? 'text' : type }  />
      {
        type === 'password' ? (
          <span onClick={handleTogglePassword} className='text-input underline'>
            { showPassword ? 'Ocultar' : 'Ver' }
          </span>
        ) : null
      }
    </div>
  )
}

export default Input;
