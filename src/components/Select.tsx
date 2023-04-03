import React from 'react';
import styled from 'styled-components';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SelectElement = styled.select`
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 0.5rem;
`;

const Select: React.FC<Props> = ({ options, value, onChange, label }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <SelectWrapper>
      {label && <Label>{label}</Label>}
      <SelectElement value={value} onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectElement>
    </SelectWrapper>
  );
};

export default Select;