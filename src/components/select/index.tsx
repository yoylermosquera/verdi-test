import React from 'react';
import SelectComponent, { Props } from 'react-select';
import { Colors } from '@/styles/config/base';
interface SelectProps extends Props {}

export default function Select(props: SelectProps) {
  const { className, ...restProps } = props;
  return (
    <SelectComponent
      {...restProps}
      classNamePrefix={`select ${className}`}
      classNames={{
        container(props) {
          return `w-full`;
        },
        control(props) {
          return `border-b-black-verdi`;
        },
        placeholder(props) {
          return `uppercase text-input text-black-verdi`;
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
            borderBottom: '1px solid',
            minHeight: '24px',
            boxShadow: 'none',
            cursor: 'poiner',
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
          };
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
  );
}
