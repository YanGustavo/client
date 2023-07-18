import React from 'react';
import { ReactNode } from 'react';
import type { Product } from "lib/types/Product";
import { useProductContext } from '../../ProductContext';
import styled, { keyframes } from 'styled-components';
import { I } from 'components/Typography';

const pulseAnimation = keyframes`
  from {
    animation-timing-function: ease-in;
    box-shadow:
      0 0 0 hsl(0, 0%, 80%),
      0.1rem 0 0 hsl(0, 0%, 100%),
      -0.2rem 0 0.75rem 0 hsla(0, 0%, 0%, 0.3);
    transform: rotateY(-10deg);
  }
  25%,
  75% {
    animation-timing-function: ease-out;
    box-shadow:
      0 0 0 hsl(0, 0%, 80%),
      0 0 0 hsl(0, 0%, 100%),
      -0.25rem -0.05rem 1rem 0.15rem hsla(0, 0%, 0%, 0.3);
    transform: rotateY(0deg);
  }
  50% {
    animation-timing-function: ease-in;
    box-shadow:
      -0.1rem 0 0 hsl(0, 0%, 80%),
      0 0 0 hsl(0, 0%, 100%),
      -0.3rem -0.1rem 1.5rem 0.3rem hsla(0, 0%, 0%, 0.3);
    transform: rotateY(10deg);
  }
}`;

const BuyButton = styled.button`
  padding: 1.5em 3.1em;
  border: none;
  border-radius: 7px;
  letter-spacing: 1.3px;
  background-color: ${(props) => props.theme.desing.buttons.tertiary.backgroundColor};
  box-shadow: 2px 2px 25px -7px ${(props) => props.theme.desing.border.color};
  cursor: pointer;
  width: 100%;
  &:active {
    transform: scale(0.97);
  }
  animation: ${pulseAnimation} 2s infinite; // Apply the animation
`;

type Props = {
  children: ReactNode;
};

function ProductBuyButton({ children }: Props) {
  const { handlerAddToCart } = useProductContext();
  return (
    <BuyButton onClick={() => handlerAddToCart()}>
      <I color={`${(props) => props.theme.desing.buttons.tertiary.color}`} fontWeight={900} fontSize="1.2">
        {children}
      </I>
    </BuyButton>
  );
}

export default ProductBuyButton;
