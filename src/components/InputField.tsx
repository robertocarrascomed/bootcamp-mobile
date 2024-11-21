import React, { ChangeEvent, useState } from "react";

type InputProps = {
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
  required?: boolean;
  error?: string;
};

const InputField: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  required = false,
  error,
}) => {
  const [inputValue, setInputValue] = useState<string | number>(value);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {required && !inputValue && <span>This field is required</span>}
      {error && <span>{error}</span>}
    </div>
  );
};

export const Usage: React.FC = () => {
  const [name, setName] = useState<string | number>("");
  const [age, setAge] = useState<string | number>(0);

  const handleNameChange = (value: string | number) => {
    setName(value);
  };

  const handleAgeChange = (value: string | number) => {
    setAge(value);
  };

  return (
    <div>
      <InputField
        label="Name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <InputField label="Age" value={age} onChange={handleAgeChange} />
    </div>
  );
};
