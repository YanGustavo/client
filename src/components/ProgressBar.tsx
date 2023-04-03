import React, { FC } from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  progress: number;
  barHeight?: number;
  barColor?: string;
  backgroundColor?: string;
}

const ProgressBarContainer = styled.div<{ height: number, backgroundColor: string }>`
  height: ${({ height }) => `${height}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  border-radius: 5px;
`;

const ProgressBarContent = styled.div<{ width: number, backgroundColor: string }>`
  height: 100%;
  width: ${({ width }) => `${width}%`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 5px;
`;

const ProgressBar: FC<ProgressBarProps> = ({
  progress,
  barHeight = 10,
  barColor = '#0078d4',
  backgroundColor = '#f2f2f2',
}) => {
  if (progress < 0 || progress > 100) {
    throw new Error('Progress value should be between 0 and 100.');
  }

  return (
    <ProgressBarContainer height={barHeight} backgroundColor={backgroundColor}>
      <ProgressBarContent width={progress} backgroundColor={barColor} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;