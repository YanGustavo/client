import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SubMenu from './SubMenu';
import Link from 'next/link';

const Container = styled.div`
  min-width: 200px;
  color: ${(props) => props.theme.desing.colors.text};
`;

const Nav = styled.nav`
  position: relative;
`;

const Logo = styled.img`
  padding: 1rem;
  min-width: 100px;
  width: 200px;
  cursor: pointer;
  margin-bottom: 20px;
  z-index: 2;
`;

const ToggleContainer = styled.div`
  position: relative;
  min-height: 80px;
`;

const ToggleInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  cursor: pointer;
  pointer-events: none;
`;

const ToggleLabel = styled.label`
  cursor: pointer;
  display: block;
  z-index: 2;
`;

const List = styled.ul<{ menuOpen: boolean }>` // Adicione tipagem para menuOpen
  padding-left: 0;
  margin-top: 0;
  background: ${(props) => props.theme.desing.colors.background.lightRadial};
  list-style: none;
  overflow: hidden;
  text-align: center;
  transition: all 0.4s ease-out;
  width: 100%;
  left: 0;
  visibility: ${({ menuOpen }) => (menuOpen ? 'visible' : 'hidden')};
  opacity: ${({ menuOpen }) => (menuOpen ? 1 : 0)};
  max-height: ${({ menuOpen }) => (menuOpen ? '200px' : '0')};
  overflow-y: auto;
  z-index: 2;
`;

const ListItem = styled.li`
  border-radius: 2px;
  line-height: 1.5;
  margin: 0 0 0.25rem 0;
  background: ${(props) => props.theme.desing.colors.background.default};
  transition: background 0.3s;

  &:hover,
  &:focus {
    background: mediumorchid;
  }
`;

const NavLink = styled.a`
  display: block;
  color: inherit;
  text-transform: lowercase;
  font-weight: 200;
  text-decoration: none;
  padding: 0.5rem 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 20px auto; /* Margens superior e inferior definidas como 20px e margens esquerda/direita como 'auto' para centralizar */
  width: 100%;
  color: ${(props) => props.theme.desing.colors.background.default};
  font-family: 'Nome da Fonte Elegante', sans-serif;
  text-align: center; /* Alinha o texto ao centro */
`;

const MenuDropdown: React.FC<{ categories: any[] }> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [lastClickedParentId, setLastClickedParentId] = useState<string | null>(null);
  const [subMenuVisible, setSubMenuVisible] = useState<string | null>(null);

  useEffect(() => {
    // Define a categoria ativa com base em activeCategory
    if (activeCategory) {
      const activeCategoryData = categories.find((category) => category._id === activeCategory);
      if (activeCategoryData) {
        setActiveTitle(activeCategoryData.name);
      }
    } else {
      setActiveTitle('');
    }
  }, [activeCategory, categories]);

  const setActiveTitle = (title: string) => {
    document.title = title; // Define o título da página com base na categoria ativa
  };

  const toggleCategory = (categoryId: string) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter((id) => id !== categoryId));
      setActiveCategory(null);
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
      setActiveCategory(categoryId);
    }
  };

  const toggleSubMenu = (categoryId: string) => {
    if (subMenuVisible === categoryId) {
      setSubMenuVisible(null);
    } else {
      setSubMenuVisible(categoryId);
    }
  };

  const handleCategoryClick = (category: any) => {
    if (category.parentId === 0 && !hasChildren(category)) {
      setExpandedCategories([]);
    } else if (category.parentId !== lastClickedParentId) {
      setExpandedCategories([category._id]);
      setLastClickedParentId(category.parentId);
    } else {
      toggleCategory(category._id);
    }
  };

  const hasChildren = (category: any) => {
    return categories.some((c) => c.parentId === category._id);
  };

  return (
    <Container>
      <Nav>
        <ToggleContainer>
        <Link  href="/">
            <Logo
              src="/img/logo_name.png"
              alt="Eai Chefinho!"
            />
            </Link>
          <Title>{activeCategory ? categories.find((category) => category._id === activeCategory)?.name : ''}</Title>
          <ToggleInput type="checkbox" checked={false} readOnly />
          <ToggleLabel htmlFor="toggle" />
        </ToggleContainer>
        
        <List menuOpen={menuOpen}>
          {categories.map((category) => (
            <ListItem key={category._id}>
              {category.parentId === 0 ? (
                <div onClick={() => toggleSubMenu(category._id)}>
                  <NavLink href={`#${category.slug}`}>{category.name}</NavLink>
                  <SubMenu
                    subcategories={categories.filter((c) => c.parentId === category._id)}
                    isVisible={subMenuVisible === category._id}
                  />
                </div>
              ) : (
                expandedCategories.includes(category.parentId) && (
                  <NavLink href={`#${category.slug}`}>{category.name}</NavLink>
                )
              )}
            </ListItem>
          ))}
        </List>
      </Nav>
    </Container>
  );
};

export default MenuDropdown;
