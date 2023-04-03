import React from "react";
import styled from 'styled-components';

type ModalProps = {
  open: boolean;
};

const ModalOverlay = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 9999999;
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 500px;
  max-width: 90%;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const ModalHeader = styled.h3`
  margin-top: 0;
`;

const ModalBody = styled.div`
  margin-top: 20px;
`;

const ModalFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

type ModalContentProps = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  open: boolean;
};

const Modal = ({ title, onClose, children, open }: ModalContentProps) => {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById('modal-wrapper');
      if (modal && !modal.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  return (
    <ModalOverlay open={open}>
    <ModalWrapper id="modal-wrapper">
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
      </ModalFooter>
    </ModalWrapper>
  </ModalOverlay>
  );
};

export default Modal;