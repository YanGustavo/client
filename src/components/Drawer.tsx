import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const DrawerOverlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  transition: opacity 0.3s ease-in-out;
`;

const DrawerContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 105px;
  left: 0;
  height: calc(100% - 105px);
  width: 300px;
  background-color: #fff;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.5);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
`;

const Drawer = ({ open, onClose, children }: DrawerProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOverlayClick = (e: MouseEvent) => {
      if (overlayRef.current && e.target instanceof Node && !overlayRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleOverlayClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, [open, onClose]);

  return (
    <DrawerOverlay open={open} >
      <DrawerContainer open={open} ref={overlayRef}>
        {children}
      </DrawerContainer>
    </DrawerOverlay>
  );
};

export default Drawer;