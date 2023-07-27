import React, { useEffect, useRef, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

const core = require('@govbr-ds/core/dist/core');

interface Props {
  id: string;
  data: any[];
  name: string;
  label: string;
  value?: string; //? Há value?
  error?: string;
  disabled?: boolean;
  className?: string;
  maxLength?: number; //? Há maxLength no Select?
  dataTestId?: string;
  placeholder: string;
  // O tipo ObjetoSimples é tido como padrão, onde o código e a descrição são utilizados
  // como valor e label. Para outros tipos, adicione os atributos na lista.
  valueLabelItems?: { value: string; label: string };
  register: UseFormRegister<any>;
  onChange?: (value: string) => void;
}

export const Select = (props: Props) => {
  const [selectCore, setSelectCore] = useState<any>();
  const brSelectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    brSelectRef.current && instanciarComponenteSelect();
  }, [props.data]);

  const getItem = () => {
    if (brSelectRef.current) {
      const brSelectInput: HTMLInputElement =
        selectCore?.component.querySelector('.br-input input');
      const primeiroItemLista: HTMLInputElement =
        selectCore?.optionsList[0].element;

      if (selectCore?.optionsList[0]) {
        selectCore.optionsList[0].selected = false;
      }

      if (typeof selectCore?.selectedValue === 'string') {
        props.onChange && props.onChange(selectCore?.selectedValue);
      } else {
        props.onChange && props.onChange('');
        primeiroItemLista?.removeAttribute('checked');
        primeiroItemLista?.classList.remove('selected');

        if (brSelectInput?.value) {
          brSelectInput.value = '';
        }
      }
    }
  };

  const instanciarComponenteSelect = () => {
    const coreSelect = new core.BRSelect('br-select', brSelectRef.current);

    setSelectCore(coreSelect);
  };

  return (
    <div className={`${props.className || ''}`}>
      <div
        id={`select-${props.id}`}
        className="br-select"
        ref={brSelectRef}
        onClick={getItem}
      >
        <div className="br-input">
          <label htmlFor={`select-${props.id}-input`}>{props.label}</label>

          <input
            type="text"
            id={`select-${props.id}-input`}
            placeholder={props.placeholder}
          />

          <button
            className="br-button"
            type="button"
            aria-label="Exibir lista"
            tabIndex={-1}
            data-trigger="data-trigger"
          >
            <i className="fas fa-angle-down" aria-hidden="true" />
          </button>
        </div>

        <div className="br-list" tabIndex={0}>
          <div className="br-item" tabIndex={-1}>
            <div className="br-radio">
              <input type="radio" value={-1} id={`-1-${props.id}`} />
              <label htmlFor={`-1-${props.id}`}>{props.placeholder}</label>
            </div>
          </div>

          {props.data?.map((elemento: any, index: number) => (
            <div className="br-item" tabIndex={-1} key={index}>
              <div className="br-radio">
                <input
                  id={`${props.id}-${index}`}
                  type="radio"
                  value={
                    elemento[props.valueLabelItems?.value || ''] ||
                    elemento.codigo
                  }
                />
                <label htmlFor={`${props.id}-${index}`}>
                  {elemento[props.valueLabelItems?.label || ''] ||
                    elemento.descricao}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
