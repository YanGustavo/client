import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const CardStyle = styled.div`

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  overflow: hidden;
}

.card {
  width: 280px;//30rem;
  height: 450px;//55rem;
  background: #eee;
  border-radius: 2.5rem;
  box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.7);
  position: relative;
  margin: 15px 0 7.5px 15px;
  flex: 0 1 24%;
}
@media screen and (min-width: 40em) {
  .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
 
    .card {
        flex: 0 1 calc(50% - 1em);
    }
}
 
@media screen and (min-width: 60em) {
    .cards {
   }
     
   .card {
        flex: 0 1 calc(25% - 1em);
    }
}
 
 
@media screen and (min-width: 52em) {
    .centered {
        
    }
}
.card:hover .card-bottom h1 {
  animation-iteration-count: infinite;
}

.card-top {
  width: 100%;
  height: 50%;
  background: #FFFFFF;
  padding: 1.5rem;//3rem;
  border-radius: 2.5rem 2.5rem 0 0;
  transition: background 0.5s;
}
.isFavourite {
  position: absolute;
  top: 80px;
  right: 10px;
  transition: 0.5s;
}

.isFavourite .MuiSvgIcon-root {
  font-size: 18px;
  color: #ff000088;
}

.isFavourite.active .MuiSvgIcon-root {
  color: #ff0000;
  filter: drop-shadow(0px 0px 8px #ff0000);
}

.cards.change .card-bottom {
  background: #d35246;
}
.card-line-top {
  position: absolute;
  top: -0.8rem;//top:30rem;
  left: 30%;//5rem;
  width: 40%;
  height: 1.6rem;
  background: ${theme.colors.heading_color};
  color: ${theme.colors.white};
  border-radius: 0.3rem;
  box-sizing: border-box;  
}

.card-line-top h1 {
  height: 100%;
  font-family: ${theme.font.family};
  font-weight: 300;
  text-transform: uppercase;  
  font-weight: 900;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.card-top-text {
  color: ${theme.colors.heading_color};
}

.card-line-center {
  position: absolute;
  width: 90%;
  height: auto;
  left: 5%;
  top: 13.5rem;
  display: flex;
  //align-content: space-between;
  justify-content: space-between;
  //align-items: center; 
  z-index:1;
  margin: 0;
  padding: 0;
}
.card-line-center span {
  border-radius: 0.3rem;
  font-size: 0.7rem;//0.9rem;
  padding: 0 0.1rem;//font-weight: bold;
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  font-weight: bold;
  box-shadow: 0 1rem 2rem rgba(28, 71, 122, 0.5);
}
.card-line-center span:first-child {
  background: ${theme.colors.heading_color};
  color: ${theme.colors.white};
}
.card-line-center span:last-child {
  background: yellowgreen;
  color: ${theme.colors.white};
}
.card-bottom {
  width: 100%;
  height: 50%;
  padding: 1rem 1rem 0.5rem 1rem;//2rem 3rem;
  background-color: #f1ae04;
  border-radius: 0 0 2.5rem 2.5rem;
}
.card-bottom .product-name {
  text-shadow: rgba(0,0,0,0.1) -1px 0, rgba(0,0,0,0.1) 0 -1px,
   rgba(255,255,255,0.1) 1px 0, rgba(255,255,255,0.1) 0 1px,
   rgba(0,0,0,0.1) -1px -1px, rgba(255,255,255,0.1) 1px 1px;
  color: gold;
  font-weight: 900;
  text-transform: capitalize;
  letter-spacing: 0.1rem;  
  width: auto;
  height: auto;
  position: relative;  
  border-radius: 0.3rem;
  padding: 0 0.1rem;
  margin-bottom: 1.6rem;
  z-index: 3;
  box-shadow: 0 1rem 2rem rgba(28, 71, 122, 0.1);
  animation-name: product-name-animation;
  animation-duration: 3s;
  animation-delay: 0.5s;

}
@keyframes product-name-animation {
  0%   {color:red; left:0px; top:0px;}
  25%  {color:yellow; left:15px; top:0px;}
  50%  {color:blue; left:15px; top: 15px;}
  75%  {color:green; left:0px; top:15px;}
  100% {color:red; left:0px; top:0px;}
}
.card-bottom h3 {
  font-size: 0.8rem;//1rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
}

.stars {
  margin-bottom: 3rem;
}

.stars i:last-child {
 // opacity: 0.4;
}
.orange {
  color: #f8901c !important;
}

.gray {
  color: #373848 !important;
}

.product-1 {
  width: 8.5rem;//30rem;
  height: 12.25rem;
  position: absolute;
  top: 1rem;//-2.5rem;//-2.5rem;
  right: 4.5rem;//-10rem;
  transition: transform 1.5s;
  opacity: 0; 
}


.cards.change .product-1 {
  transform: translateX(-50rem) rotateZ(180deg);
  opacity: 0; 
  //transform: translateX(-50rem) rotateZ(45deg);
}

.product-2 {
  width: 8.25rem;//33rem;
  height: 12.25rem;
  position: absolute;
  top: 1rem;//-10rem;
  right: -36rem;
  transition: transform 1.5s; 
  opacity: 0; 
}

.cards.change .product-2 {
  transform: translateX(-40rem) rotateZ(3deg);
  //transform: translateX(-40rem) rotateZ(-45deg);
}
.product-1.opacity, .product-2.opacity {
  opacity: 1; 
}
.size {
  margin-bottom: 0.5rem;
}
.sizes {
  display: flex;
}

.sizes span {
  font-size: 0.75rem;//1.3rem;
  margin-right: 2.5rem;
  color: ${theme.colors.white};
}

.sizes span.active {
  background: ${theme.colors.heading_color};
  color: ${theme.colors.white};
  border-radius: 30%;
  display: grid;
  place-items: center;
  padding: 0 0.1rem;
}
.color {
  margin-bottom: 1.8rem;
}

.colors {
  display: flex;
}

.color-1,
.color-2 {
  width: 1.5rem;//2rem;
  height: 1.5rem;//2rem;
  border-radius: 50%;
  cursor: pointer;
}

.color-1 {
  background: #1c477a;
  margin-right: 1.5rem;
  box-shadow: 0 1rem 2rem rgba(28, 71, 122, 0.2);
}

.color-2 {
  background: #c02244;
  box-shadow: 0 1rem 2rem rgba(192, 34, 68, 0.3);
}

.size h4, .color h4 {
  color: ${theme.colors.white};
  font-size: 0.9rem;//1.2rem;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  margin-bottom: 0.3rem;
  
  //font-weight: bold; //putted after
}

.logo {
  width: 2rem;
  color: ${theme.colors.white};
  border-radius: 0.5rem;
  position: absolute;
  left: 1.2rem;
  bottom: 1.3rem;//3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.5s;
}
.price {
  width: 6rem;//16rem;
  height: 2rem;//4rem;
  background: #1c477a;
  color: ${theme.colors.white};
  border-radius: 0.5rem;
  position: absolute;
  right: -0.5rem;
  bottom: 1rem;//3rem;
  box-shadow: 0 1rem 2rem rgba(28, 71, 122, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.5s;
}

.cards.change .price {
  background: #c02244;
}

.price span {
  font-size: 1rem;//2rem;
}

.price span:first-child {
  font-weight: 900;//300;
  text-transform: uppercase;
  margin-right: 1rem;
}

.price span:last-child {
  font-weight: 300;//bold;
}

`;
