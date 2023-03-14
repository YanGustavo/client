import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const MenuCardStyle = styled.div`
.rowMenuCard  {
  width: 4rem;
  height: 4rem;
  border-radius: 0.4rem;
  margin-right: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap; 
  flex-direction: row;
  overflow-x: scroll;
  display: inline-block;
  padding: 0.2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  transition: 0.5s;
  cursor: pointer;

}
.rowMenuCard:hover,
.rowMenuCard.active {
 // background: ${theme.colors.heading_color};
}
.rowMenuCard .imgBox {
  width: 4rem;
  height: 4rem;
  min-width: 100px;
  min-height: 100px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  overflow: hidden;
}
.rowMenuCard:hover .imgBox,
.rowMenuCard.active .imgBox {
  //background: #faf9fb;
}
.rowMenuCard .imgBox img {
  object-fit: contain;
  width: 80%;
  height: 80%;
  border-radius: 100%;
  margin:0;
}

.rowMenuCard:hover .imgBox img,
.rowMenuCard.active .imgBox img {
  width: 90%;
  height: 90%;
  transition: 0.5s;
}

.menu-card-bottom {  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.6rem;
  padding: 0;
  margin: 0;
}
.menu-card-bottom h3 {
  font-size: 0.6rem;
  font-weight: 500;
  color: ${theme.colors.white};
  opacity: 0.6;
  transition: 1s;
  margin-right: 2px;
}

.rowMenuCard:hover h3,
.rowMenuCard.active h3 {
  font-size: 0.7rem;
  color: ${theme.colors.white};
  opacity: 1;
  transition: s;
}

.menu-card-bottom .loadMenu {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s;
  opacity: 0;
  margin-right: 6px;
  display: none;
}
 
.rowMenuCard:hover .loadMenu,
.rowMenuCard.active .loadMenu {
  opacity: 1;
  transition: 1s;
  display: flex;
  align-items: center;
  justify-content: center;
} 
 .rowMenuCard:hover .menu-card-bottom {
  margin-right: 2px;
  transition: 0.5s;
} 

.rowMenuCard .loadMenu .MuiSvgIcon-root {
  opacity: 0;
  transition: 1s;
  font-size: 14px !important;
  color: #faf9fb;
}

.rowMenuCard:hover .loadMenu .MuiSvgIcon-root,
.rowMenuCard.active .loadMenu .MuiSvgIcon-root {
  color: ${theme.colors.white};
  opacity: 1;
  transition: 1s;
}
@media screen and (min-width: 1140px) {
  .rowMenuCard {
    width: 7rem;
  height: 8rem;
  }
  .rowMenuCard .imgBox {
    width: 7rem;
  height: 7rem;
  }
}
@media screen and (min-width: 1232px) {
  .rowMenuCard {
    width: 8rem;
  height: 9rem;
  }
  .rowMenuCard .imgBox {
    width: 8rem;
  height: 8rem;
  }
}
@media screen and (min-width: 1400px) {
  .rowMenuCard {
    width: 9rem;
  height: 10rem;
  }
  .rowMenuCard .imgBox {
    width: 9rem;
  height: 9rem;
  }
}
@media screen and (min-width: 1600px) {
  .rowMenuCard {
    width: 11rem;
  height: 12rem;
  }
  .rowMenuCard .imgBox {
    width: 11rem;
  height: 12rem;
  }
}
`;
