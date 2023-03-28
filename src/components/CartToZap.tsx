import React, { useState } from "react";
import ModalPage from "./Modal";
import Button from "components/Button";
import styled from 'styled-components';

type CartToZapProps = {
setOpen: boolean;
title: string;
srcImg: string;
price: string;
};

const ProductWrapper = styled.div` display: flex; flex-direction: row; justify-content: flex-start; align-items: center;`;

const ProductImage = styled.img` height: 100%; width: auto; object-fit: cover;`;

const ProductDetails = styled.div` display: flex; flex-direction: column; margin-left: 10px;`;

const ProductTitle = styled.h2` margin: 0;`;

const ProductPrice = styled.p` margin: 0; text-align: right;`;

const CartToZap: React.FC<CartToZapProps> = ({setOpen, title, srcImg, price}) => {
  console.log(setOpen);
  
const whatsappNumber = '+5598985428872'; // número do WhatsApp
const [isOpen, setIsOpen] = useState<boolean>(setOpen);

const handleSendWhatsApp = () => {
// cria a mensagem formatada para enviar pelo WhatsApp
const message = `Eai Chefinho, achei esse produto interessante e desejo comprar:\n\n${title}\n${price}`;
window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
setIsOpen(false);
};

const closeModal = () => {
setIsOpen(false);
};
console.log("rodou no CartToZap");
return (
<>
<ModalPage isOpen={isOpen}>
<Button onClick={() => closeModal()}>Fechar</Button>
<section>
<h2>Eai Chefinho, achei esse produto interessante e desejo comprar</h2>
<ProductWrapper>
<ProductImage src={srcImg} />
<ProductDetails>
<ProductTitle>{title}</ProductTitle>
<ProductPrice>{price}</ProductPrice>
</ProductDetails>
</ProductWrapper>
</section>
<Button onClick={handleSendWhatsApp}>Quero esse produto</Button>
</ModalPage>
</>
);
};

export default CartToZap;