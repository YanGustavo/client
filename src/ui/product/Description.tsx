import React, { useState } from 'react';
import styled from 'styled-components';

import Accordion, { AccordionTitleProps, AccordionContentProps } from 'components/Accordion';

type DescriptionProps = {
  title: string;
  description: string;
};

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 1rem;
`;

const Description: React.FC<DescriptionProps> = ({
  title,
  description,
}: DescriptionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const accordionTitleProps: AccordionTitleProps = {
    onClick: toggleAccordion,
  };

  const accordionContentProps: AccordionContentProps = {
    isOpen,
  };

  return (
    <DescriptionContainer>
      <Accordion title={title} {...accordionTitleProps} {...accordionContentProps}>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </Accordion>
    </DescriptionContainer>
  );
};

export default Description;
