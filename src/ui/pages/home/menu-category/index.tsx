import React, { useRef, useState } from 'react';
import styled from 'styled-components';

interface Category {
id: number;
name: string;
image: string;
}

interface MenuCategoryWrapperProps {
Categories: Category[];
}

const MenuCategory = styled.div` 
min-width: 511px; 
width: 100%; 
display: flex;
 overflow-x: scroll; 
 height: 200px; 
 -webkit-overflow-scrolling: touch;
  scrollbar-width: none; 
  &::-webkit-scrollbar { display: none; }
   align-items: center; 
   justify-content: center;
    position: relative; 
    scroll-snap-type: x mandatory;
    @media (max-width: 600px) {
      height: 140px; 
}
    `;

const CategoryTitle = styled.div` font-size: 16px; font-weight: bold; margin-top: 5px; color: ${(props) => props.theme.colors.primary_button_text_color}; display: none; align-items: center; justify-content: center; text-align: center; svg { margin-left: 5px; }`;

const CategoryItem = styled.div`
width: 150px;
height: 150px;
margin-right: 10px;
position: relative;
cursor: pointer;
transition: transform 0.3s ease-in-out;
scroll-snap-align: start;

&:hover {
${CategoryTitle} {
display: flex;
}
}

@media (max-width: 600px) {
width: 75px;
height: 75px;
margin-right: 0.2rem;
}
`;

const CategoryImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
transform-origin: center;

&:hover {
transform: scale(1.05);
}
`;

const ShowAllLink = styled.a` position: absolute; bottom: 10px; right: 10px; color: ${(props) => props.theme.colors.primary_button_text_color};`;

const MenuCategoryWrapper: React.FC<MenuCategoryWrapperProps> = ({ Categories }) => {
const [isDragging, setIsDragging] = useState<boolean>(false);
const [initialX, setInitialX] = useState<number | null>(null);
const [scrollPosition, setScrollPosition] = useState<number>(0);
const menuCategoryRef = useRef<HTMLDivElement>(null);

const handleScroll = () => {
if (menuCategoryRef.current) {
const { scrollLeft, scrollWidth, clientWidth } = menuCategoryRef.current;
const maxScrollLeft = scrollWidth - clientWidth;
const scrollPosition = scrollLeft / maxScrollLeft;
setScrollPosition(scrollPosition);
}
};

const handleMouseDown = (event: React.MouseEvent) => {
event.preventDefault();
setIsDragging(true);
setInitialX(event.clientX);
};

const handleMouseMove = (event: React.MouseEvent) => {
if (!isDragging || !menuCategoryRef.current) {
return;
}
const scrollLeft = menuCategoryRef.current.scrollLeft;
const dx = event.clientX - (initialX || 0);
menuCategoryRef.current.scrollLeft = scrollLeft - dx;
};

const handleMouseUp = () => {
setIsDragging(false);
};

const handleMouseLeave = () => {
setIsDragging(false);
};

return (
<>
<MenuCategory
     ref={menuCategoryRef}
     onScroll={handleScroll}
     onMouseDown={handleMouseDown}
     onMouseMove={handleMouseMove}
     onMouseUp={handleMouseUp}
     onMouseLeave={handleMouseLeave}
   >
{Categories.map((category) => (
    <CategoryItem key={category.id}>
      <CategoryImage src={category.image} />
      <CategoryTitle>{category.name}</CategoryTitle>
    </CategoryItem>
  ))}
</MenuCategory>
<ShowAllLink href="#">Mostrar todas</ShowAllLink>
  </>
)
};

export default MenuCategoryWrapper;