import Button from 'components/Button';
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';

type CartToZapProps = {
  setOpen: boolean;
  title: string;
  srcImg: string | null;
  price: number;
};

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-height: 200px;

  & > img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-right: 10px;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductTitle = styled.h2`
  margin: 0;
`;

const ProductPrice = styled.p`
  margin: 0;
  text-align: right;
`;

const CartToZap: React.FC<CartToZapProps> = ({
  setOpen,
  title,
  srcImg,
  price
}) => {
  console.log(setOpen+"setOpen No cart to zap");

  const whatsappNumber = '+5598985428872'; // número do WhatsApp
//Inicio Modal
const [modalOpen, setModalOpen] = useState(false);

const handleModalClose = () => {
  setModalOpen(false);
};

//Fim do modal
  const handleSendWhatsApp = () => {
    // cria a mensagem formatada para enviar pelo WhatsApp
    const title = "Eai Chefinho, achei esse produto interessante e desejo comprar";
    const message = `${title}:\n\n${title}\n${price}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    );
    setModalOpen(false);
  };
  React.useEffect(() => {
    if(setOpen !== undefined) setModalOpen(setOpen);
  },[setOpen]);

  console.log('rodou no CartToZap');
  return (
    <>
      <Modal title={title} onClose={handleModalClose} open={modalOpen}>
        <ProductWrapper>
          <img src={srcImg} />
          <ProductDetails>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>{price}</ProductPrice>
          </ProductDetails>
        </ProductWrapper>
        <Button onClick={handleSendWhatsApp}>Quero esse produto</Button>
      </Modal>
    </>
  );
};

export default CartToZap;
