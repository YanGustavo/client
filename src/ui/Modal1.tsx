import React from "react";
import Modal from "react-modal";
import styled from 'styled-components';
import { ReactNode } from 'react';

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ModalContent = styled.div`
  width: 90%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.desing.colors.header.background};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  padding: 5px;
  font-size: large;
  cursor: pointer;
  position: absolute;
  top: -30px;
  right: -20px;
`;

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// https://www.youtube.com/watch?v=ejj6iaTlJcA
// https://github.com/WilliamDosSantos/react-modal
Modal.setAppElement('#base_template');

type ModalPageProps = {
  children: ReactNode;
  isOpen?: boolean; // adicionando a propriedade isOpen como opcional
};

function ModalPage({ children, isOpen = false }: ModalPageProps) {
  const [modalIsOpen, setIsOpen] = React.useState(isOpen);

  const openModal = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  React.useEffect(() => {
    if (isOpen) openModal();
  }, [isOpen, openModal]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    ><CloseButton onClick={closeModal}>Fechar</CloseButton>
      <ModalOverlay>
        <ModalContent>{children}</ModalContent>
        
      </ModalOverlay>
    </Modal>
  );
}

export default ModalPage;