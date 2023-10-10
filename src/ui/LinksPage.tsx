import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animação de escala ao passar o mouse
const scaleIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

// Animação de rotação ao passar o mouse
const rotateIn = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(10deg);
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #333;
  border-radius: 20px;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  position: relative;

  // Efeito de escala ao passar o mouse
  &:hover {
    animation: ${scaleIn} 0.3s ease-in-out forwards;
  }

  // Efeito de rotação ao passar o mouse
  &:hover {
    animation: ${rotateIn} 0.3s ease-in-out forwards;
  }

  // Imagem fixa acima do link
  &::before {
    content: '';
    position: absolute;
    top: -50px; /* Ajuste a posição vertical conforme necessário */
    left: 50%; /* Centraliza horizontalmente */
    transform: translateX(-50%);
    width: 100px; /* Largura da imagem */
    height: 100px; /* Altura da imagem */
    background-image: url('/img/logo_name1.png'); /* URL da imagem */
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Icon = styled.i`
  font-size: 48px;
`;

const LinksPage = () => {
  return (
    <LinksContainer>
      <Link href="/eaichefinho">
        <Icon className="fas fa-utensils"></Icon>
        EaiChefinho
      </Link>
      <Link href="/closetdaayla">
        <Icon className="fas fa-tshirt"></Icon>
        Closet da Ayla
      </Link>
    </LinksContainer>
  );
};

export default LinksPage;
