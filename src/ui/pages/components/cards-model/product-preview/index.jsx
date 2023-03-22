'use client'
import React from 'react';
import {Body, ContainerPreview, Top, Bottom, Left, Details, BuyButton, Right, RightDetails, Done, Remove, Icon, Contents, Inside,} from './styles';
//icons
import Tooltip from '@mui/material/Tooltip';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import DoneIcon from '@mui/icons-material/Done';
import InfoIcon from '@mui/icons-material/Info';
//https://codepen.io/olhilton/pen/dXaqxE

const ProductPreview = () => {//{children}: { children: React.ReactNode }
  const AddToCart = () =>{
    document.querySelector('.bottom').classList.add("clicked");
  };
  
 const RemoveFromCart = () => {
  document.querySelector('.bottom').classList.remove("clicked")
  };
  return (
    <>
    <Body>
  <ContainerPreview>
    <Top><img src="https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg"/></Top>
    <Bottom className='bottom'>
      <Left>
        <Details>
          <h1>Cadeira</h1>
          <p>R$: 250,00</p>
        </Details>
        <BuyButton onClick={() => AddToCart()}><i><Tooltip title="Adicionar ao Carrinho"><AddShoppingCartIcon/></Tooltip></i></BuyButton>
      </Left>
      <Right>
        <Done><i><DoneIcon/></i></Done>
        <RightDetails>
          <h1>Chair</h1>
          <p>Adicionado ao Carrinho</p>
        </RightDetails>
        <Remove onClick={() => RemoveFromCart()}><i><Tooltip title="Remover do Carrinho"><RemoveShoppingCartIcon/></Tooltip></i></Remove>
      </Right>
    </Bottom>
  </ContainerPreview>
  <Inside>
    <Icon><i><InfoIcon/></i></Icon>
    <Contents>
      <table>
        <tr>
          <th>Largura</th>
          <th>Altura</th>
        </tr>
        <tr>
          <td>3000mm</td>
          <td>4000mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
      </table>
    </Contents>
  </Inside>
</Body>
    </>
  );
}
export default ProductPreview;