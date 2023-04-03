import React from "react";
import styled from "styled-components";

interface RadioButtonProps {
  id: string;
  value: string;
  checked: boolean;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  value,
  checked,
  label,
  onChange,
}) => {
  return (
    <RadioButtonContainer>
      <RadioButtonInput
        type="radio"
        id={id}
        name={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <RadioButtonLabel htmlFor={id}>{label}</RadioButtonLabel>
    </RadioButtonContainer>
  );
};

const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RadioButtonInput = styled.input`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  outline: none;
  appearance: none;
  cursor: pointer;

  &:checked {
    border-color: #1c1c1c;
    background-color: #1c1c1c;
  }

  &:checked:after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    margin: 2px;
    border-radius: 50%;
    background-color: #fff;
  }
`;

const RadioButtonLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #1c1c1c;
  cursor: pointer;
`;

export default RadioButton;