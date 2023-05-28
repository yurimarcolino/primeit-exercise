import { ErrorMessage } from '@/components/atoms/ErrorMessage';
import { InputContainer } from '@/components/atoms/InputContainer';
import { Label } from '@/components/atoms/Label';
import React from 'react';
import { useFormContext } from 'react-hook-form';

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
