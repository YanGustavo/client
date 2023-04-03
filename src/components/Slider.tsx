import React from 'react';
import styled from 'styled-components';

type SliderProps = {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
};

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SliderInput = styled.input`
  flex: 1;
`;

const SliderLabel = styled.label`
  margin-right: 16px;
`;

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  value,
  onChange,
}: SliderProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    onChange(newValue);
  };

  return (
    <SliderContainer>
      <SliderLabel>{value}</SliderLabel>
      <SliderInput
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleInputChange}
      />
    </SliderContainer>
  );
};

export default Slider;