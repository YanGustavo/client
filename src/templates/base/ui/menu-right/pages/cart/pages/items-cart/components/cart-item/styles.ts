
import styled from 'styled-components';

const CartItemBody = styled.div`
display: flex;
  align-items: center;
  margin: 8px 0;
`;
const ImageBox = styled.div`
@keyframes imageBoxAnimation {
	0% { box-shadow: 0 0 0 3px rgba(255, 215, 0,0.3) }
  25% { box-shadow: 0 0 0 2px rgba(255, 215, 0,0.3) }
	50% { box-shadow: 0 0 0 5px rgba(255, 215, 0,0.2)}
	100% { box-shadow: 0 0 0 3px rgba(255, 215, 0,0.5)}
}
width: 60px;
  min-width: 60px;
  height: 60px;
  min-height: 60px;
  background: ${(props) => props.theme.desing.colors.cartImgBox};
  border: 4px solid ${(props) => props.theme.desing.border.color};
  box-shadow: 0 0 0 1px rgba(0,255,255,0.2);
  animation: imageBoxAnimation 2.5s infinite; 
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
const ItemSection = styled.section`
margin-left: 10px;
`;
const ItemName = styled.h2`
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
  color: ${(props) => props.theme.desing.colors.heading};
}
`;
const Quantity = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 60px;
  ${this} .itemRemove {
  color: #2a2b3c;
  font-size: 24px;
  }
  ${this} .itemAdd {
    color: #2a2b3c;
  font-size: 24px;
  }
`;

const ItemPrice = styled.p`
font-size: 16px;
  font-weight: 600;
  color: #2a2b3c;
  margin-left: auto;
`;
const DolorSign = styled.span`
font-size: 12px;
  color: ${(props) => props.theme.desing.colors.heading};
`;
const ItemPriceValue = styled.span`
font-size: 16px;
  color: #373848;
`;



export {CartItemBody, ImageBox, ItemSection, ItemName, ItemQuantity, Quantity,ItemPrice, DolorSign, ItemPriceValue,}