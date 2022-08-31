import React, { ChangeEvent } from "react";
import { FC } from "react";

type TextFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  className: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: Error;
};

const TextField: FC<TextFieldProps> = ({
  label,
  value,
  placeholder,
  className,
  onChange,
  error,
}) => {
  return (
    <>
      {/* TODO: MADE WRAPPER */}
      {label && <label> {label}</label>}
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p>{error.message}</p>}
    </>
  );
};

export default TextField;
