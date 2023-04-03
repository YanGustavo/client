import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface DialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  actions: DialogAction[];
  children: ReactNode;
  onActionClick: (action: DialogAction) => void;
}

export interface DialogAction {
  label: string;
  onClick?: () => void;
  action?: string;
}

const DialogContainer = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const DialogBox = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 500px;
  margin: auto;
`;

const DialogTitle = styled.h2`
  font-size: 20px;
  margin-top: 0;
`;

const DialogContent = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const DialogActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DialogButton = styled.button`
  background-color: #008cba;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const DialogCancelButton = styled(DialogButton)`
  background-color: #aaa;
`;

const Dialog = ({ isOpen, title, onClose, actions, children, onActionClick }: DialogProps) => {
  const handleAction = (action?: string) => {
    onClose();
    console.log(`Dialog action: ${action ?? 'undefined'}`);
  };

  return (
    <DialogContainer isOpen={isOpen}>
      <DialogBox>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          {actions.map((action) => {
            if (action.action === 'cancel') {
              return (
                <DialogCancelButton key={action.action} onClick={onClose}>
                  {action.label}
                </DialogCancelButton>
              );
            } else {
              return (
                <DialogButton
                  key={action.action}
                  onClick={() => handleAction(action.action)}
                >
                  {action.label}
                </DialogButton>
              );
            }
          })}
        </DialogActions>
      </DialogBox>
    </DialogContainer>
  );
};

export default Dialog;