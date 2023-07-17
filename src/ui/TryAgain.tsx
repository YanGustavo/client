import React from 'react';
import styled from 'styled-components';

interface TryAgainProps {
  onRetry: () => void;
}

const TryAgain: React.FC<TryAgainProps> = ({ onRetry }) => {
  const handleRetry = () => {
    onRetry();
  };

  return (
    <Container>
      <Image src="/images/try_again.png" alt="Error" />
      <Button onClick={handleRetry}>Tente Novamente</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
`;

export default TryAgain;
