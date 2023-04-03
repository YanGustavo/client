import styled from 'styled-components';
import { ReactNode, useState, useEffect } from 'react';

type SnackBarProps = {
  children: ReactNode;
  onDismiss: () => void;
  duration: number;
  visible: boolean; // Adiciona a propriedade 'visible' aqui
};

type SnackBarWrapperProps = {
  visible: boolean;
};

const SnackBarWrapper = styled.div<SnackBarWrapperProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const SnackBar = ({ children, duration = 5000, onDismiss }: SnackBarProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (children) {
      setVisible(true);

      timeoutId = setTimeout(() => {
        setVisible(false);

        if (onDismiss) {
          onDismiss();
        }
      }, duration);
    }

    return () => clearTimeout(timeoutId);
  }, [children, duration, onDismiss]);

  return <SnackBarWrapper visible={visible}>{children}</SnackBarWrapper>;
};

export default SnackBar;