import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const PolicyPageComponent = ({ content }) => {
  return (
    <div>
      {content.map((item, index) => {
        if (item.type === 'paragraph') {
          return <Paragraph key={index}>{item.text}</Paragraph>;
        } else if (item.type === 'heading') {
          return <Heading key={index}>{item.text}</Heading>;
        }
        return null; // Handle other content types as needed
      })}
    </div>
  );
};

export default PolicyPageComponent;