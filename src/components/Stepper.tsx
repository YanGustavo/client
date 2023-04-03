import React from "react";
import styled from "styled-components";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

interface StepProps {
  isActive: boolean;
  isCompleted: boolean;
}

interface StepLabelProps {
  isActive: boolean;
  isCompleted: boolean;
}

const StepperContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Step = styled.div<StepProps>`
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    top: 9px;
    left: -50%;
    background-color: ${({ theme }) => theme.colors.gray_300};
    z-index: -1;
  }

  &:first-child:before {
    display: none;
  }

  &:after {
    content: ${({ isCompleted }) => (isCompleted ? '"✓"' : '""')};
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme, isActive, isCompleted }) =>
      isActive
        ? theme.colors.primary_button_text_color
        : isCompleted
        ? theme.colors.success_color
        : theme.colors.gray_300};
    color: ${({ theme, isActive, isCompleted }) =>
      isActive || isCompleted ? theme.colors.white : theme.colors.gray_300};
    border: 2px solid
      ${({ theme, isActive, isCompleted }) =>
        isActive
          ? theme.colors.primary_button_text_color
          : isCompleted
          ? theme.colors.success_color
          : theme.colors.gray_300};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 12px;
    position: relative;
    z-index: 1;
  }

  &:last-child:after {
    border-color: ${({ theme, isActive, isCompleted }) =>
      isActive || isCompleted
        ? theme.colors.success_color
        : theme.colors.gray_300};
  }

  ${({ isActive }) =>
    isActive &&
    `
    &:before {
      background-color: ${({ theme }) => theme.colors.primary_button_text_color};
    }
  `}

  ${({ isCompleted }) =>
    isCompleted &&
    `
    &:before {
      background-color: ${({ theme }) => theme.colors.success_color};
    }
  `}
`;

const StepLabel = styled.div<StepLabelProps>`
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  color: ${({ theme, isActive, isCompleted }) =>
    isActive || isCompleted ? theme.colors.black : theme.colors.gray_300};
`;

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
}: StepperProps) => {
  return (
    <StepperContainer>
      {steps.map((step, index) => (
        <Step
          key={index}
          isActive={index === currentStep}
          isCompleted={index < currentStep}
        >
          <StepLabel
            isActive={index === currentStep}
            isCompleted={index < currentStep}
          >
            {step}
          </StepLabel>
        </Step>
      ))}
    </StepperContainer>
  );
};

export default Stepper;