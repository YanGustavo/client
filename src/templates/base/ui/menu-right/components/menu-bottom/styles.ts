import styled from 'styled-components';
export const MenuBottomStyle = styled.div`
.menuBottom {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 3.2rem;
  background: ${props => props.theme.desing.colors.header.background};  
}

.menuBottom ul {
  display: flex;  
}

.menuBottom ul li {
  position: relative;
  list-style: none;
  width: 3rem;
  height: 3rem;
  z-index: 1;
}

.menuBottom ul li a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
}
.menuBottom ul li .counter {
  font-size: 0.7rem;
  position: absolute;
  top: 4.2rem;
  right: -2.38rem;
  color: ${props => props.theme.desing.colors.heading};  
  background-color: ${props => props.theme.desing.buttons.secondary.backgroundColor};
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  align-content: center;
  transition: all 0.5s ease-in-out;
  position: relative;
  ${this} i {
    position: absolute;
    top: 0;
    right: 0.3rem;
  color: ${props => props.theme.desing.colors.header.textColor};
  font-weight: 900;
}
}
.menuBottom ul li.active .counter{
  top: -4.2rem;
}
.menuBottom ul li .title{
  font-size: 0.5rem;
  position: absolute;
  top: 5.5rem;
  left: 0;
  color: ${props => props.theme.desing.colors.header.textColor};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  transition: all 0.5s ease-in-out;
  
}
.menuBottom ul li.active .title{
  top: 2.15rem;
}
.menuBottom ul li a .icon {
  position: relative;
  display: block;
  line-height: 3.2rem;
  text-align: center;
  transition: 0.5s;
  transform: translateY(-0.2rem);
  
}

.menuBottom ul li a .icon .MuiSvgIcon-root  {
  font-size: 1rem;
  color: ${props => props.theme.desing.colors.header.textColor};
}

.menuBottom ul li.active a .icon {
  transform: translateY(-1.6rem);
  transition: 0.5s;
  font-size: 1.6rem;
  color: ${props => props.theme.desing.colors.white};
}

.menuBottom ul li.active a .icon .MuiSvgIcon-root {
  font-size: 1.6rem;
  color:${props => props.theme.desing.colors.header.textColor};
  transition: 0.5s;
}

.indicator {
  position: absolute;
  height: 3.2rem;
  width: 3.2rem;
  background: ${props => props.theme.desing.colors.background.default};
  top: -1.45rem; /* Alterado para -1.45rem para ajustar a posição */
  border-radius: 50%;
  border: 6px solid ${props => props.theme.desing.colors.rightMenu.backgroundRGB};
  transition: 0.5s;
}

.indicator::before {
  content: "";
  position: absolute;
  top: 0.8rem;
  left: -1.2rem;
  width: 1rem;
  height: 1rem;
  background: transparent;
  border-top-right-radius: 18px;
}

.indicator::after {
  content: "";
  position: absolute;
  top: 0.8rem;
  right: -1.2rem;
  width: 1rem;
  height: 1rem;
  background: transparent;
  border-top-left-radius: 1rem;
}

.menuBottom ul li.active ~ .indicator {
  transform: translateY(0); /* Alterado para translateY(0) para manter o indicador no lugar */
}

.menuBottom ul li:nth-child(1).active ~ .indicator {
  transform: translateX(calc(2.97rem * 0));
}

.menuBottom ul li:nth-child(2).active ~ .indicator {
  transform: translateX(calc(2.97rem * 1));
}

.menuBottom ul li:nth-child(3).active ~ .indicator {
  transform: translateX(calc(2.97rem * 2));
}

.menuBottom ul li:nth-child(4).active ~ .indicator {
  transform: translateX(calc(2.97rem * 3));
 
}

.menuBottom ul li:nth-child(5).active ~ .indicator {
  transform: translateX(calc(2.97rem * 4));
}

.menuBottom ul li:nth-child(6).active ~ .indicator {
  transform: translateX(calc(2.97rem * 5));
}
`;