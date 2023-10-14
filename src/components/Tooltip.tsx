import React, { useState, useRef } from 'react';
import styled from 'styled-components';

interface TooltipProps {
  title: string; // Altere 'text' para 'title'
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactElement;
}

const TooltipContainer = styled.div<{ position: TooltipProps['position'] }>`
  // ... (seu código CSS)
`;

const Tooltip: React.FC<TooltipProps> = ({ title, position = 'top', children }) => { // Altere 'text' para 'title'
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
      <span ref={tooltipRef} title={title}> {/* Altere 'text' para 'title' */}
        {title}
      </span>
    </TooltipContainer>
  );
};

export default Tooltip;
