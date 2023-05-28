import { ErrorMessage } from '@/components/atoms/ErrorMessage';
import { InputContainer } from '@/components/atoms/InputContainer';
import { Label } from '@/components/atoms/Label';
import React from 'react';
import { useFormContext } from 'react-hook-form';

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  id: string;
  field: string;
  error: string;
  index: number;
  label: string;
};

export function Select({ options, field, error, index, label, id }: SelectProps) {
  const { register } = useFormContext();

  return (
    <InputContainer>
      <Label htmlFor="valueType">{label}</Label>
      <select id={id} className="w-full p-2 rounded" {...register(`investment.${index}.${field}`)}>
        <option defaultValue="" disabled />
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      {error && (<ErrorMessage error={error} />)}
    </InputContainer>

  );
};
