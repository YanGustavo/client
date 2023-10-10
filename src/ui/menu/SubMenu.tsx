import React from 'react';
import styled, { css } from 'styled-components';

const SubMenuContainer = styled.ul<{ isVisible: boolean }>`
  list-style: none;
  padding-left: 20px; /* Adicione o recuo para criar um submenu identado */
  display: none; /* Inicialmente, o submenu está oculto */

  ${(props) =>
    props.isVisible &&
    css`
      display: block; /* Se isVisible for true, o submenu será exibido */
    `}
`;

const SubMenuItem = styled.li`
  margin: 0;
`;

const SubMenuLink = styled.a`
  display: block;
  color: inherit;
  text-transform: lowercase;
  font-weight: 200;
  text-decoration: none;
  padding: 0.5rem 1rem;
`;

interface SubMenuProps {
  subcategories: any[]; // Certifique-se de substituir 'any' pelo tipo correto das subcategorias
  isVisible: boolean;
}

const SubMenu: React.FC<SubMenuProps> = ({ subcategories, isVisible }) => {
  return (
    <SubMenuContainer isVisible={isVisible}>
      {subcategories.map((subcategory) => (
        <SubMenuItem key={subcategory._id}>
          <SubMenuLink href={`#${subcategory.slug}`}>{subcategory.name}</SubMenuLink>
        </SubMenuItem>
      ))}
    </SubMenuContainer>
  );
};

export default SubMenu;
