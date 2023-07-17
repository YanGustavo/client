import React, { useState } from 'react';
import styled from 'styled-components';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

type DatePickerProps = {
  value?: Date;
  onChange?: (date: Date) => void;
  label?: string;
  className?: string;
};

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  label,
  className,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(
    value || new Date()
  );

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newDate = new Date(value);
    setSelectedDate(newDate);
    onChange && onChange(newDate);
  };

  const toggleCalendar = () => setIsOpen((prev) => !prev);

  const CalendarIcon = styled.i`
    color: ${({ theme }) => theme.desing.border.color};
    margin-right: 8px;
    vertical-align: middle;
  `;

  const DatePickerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
  `;

  const DatePickerLabel = styled.label`
    font-size: ${({ theme }) => theme.desing.font.sizes.small};
    color: ${({ theme }) => theme.desing.colors.black};
    margin-bottom: 8px;
  `;

  const DatePickerInput = styled.input`
    border: 1px solid ${({ theme }) => theme.desing.border.color};
    border-radius: ${({ theme }) => theme.desing.border.radius};
    font-size: ${({ theme }) => theme.desing.font.sizes.small};
    padding: 12px 16px;
    width: 100%;
    transition: border-color 0.2s ease-in-out;

    &:hover {
      border-color: ${({ theme }) => theme.desing.border.color};
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.desing.border.color};
    }
  `;

  const DatePickerCalendarWrapper = styled.div`
    position: absolute;
    top: calc(100% + 16px);
    left: 0;
    z-index: 1;
    padding: 16px;
    background-color: ${({ theme }) => theme.desing.secondaryBackground.default};
    box-shadow: ${({ theme }) => theme.desing.box.shadow};
    border-radius: ${({ theme }) => theme.desing.border.radius};
    display: ${isOpen ? 'block' : 'none'};
  `;

  return (
    <DatePickerWrapper className={className}>
      {label && <DatePickerLabel>{label}</DatePickerLabel>}
      <DatePickerInput
        type="date"
        value={selectedDate.toISOString().slice(0, 10)}
        onChange={handleDateChange}
        onFocus={toggleCalendar}
        onBlur={toggleCalendar}
      />
      <CalendarIcon><CalendarMonthIcon /></CalendarIcon>
      
      <DatePickerCalendarWrapper>
        {/* Insert calendar component here */}
      </DatePickerCalendarWrapper>
    </DatePickerWrapper>
  );
};

export default DatePicker;