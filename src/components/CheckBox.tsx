import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.span`
  font-size: 16px;
`;

const CheckBox: React.FC<CheckboxProps> = ({ label, ...rest }) => {
  return (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" {...rest} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default CheckBox;