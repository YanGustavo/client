
import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

const CardGroup = styled.div`
 position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

`;
const CardLogo = styled.div`
width: 60px;
  top: 30px;
  right: 30px;
  height: auto;
`;
const CardChip = styled.div`
width: 40px;
  top: 50px;
  left: 30px;
  height: auto;
`;
const CardNumber = styled.div`
left: 30px;
  bottom: 60px;
`;
const CardName = styled.div`
font-size: 12px;
  bottom: 30px;
  left: 30px;
`;
const CardFrom = styled.div`
font-size: 12px;
  bottom: 30px;
  right: 90px;font-size: 12px;
  bottom: 30px;
  right: 90px;
`;
const CardTo = styled.div`
  bottom: 30px;
  right: 30px;
  font-size: 12px;
`;
const ToggleIcon = styled.div`

`;

.card_number,
.card_from,
.card_to,
.card_name {
  color: #fff;
  font-weight: 400;
  letter-spacing: 2px;
}
const CardRing = styled.div`
 height: 400px;
  width: 400px;
  border-radius: 100vw;
  background: transparent;
  border: 50px solid rgba(0, 0, 0, 0.1);
  top: -250px;
  right: -250px;
  box-sizing: border-box;
  ${this}::after {
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
`;
const CartCheckOutContianer = styled.div`
 display: none;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  min-height: 280px;
  max-height: 320px;
`;
const CartContainer = styled.div`
width: 100%;
  flex: 1;
  min-width: 320px;
  padding: 0px 10px;
  margin-top: 10px;
`;
const CartItems = styled.div`
width: 100%;
  height: auto;
  ${this}::-webkit-scrollbar {
  display: none;
}
`;
const CartItem = styled.div`
display: flex;
  align-items: center;
  margin: 8px 0;
`;
const ImageBox = styled.div`
width: 60px;
  min-width: 60px;
  height: 60px;
  min-height: 60px;
  background: ${theme.colors.cart_img_box};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  ${this} img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
`;
const ItemSection = styled.div`
margin-left: 10px;
`;
const ItemName = styled.div`
font-size: 16px;
  color: #2a2b3c;
`;
const ItemQuantity = styled.div`
font-size: 16px;
  color: #2a2b3c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  ${this} span {
  color: ${theme.colors.heading_color};
}
`;
const Quantity = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 60px;
`;
const ItemRemove = styled.div`
color: #2a2b3c;
  font-size: 24px;
`;
const ItemAdd = styled.div`
 color: #2a2b3c;
  font-size: 24px;
`;
const ItemPrice = styled.div`
font-size: 16px;
  font-weight: 600;
  color: #2a2b3c;
  margin-left: auto;
`;
const DolorSign = styled.div`
font-size: 12px;
  color: ${theme.colors.heading_color};
`;
const ItemPriceValue = styled.div`
font-size: 16px;
  color: #373848;
`;
const TotalSection = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 8px;
  margin-bottom:20px;
  ${this} h3 {
  font-size: 18px;
  font-weight: 600;
  color: #2a2b3c;
}

${this} p {
  font-size: 18px;
  font-weight: 600;
  color: #2a2b3c;
}

  ${this} p span {
  font-size: 14px;
  color: ${theme.colors.header_text_color};
}
`;
const CheckOut = styled.div`
  outline: none;
  border: none;
  width: 100%;
  padding: 10px 20px;
  background: ${theme.colors.header_text_color};
  border-radius: 100vw;
  color: #faf9fb;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
`;
const ToggleIcon = styled.div`

`;
.cardLogo,
.cardChip,
.card_number,
.card_name,
.card_from,
.card_to,
.card_ring {
  position: absolute;
}