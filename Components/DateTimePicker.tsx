import React, { ChangeEvent, memo, useEffect, useRef, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { Input } from './Input';

const core = require('@govbr-ds/core/dist/core');

interface Props {
  id: string;
  name: string;
  label: string;
  error?: string;
  value?: string; //? Existe no campo DateTimePicker?
  danger?: string;
  required?: boolean;
  disabled?: boolean;
  withHour?: boolean;
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  register: UseFormRegister<any>;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (value: string | ChangeEvent<HTMLInputElement>) => void;
}

export const DateTimePicker = memo((props: Props) => {
  const brDateTimePickerRef = useRef<HTMLDivElement>(null);
  const [dateTimePickerCore, setDateTimePickerCore] = useState<any>();

  useEffect(() => {
    const coreDateTimePicker = new core.BRDateTimePicker(
      'br-datetimepicker',
      brDateTimePickerRef.current,
      {
        minDate: '',
        maxDate: new Date(),
      }
    );

    setDateTimePickerCore(coreDateTimePicker);
  }, [brDateTimePickerRef.current]);

  const getItem = () => {
    if (brDateTimePickerRef.current) {
      props.onChange &&
        props.onChange(dateTimePickerCore.calendar.selectedDates.at(0));
    }
  };

  return (
    <div
      id={`datetimepicker-${props.id}`}
      className={`${props.className || ''}`}
    >
      <div
        className="br-datetimepicker"
        data-mode="single"
        data-type={`${props.withHour ? 'datetime-local' : 'text'}`}
        ref={brDateTimePickerRef}
        onFocus={getItem}
      >
        <div className={`br-input has-icon ${props.danger || ''}`}>
          <label htmlFor={`datetimepicker-${props.id}-input`}>
            {props.label}
          </label>

          <Input
            id={`datetimepicker-${props.id}-input`}
            name={props.name}
            dataInput="data-input"
            disabled={props.disabled}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            type={`${props.withHour ? 'datetime-local' : 'text'}`}
            onBlur={props.onBlur}
            register={props.register}
            onChange={props.onChange}
          />

          {!props.disabled && (
            <button
              className="br-button circle small"
              type="button"
              aria-label="Abrir Timepicker"
              data-toggle="data-toggle"
              id="simples-input-btn"
            >
              <i className="fas fa-calendar-alt" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
});
