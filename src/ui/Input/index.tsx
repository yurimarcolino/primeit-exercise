import React from 'react';
import { Label } from '../Label';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '../ErrorMessage';
import { InputContainer } from '../InputContainer';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  type: string;
  label: string;
  field: string;
  error: string;
};

export function Input({ id, type, label, field, error, ...rest }: InputProps) {
  const { register } = useFormContext()

  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <input className="rounded" id={id} type={type} {...register(field)} {...rest} />
      {error && (<ErrorMessage error={error} />)}
    </InputContainer>
  )
};
