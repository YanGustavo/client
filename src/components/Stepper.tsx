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
    background-color: ${({ theme }) => theme.desing.border.color};
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
        ? theme.desing.buttons.primary.color
        : isCompleted
        ? theme.desing.buttons.primary.color
        : theme.desing.border.color};
    color: ${({ theme, isActive, isCompleted }) =>
      isActive || isCompleted ? theme.desing.colors.white : theme.desing.border.color};
    border: 2px solid
      ${({ theme, isActive, isCompleted }) =>
        isActive
          ? theme.desing.buttons.primary.color
          : isCompleted
          ? theme.desing.buttons.primary.color
          : theme.desing.border.color};
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
        ? theme.desing.buttons.primary.color
        : theme.desing.border.color};
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
    isActive || isCompleted ? theme.desing.colors.background.lightRadial : theme.desing.colors.background.default};
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