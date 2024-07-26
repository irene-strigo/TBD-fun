import React from 'react';
import { ErrorDiv, FormInput } from './CommonStyles';

type Props = {
  value?: string;
  checked?: boolean;
  type: 'text' | 'number' | 'email' | 'password' | 'checkbox' | 'date' | 'radio';
  placeholder?: string;
  name: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  value,
  type,
  placeholder,
  name,
  checked = false,
  disabled = false,
  onChange,
}: Props) => {
  return (
    <>
      <ErrorDiv></ErrorDiv>
      <FormInput
        value={value}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        checked={checked}
        onChange={onChange}
      ></FormInput>
    </>
  );
};

export default Input;
