import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useProductContext } from '../ProductContext';

const Bottom = styled.div<{ className?: string }>`
  width: 200%;
  height: 20%;
  transition: transform 0.5s;

  &:hover .clicked {
    transform: translateY(-100%);
  }
`;

type Props = {
  children: ReactNode;
};

function ProductBottom({ children }: Props) {
  const { isOnCart } = useProductContext();
  const buttonRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const buttonElement = buttonRef.current;

    if (buttonElement && isOnCart) {
      buttonElement.classList.add('clicked');
    } else if (buttonElement) {
      buttonElement.classList.remove('clicked');
    }
  }, [buttonRef, isOnCart]);

  return (
    <Bottom ref={buttonRef} className="bottom">
      {children}
    </Bottom>
  );
}
export default ProductBottom;
