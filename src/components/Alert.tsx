import React from "react";
import styled from "styled-components";

type AlertProps = {
  type: "success" | "error" | "warning" | "info";
  message: string;
  onClose?: () => void;
  autoClose?: number;
  action?: JSX.Element;
};

type AlertContainerProps = {
  type: "success" | "error" | "warning" | "info";
};

const getAlertColor = (type: "success" | "error" | "warning" | "info") => {
  switch (type) {
    case "success":
      return "#1BC5BD";
    case "error":
      return "#F64E60";
    case "warning":
      return "#FFA800";
    case "info":
      return "#8950FC";
    default:
      return "#1BC5BD";
  }
};

const AlertContainer = styled.div<AlertContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: ${({ type }) => getAlertColor(type)};
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
`;
const handleCloseWithTimeout = (onClose: (() => void) | undefined, time = 5000) => {
  const timeoutId = setTimeout(() => {
    if (onClose) {
      onClose();
    }
  }, time);

  return () => clearTimeout(timeoutId);
};

const Alert: React.FC<AlertProps> = ({ type, message, onClose, autoClose, action, }) => {

  React.useEffect(() => {
    if (autoClose) {
      handleCloseWithTimeout(onClose, autoClose);
    }
  }, [autoClose, onClose]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  }

  return (
    <AlertContainer type={type}>
    <span>{message}</span>
    <span>{action}</span>
    {onClose && <CloseButton onClick={handleClose}>x</CloseButton>}
  </AlertContainer>
  );
};

export default Alert;