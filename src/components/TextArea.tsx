import React, { TextareaHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, error, ...rest }) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <StyledTextArea hasError={!!error} {...rest} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

interface StyledTextAreaProps {
  hasError?: boolean;
}

const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border_color};
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border-color: ${theme.colors.error_color};
    `};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.border_color};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error_color};
  font-size: 14px;
  margin-top: 4px;
`;

export default TextArea;