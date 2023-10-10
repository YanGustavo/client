import Button from 'components/Button';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../../components/Modal';
import { H1, P } from 'components/Typography';

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
  availableAgents: {
    name: string;
    contact: string;
    available: boolean;
    photoUrl: string;
  }[];
  theme: {
    whatsappMessage: string;
    whatsappNumber: string;
    defaultAgent: {
      name: string;
      contact: string;
      available: boolean;
      photoUrl: string;
    };
  };
}

const CartToZap: React.FC<CartToZapProps> = ({
  product,
  selectedVariation,
  isModalOpen,
  setIsModalOpen,
  availableAgents,
  theme,
}) => {
  const { whatsappMessage, whatsappNumber, defaultAgent } = theme;
  const [selectedAgent, setSelectedAgent] = useState(defaultAgent);

  useEffect(() => {
    // Encontre o primeiro atendente disponível ou use o padrão se nenhum estiver disponível
    const availableAgent = availableAgents.find((agent) => agent.available) || defaultAgent;
    setSelectedAgent(availableAgent);
  }, [availableAgents, defaultAgent]);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSendWhatsApp = () => {
    const message = `${whatsappMessage}\n\n${product.name}\n${selectedVariation.price}`;
    window.open(
      `https://wa.me/${selectedAgent.contact}?text=${encodeURIComponent(message)}`
    );
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal title={product.name} onClose={handleModalClose} open={isModalOpen}>
        <ProductWrapper>
          <img src={selectedAgent.photoUrl} alt={selectedAgent.name} />
          <ProductDetails>
            <ProductTitle>
              <H1>{product.name}</H1>
            </ProductTitle>
            <ProductPrice>
              <P>{selectedVariation.price}</P>
            </ProductPrice>
          </ProductDetails>
          <Button onClick={handleSendWhatsApp}>Quero esse produto</Button>
        </ProductWrapper>
      </Modal>
    </>
  );
};

export default CartToZap;
