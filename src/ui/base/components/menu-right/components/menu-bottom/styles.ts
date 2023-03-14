import styled from 'styled-components';
import theme from 'styles/styled-components/theme';
export const MenuBottomStyle = styled.div`
.menuBottom {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 3.2rem;
  background: ${theme.colors.heading_color};  
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
  color: ${theme.colors.heading_color};  
  background-color: #daa520;
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
  color: ${theme.colors.white};
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
  color: ${theme.colors.white};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  transition: all 0.5s ease-in-out;
  
}
.menuBottom ul li.active .title{
  top: 2.3rem;
}

/* .menuBottom ul li:nth-child(1).active a::before{
  content: "Carrinho";
}
.menuBottom ul li:nth-child(2).active a::before{
  content: "Pedidos";
}
.menuBottom ul li:nth-child(3).active a::before{
  content: "Perfil";
}
.menuBottom ul li:nth-child(4).active a::before{
  content: "Favoritos";
}
.menuBottom ul li:nth-child(5).active a::before{
  content: "Mensagens";
}
.menuBottom ul li:nth-child(6).active a::before{
  content: "Sair";
} */

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
  color: #FFFFFF;
}

.menuBottom ul li.active a .icon {
  transform: translateY(-1.6rem);
}

.menuBottom ul li.active a .icon .MuiSvgIcon-root {
  font-size: 1.6rem;
  color: #FFFFFF;
  transition: 0.5s;
}

.indicator {
  position: absolute;
  height: 3.2rem;
  width: 3.2rem;
  background: ${theme.colors.heading_color};
  top: -1.45rem;
  border-radius: 50%;
  border: 6px solid #faf9fb;
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
  box-shadow: 0px -10px 0 0 #faf9fb;
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
  box-shadow: 0px -10px 0 0 #faf9fb;
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
/* .menuBottom ul li:nth-child(1).active a .icon .MuiSvgIcon-root {
  color: white;
}
.menuBottom ul li:nth-child(2).active a .icon .MuiSvgIcon-root {
  color: blue;
}
.menuBottom ul li:nth-child(3).active a .icon .MuiSvgIcon-root {
  color: orange;
}
 .menuBottom ul li:nth-child(4).active a .icon .MuiSvgIcon-root {
  color: yellow;
}
.menuBottom ul li:nth-child(5).active a .icon .MuiSvgIcon-root {
  color: #b40e04;
}
.menuBottom ul li:nth-child(6).active a .icon .MuiSvgIcon-root {
  color: grey;
} */
@media screen and (min-width: 375px) {
  .menuBottom {
    /* left: calc(100vw - 99vw);
    width: 98vw; */
  }
}
@media screen and (min-width: 650px) {
  .menuBottom {
    /* left: calc(100vw - 90vw);
    width: 80vw; */
  }
}

@media screen and (min-width: 950px) {
  .menuBottom {
    /* left: calc(100vw - 90vw);
    width: 50vw; */
  }
}
@media screen and (min-width: 1500px) {
  .menuBottom {
    /* left: calc(100vw - 75vw);
    width: 50vw; */
  }
}
`;