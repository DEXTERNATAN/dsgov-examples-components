import React, { ChangeEvent, memo } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  id: string;
  name: string;
  type: string;
  dataInput?: string;
  disabled?: boolean;
  defaultValue?: any;
  placeholder?: string;
  register: UseFormRegister<any>;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = memo((props: Props) => {
  return (
    <input
      id={props.id}
      type={props.type}
      disabled={props.disabled}
      data-input={props.dataInput}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      {...props.register(props.name, {
        onChange: (event: ChangeEvent<HTMLInputElement>) => {
          props.onChange && props.onChange(event);
        },
        onBlur: (event: ChangeEvent<HTMLInputElement>) => {
          props.onBlur && props.onBlur(event);
        },
      })}
    />
  );
});
