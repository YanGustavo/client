import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type MyComponentProps = {
  children: React.ReactNode;
}

const MyComponent: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <Wrapper>
      <Title>Meu Componente</Title>
      {children}
    </Wrapper>
  );
}

export default MyComponent;