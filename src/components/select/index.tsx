import React from 'react';
import SelectComponent, { Props } from 'react-select';

import { Colors } from '@/styles/config/base';

interface SelectProps extends Props {
  errorMsg?: string;
  height?: number;
  bgColorControl?: string;
  showBottomBorder?: boolean;
}

export default function Select(props: SelectProps) {
  const { className, errorMsg = '', height, bgColorControl, showBottomBorder = true, ...restProps } = props;
  return (
    <div className="w-full">
      <SelectComponent
        {...restProps}
        classNamePrefix={`select ${className}`}
        classNames={{
          container(props) {
            return `w-full h-full`;
          },
          control(props) {
            return `border-b-black-verdi h-full`;
          },
          placeholder(props) {
            return `uppercase text-input text-red-500`;
          },
          indicatorsContainer(props) {
            return `text-black-verdi`;
          },
        }}
        styles={{
          valueContainer(base, props) {
            return {
              ...base,
              padding: '0',
            };
          },
          option(base, props) {
            return {
              ...base,
              backgroundColor: props?.isSelected
                ? Colors.beige
                : props?.isFocused
                ? Colors.beigeLight
                : base?.backgroundColor,
              color: Colors.blackVerdi,
              cursor: 'poiner',

              ':active': {
                backgroundColor: '',
              },
            };
          },
          control(base, props) {
            return {
              ...base,
              border: 'none',
              borderRadius: 'none',
              borderBottom: showBottomBorder ? '1px solid' : '',
              minHeight: '24px',
              boxShadow: 'none',
              cursor: 'poiner',
              backgroundColor: bgColorControl || base.backgroundColor,
              height: height || base.height,
              ':hover': {
                border: 'none',
                borderBottom: '1px solid',
                borderColor: Colors.blackVerdi,
                color: Colors.blackVerdi,
              },
            };
          },
          placeholder(base, props) {
            return { ...base, color: Colors.blackVerdi, fontStyle: 'italic' };
          },
          input(base, props) {
            return {
              ...base,
              margin: 0,
              padding: 0,
              color: Colors.gold,
            };
          },
          singleValue(base, props) {
            return { ...base, color: Colors.blackVerdi };
          },
          dropdownIndicator(base, props) {
            const { menuIsOpen } = props.selectProps;
            return {
              ...base,
              padding: 0,
              transform: menuIsOpen ? 'rotate(180deg)' : '',
              color: Colors.blackVerdi,
              ':hover': {
                color: Colors.blackVerdi,
              },
            };
          },
        }}
        components={{
          IndicatorSeparator: null,
        }}
      />
      {errorMsg && (
        <span className="text-input text-need-changes italic">{errorMsg}</span>
      )}
    </div>
  );
}
