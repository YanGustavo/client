'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/styled-components/theme';
//Typography
import { H4, P,} from 'components/Typography';
export type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export type AccordionTitleProps = {
  onClick: () => void;
};

export type AccordionContentProps = {
  isOpen: boolean;
};

const AccordionContainer = styled.div`
  border: 1px solid ${theme.desing.border.color};
  border-radius: 5px;
  box-shadow: 0 0 0 2px ${theme.desing.box.shadow};
`;

export const AccordionTitle = styled.div<AccordionTitleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
`;

export const AccordionContent = styled.div<AccordionContentProps>`
  padding: 16px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const Accordion: React.FC<AccordionProps> = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionTitle onClick={toggleAccordion}><H4>{title}</H4></AccordionTitle>
      <AccordionContent isOpen={isOpen}><P>{children}</P></AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
