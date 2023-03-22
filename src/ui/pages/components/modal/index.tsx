import React from "react";
import Modal from "react-modal";
import {Body} from "./styles";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//https://www.youtube.com/watch?v=ejj6iaTlJcA
//https://github.com/WilliamDosSantos/react-modal
Modal.setAppElement('#base_template');

function ModalPage({children, isOpen=false}: { children: React.ReactNode, isOpen: boolean}) {
  const [modalIsOpen, setIsOpen] = React.useState(isOpen);

  const openModal = React.useCallback (() => {
    setIsOpen(true);
  },[]);

  function closeModal() {
    setIsOpen(false);
  }

React.useEffect(() => {
  if(isOpen) openModal();
},[isOpen])
  return (
    <Body>     
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        {children}
        
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </Body>
  );
}

export default ModalPage;