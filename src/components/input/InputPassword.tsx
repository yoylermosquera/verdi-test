import React, { useState } from 'react';
import InputBase, { InputProps } from './InputBase';

function InputPassword(props: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <InputBase
      {...props}
      type={ showPassword ? 'text' : 'password'}
      inputRigthSection={
        <span onClick={handleTogglePassword} className="text-input underline">
          {showPassword ? 'Ocultar' : 'Ver'}
        </span>
      }
    />
  );
}

export default InputPassword;
