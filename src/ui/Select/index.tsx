import React from 'react';
import { Label } from '../Label';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '../ErrorMessage';
import { InputContainer } from '../InputContainer';

type Option = {
  value: string;
  label: string;
};

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[];
  field: string;
  error: string;
};

export function Select({ options, field, error, ...rest }: SelectProps) {
  const { register } = useFormContext();

  return (
    <InputContainer>
      <Label className="text-white " htmlFor="valueType">Value Type:</Label>
      <select className="rounded" {...register(field)} {...rest}>
        <option defaultValue="" disabled />
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      {error && (<ErrorMessage error={error} />)}
    </InputContainer>

  );
};
