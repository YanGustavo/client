import React, { useState } from 'react';
import styled from 'styled-components';

interface TimePickerProps {
  label: string;
  value?: Date | undefined;
  onChange: (time: Date | undefined) => void;
}

const TimePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimePickerLabel = styled.label`
  margin-bottom: 4px;
`;

const TimePickerInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
`;

const TimePicker: React.FC<TimePickerProps> = ({ label, value, onChange }) => {
  const [selectedTime, setSelectedTime] = useState<Date | undefined>(value);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const timeString = event.target.value;
    const newTime = timeString ? new Date(`1970-01-01T${timeString}:00.000Z`) : undefined;
    setSelectedTime(newTime);
    onChange(newTime);
  };

  return (
    <TimePickerContainer>
      <TimePickerLabel>{label}</TimePickerLabel>
      <TimePickerInput
        type="time"
        value={selectedTime?.toISOString().substring(11, 16)}
        onChange={handleTimeChange}
      />
    </TimePickerContainer>
  );
};

export default TimePicker;