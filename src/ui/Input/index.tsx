import React from 'react';
import { Label } from '../Label';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '../ErrorMessage';
import { InputContainer } from '../InputContainer';

type InputProps = {
  id: string;
  type: string;
  label: string;
  field: string;
  index: number;
  error: string
};

export function Input({ id, type, label, field, index, error }: InputProps) {
  const { register } = useFormContext();

  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <input className="w-full p-2 rounded text-lg" id={id} type={type} {...register(`investment.${index}.${field}`)} />
      {error && (<ErrorMessage error={error} />)}
    </InputContainer>
  )
};
