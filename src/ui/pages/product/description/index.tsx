import { useState } from 'react';
import styled, { css } from 'styled-components';

type DescriptionProps = {
  description: string;
};

const Description = ({ description }: DescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Body isExpanded={isExpanded}>
      <Title>Descrição:</Title>
      <Text dangerouslySetInnerHTML={{ __html: description }}/>
      <Button onClick={toggleExpanded}>
        {isExpanded ? 'Mostrar menos' : 'Mostrar mais'}
      </Button>
    </Body>
  );
};

const Body = styled.div<{ isExpanded: boolean }>`
  margin-top: 1rem;
  position: relative;
  height: ${({ isExpanded }) => (isExpanded ? 'auto' : '200px')};
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.5;
  padding-bottom: 50px; /* altura do botão */
`;

const Container = styled.div<{ isExpanded: boolean }>`
  position: relative;
  height: ${({ isExpanded }) => (isExpanded ? 'auto' : '200px')};
  overflow: hidden;
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  border: none;
  padding: 10px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  cursor: pointer;
`;

export default Description;