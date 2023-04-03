'use client'
import React from "react";
import styled from "styled-components";
//import { logError } from "utils/error-logger";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  const handleReport = () => {
    //logError(error);
  };

  return (
    <ErrorContainer>
      <ErrorMessage>
        <p>Algo errado não está certo</p>
        <pre>{error.message}</pre>
        <ButtonContainer>
          <button onClick={resetErrorBoundary}>Tentar Novamente</button>
          <button onClick={handleReport}>Reportar</button>
        </ButtonContainer>
      </ErrorMessage>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 16px;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;

  button {
    margin: 0 8px;
  }
`;


export default ErrorFallback;