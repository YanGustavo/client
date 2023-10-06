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
  z-index: 999; /* Ajuste a ordem z conforme necessário */
`;

const DrawerContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  height: 100%;
  width: auto;
  min-width: 10px; /* Tamanho mínimo de 10px */
  background-color: #fff;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  z-index: 1000; /* Ajuste a ordem z conforme necessário */

  ${({ open }) => {
    if (open) {
      return 'transform: translateX(0);';
    } else {
      return 'transform: translateX(100%);';
    }
  }}
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
    <DrawerOverlay open={open}>
      <DrawerContainer open={open} ref={overlayRef}>
        {children}
      </DrawerContainer>
    </DrawerOverlay>
  );
};

export default Drawer;
