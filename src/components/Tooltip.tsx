import React, { useState, useRef } from 'react';
import styled from 'styled-components';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactElement;
}

const TooltipContainer = styled.div<{ position: TooltipProps['position'] }>`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover span {
    visibility: visible;
    opacity: 1;
    transition-delay: 0.2s;
  }

  span {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    background-color: #000;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    z-index: 1;
    transition: opacity 0.2s;
    font-size: 14px;

    ${(props) =>
      props.position === 'top' &&
      `
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
    `}

    ${(props) =>
      props.position === 'bottom' &&
      `
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    `}

    ${(props) =>
      props.position === 'left' &&
      `
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
    `}

    ${(props) =>
      props.position === 'right' &&
      `
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
    `}
  }
`;

const Tooltip: React.FC<TooltipProps> = ({ text, position = 'top', children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <TooltipContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      position={position}
    >
      {children}
      <span ref={tooltipRef}>{text}</span>
    </TooltipContainer>
  );
};

export default Tooltip