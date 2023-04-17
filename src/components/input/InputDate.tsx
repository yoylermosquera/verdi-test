import React, { useState } from 'react';
import InputBase, { InputProps } from './InputBase';

function InputDate(props: InputProps) {
  const [isFocus, setIsFocus] = useState(false);

  const { onFocus, onBlur } = props;

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!e.target.value) {
      setIsFocus(false);
    }
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  return (
    <InputBase
      {...props}
      type={isFocus ? 'date' : 'text'}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    />
  );
}

export default InputDate;
