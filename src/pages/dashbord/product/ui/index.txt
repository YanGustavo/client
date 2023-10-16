import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column; /* Altera a direção para vertical */
  background-color: transparent; /* Remove o fundo preto */
  color: ${(props) => props.theme.desing.colors.background.default}; /* Usa a cor do tema para o texto */
  font-size: 1.2rem; /* Aumenta o tamanho do texto */
  padding: 10px;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 10px; /* Espaçamento entre os itens do menu */
  cursor: pointer;
  display: flex; /* Para alinhar ícone e texto horizontalmente */
  align-items: center; /* Alinha o ícone e o texto verticalmente */

  &.active {
    font-weight: bold;
    color: mediumorchid; /* Cor do texto quando ativo */
  }
`;

const ActiveIcon = styled.span`
  width: 10px; /* Largura do ícone */
  height: 10px; /* Altura do ícone */
  border-radius: 50%; /* Transforma em um círculo (pode usar outro ícone se preferir) */
  background-color: mediumorchid; /* Cor do ícone quando ativo */
  margin-right: 5px; /* Espaçamento entre o ícone e o texto */
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Menu = ({ activeStep, handleStepChange }) => {
  const menuItems = [
    'Dados Básicos',
    'Características',
    'Imagens',
    'Estoque',
    'Tributação',
    'Variações',
  ];

  return (
    <MenuContainer>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            className={index === activeStep ? 'active' : ''}
            onClick={() => handleStepChange(index)}
          >
            {index === activeStep && <ActiveIcon />} {/* Ícone ativo */}
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;
