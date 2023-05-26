import React from 'react';
import styles from '@/styles/components/checkbox/styles.module.scss';

interface CheckBoxProps extends React.ComponentPropsWithRef<'input'> {
  labelText?: string;
  containerClassName?: string;
  color?: 'gold' | 'black-verdi';
}

function CheckBox(props: CheckBoxProps) {
  const {
    className,
    labelText = '',
    color = 'gold',
    containerClassName = '',
    type,
    ...restProps
  } = props;
  const colorClass = `text-${color}`;
  return (
    <div
      style={{ color: `var(--${color})` }}
      className={`checkbox__wrapper ${colorClass} flex items-center gap-2.5 ${containerClassName}`}
    >
      <input
        className={`${styles.checkbox__container} ${colorClass} flex justify-center items-center  w-4 h-4 border-2 border-${color} ${className}`}
        type="checkbox"
        {...restProps}
      />
      {labelText && (
        <label htmlFor={props.id} className=" text-left text-input lg:mb-0 ">
          {labelText}
        </label>
      )}
    </div>
  );
}

export default CheckBox;
