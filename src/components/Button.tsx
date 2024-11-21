import React, { ReactNode } from "react";

interface ButtonProps<T> {
  value: T;
  onClick?: (value: T) => void;
  disabled?: boolean;
}

const GenericButton = <T extends ReactNode>({
  value,
  onClick,
  disabled,
}: ButtonProps<T>) => {
  return (
    <button onClick={() => onClick && onClick(value)} disabled={disabled}>
      {value === typeof "string" || value === typeof "number"
        ? value
        : "Click me"}
    </button>
  );
};

export const Usage = () => {
  const handleClick = (value: string | number) => {
    console.log(`Button clicked with value: ${value}`);
  };

  return (
    <div>
      <GenericButton value="Hello" onClick={handleClick} />
      <GenericButton value={23} onClick={handleClick} disabled />
    </div>
  );
};
