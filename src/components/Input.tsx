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
  border: 1px solid ${({ theme }) => theme.colors.border_color};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.colors.primary_button_text_color};
  background-color: ${({ theme }) => theme.colors.background};
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent_background};
  }
`;

const Error = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.error_background};
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