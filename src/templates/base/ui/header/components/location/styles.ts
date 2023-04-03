import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const MenuRightStyle = styled.div`
.menuRight {  
  position: fixed;  
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 105;
  display: flex;
  flex-direction: column;
  align-items: center;  
  transform: translateX(200%);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
  
}

.menuRight.active {
  transform: translateX(0%);
}

.debitCardContainer {
  padding: 10px;
  width: 100%;
  height: auto;
  position: relative;
  padding-top: 10px;
}

.debitCard {
  position: relative;
  width: 100%;
  height: 170px;
  min-width: 300px;
  min-height: 170px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  align-content: center;

}

.debitCard::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f8901c; // ${theme.colors.heading_color};
  transform: rotate(5deg);
  border-radius: 15px;
  filter: blur(2px);
  z-index: -2;
}

.debitCard::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    35deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 15px;
  backdrop-filter: blur(10px);
  z-index: -1;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.cardGroup {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.cardLogo,
.cardChip,
.card_number,
.card_name,
.card_from,
.card_to,
.card_ring {
  position: absolute;
}

.cardLogo {
  width: 60px;
  top: 30px;
  right: 30px;
  height: auto;
}

.cardChip {
  width: 40px;
  top: 50px;
  left: 30px;
  height: auto;
}

.card_number,
.card_from,
.card_to,
.card_name {
  color: #fff;
  font-weight: 400;
  letter-spacing: 2px;
}

.card_number {
  left: 30px;
  bottom: 60px;
}

.card_name {
  font-size: 12px;
  bottom: 30px;
  left: 30px;
}

.card_from {
  font-size: 12px;
  bottom: 30px;
  right: 90px;
}

.card_to {
  bottom: 30px;
  right: 30px;
  font-size: 12px;
}

.card_ring {
  height: 400px;
  width: 400px;
  border-radius: 100vw;
  background: transparent;
  border: 50px solid rgba(0, 0, 0, 0.1);
  top: -250px;
  right: -250px;
  box-sizing: border-box;
}

.card_ring::after {
  content: "";
  position: absolute;
  height: 500px;
  width: 500px;
  border-radius: 100vw;
  background: transparent;
  border: 50px solid rgba(0, 0, 0, 0.1);
  bottom: -415px;
  right: -155px;
  box-sizing: border-box;
}
.cartCheckOutContianer {
  display: none;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  min-height: 280px;
  max-height: 320px;
}
.cartContainer {
  width: 100%;
  flex: 1;
  min-width: 320px;
  padding: 0px 10px;
  margin-top: 10px;  
}

.cartItems {
  width: 100%;
  height: auto;
}

.cartItems::-webkit-scrollbar {
  display: none;
}

.cartItem {
  display: flex;
  align-items: center;
  margin: 8px 0;
}

.cartItem .imgBox {
  width: 60px;
  min-width: 60px;
  height: 60px;
  min-height: 60px;
  background: #00ffc855;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.cartItem .imgBox img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.cartItem .itemSection {
  margin-left: 10px;
}

.cartItem .itemSection .itemName {
  font-size: 16px;
  color: #2a2b3c;
}

.cartItem .itemSection .itemQuantity {
  font-size: 16px;
  color: #2a2b3c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
}

.cartItem .itemSection .itemQuantity span {
  color: ${theme.colors.heading_color};
}

.cartItem .itemSection .itemQuantity .quantity {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 60px;
}

.cartItem .itemSection .itemQuantity .quantity .itemRemove {
  color: #2a2b3c;
  font-size: 24px;
}

.cartItem .itemSection .itemQuantity .quantity .itemAdd {
  color: #2a2b3c;
  font-size: 24px;
}

.cartItem .itemPrice {
  font-size: 16px;
  font-weight: 600;
  color: #2a2b3c;
  margin-left: auto;
}

.cartItem .itemPrice .dolorSign {
  font-size: 12px;
  color: ${theme.colors.heading_color};
}

.cartItem .itemPrice .itemPriceValue {
  font-size: 16px;
  color: #373848;
}

.totalSection {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 8px;
  margin-bottom:20px;
}

.totalSection h3 {
  font-size: 18px;
  font-weight: 600;
  color: #2a2b3c;
}

.totalSection p {
  font-size: 18px;
  font-weight: 600;
  color: #2a2b3c;
}

.totalSection p span {
  font-size: 14px;
  color: ${theme.colors.heading_color};
}

.checkOut {
  outline: none;
  border: none;
  width: 100%;
  padding: 10px 20px;
  background: ${theme.colors.heading_color};
  border-radius: 100vw;
  color: #faf9fb;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
}

.addSomeItem {
  width: 20rem;
  height: 25rem;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(0%);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.addSomeItem.unactive {
  transform: translateX(200%);
  display: none;
}
.footer-component{
  position: absoluete;
  bottom: 0;
  left: 0; 
  width: 100%;
  height: auto;
  z-index: 106;
}
@media screen and (min-width: 541px) {
  .menuRight {
    width: 280px;
  }
   .addSomeItem {
    width: 15rem;
  height: 20rem;
  }
}
@media screen and (min-width: 650px) {
  .menuRight {
    width: 300px;
  }
  .addSomeItem {
    width: 18rem;
  height: 23rem;
  }
}
@media screen and (min-width: 950px) {
  .menuRight {
    position: fixed;
    z-index: 1;
    transform: translateX(0%);
    top: 60px;
    height: calc(100vh-65px);
    position: fixed;
    width: 325px;
  }
  .addSomeItem {
    width: 19rem;
  height: 24rem;
  }
}
@media screen and (min-width: 1100px) {
  .menuRight {
    width: 350px;
  }
  .addSomeItem {
    width: 20rem;
  height: 25rem;
  }
}
`;
