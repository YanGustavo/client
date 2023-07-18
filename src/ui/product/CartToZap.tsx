import Button from 'components/Button';
import React from 'react';
import styled from 'styled-components';
import Modal from '../../components/Modal';
import {H1,P} from "components/Typography";



const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-height: 200px;
  position: relative;

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

const ProductTitle = styled.div`
  margin: 0;
  width: 100%;
`;

const ProductPrice = styled.div`
  margin: 0;
  text-align: right;
`;
interface CartToZapProps {
  product: {
    name: string;
  };
  selectedVariation: {
    price: string;
    images: {
      link: string;
    }[];
  };
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const CartToZap: React.FC<CartToZapProps> = ({
  product,
  selectedVariation,
  isModalOpen,
  setIsModalOpen,
}) => {

  const whatsappNumber = '+5598985428872'; // número do WhatsApp

const handleModalClose = () => {
  setIsModalOpen(false);
};

//Fim do modal
  const handleSendWhatsApp = () => {
    // cria a mensagem formatada para enviar pelo WhatsApp
    const title = "Eai Chefinho, achei esse produto interessante e desejo comprar";
    const message = `${title}:\n\n${product.name}\n${selectedVariation.price}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    );
    setIsModalOpen(false);
  };

  console.log('rodou no CartToZap');
  return (
    <>
      <Modal title={product.name} onClose={handleModalClose} open={isModalOpen}>
        <ProductWrapper>
          <img src={selectedVariation.images[0].link} />
          <ProductDetails>
            <ProductTitle><H1>{product.name}</H1></ProductTitle>
            <ProductPrice><P>{selectedVariation.price}</P></ProductPrice>
          </ProductDetails>
        </ProductWrapper>
        <Button onClick={handleSendWhatsApp}>Quero esse produto</Button>
      </Modal>
    </>
  );
};

export default CartToZap;
