import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.desing.border.color};
  border-radius: ${({ theme }) => theme.desing.border.radius};
  color: ${({ theme }) => theme.desing.buttons.primary.color};
  background-color: ${({ theme }) => theme.desing.buttons.primary.backgroundColor};
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.desing.border.color};
  }
`;

const Error = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.desing.colors.error.background};
`;

const Input = ({ label, error, ...rest }: InputProps) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput {...rest} />
      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
};

export default Input;