import React, { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { DateTimePicker } from './Components/DateTimePicker';

import { Select } from './Components/Select';

export default function App() {
  const { register } = useForm();

  const tiposProcessoLista = [
    {
      id: 1,
      descricao: 'Conversão',
      codigo: 'CODIGO',
    },
    {
      id: 2,
      descricao: 'Defesa',
      codigo: 'DEFESA',
    },
    {
      id: 3,
      descricao: 'Recurso',
      codigo: 'RECUROS',
    },
  ];

  return (
    <div>
      <Select
        id="decisao-filtro-tipo-processo-input"
        label="Tipo"
        name="tipoProcesso"
        className="col-12 col-md-3 mb-3"
        placeholder="Selecione o tipo de processo"
        data={tiposProcessoLista}
        register={register}
      />

      <DateTimePicker
        id="defesa-previa-formulario-dados-requerente-data-nascimento-input"
        name="requerente.dataNascimento"
        label="Data de Nascimento"
        className="col-12 col-md-3"
        placeholder="dd/mm/aaaa"
        register={register}
        onChange={(value: string | ChangeEvent<HTMLInputElement>) => {
          console.log(value);
        }}
      />
    </div>
  );
}
