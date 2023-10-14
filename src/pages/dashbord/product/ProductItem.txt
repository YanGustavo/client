import React, { useState } from 'react';
import styled from 'styled-components';

// Componente de card de produto
const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  max-width: 100px; /* Defina o tamanho máximo da imagem conforme necessário */
  height: auto;
  margin-bottom: 10px;
`;

const EditButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

type ProductItemType = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const ProductItem: React.FC<{
  product: ProductItemType;
  onEdit: () => void;
  onDelete: () => void;
}> = ({ product, onEdit, onDelete }) => {
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  const handleDeleteClick = () => {
    setConfirmationVisible(true);
  };

  const handleCancelDelete = () => {
    setConfirmationVisible(false);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setConfirmationVisible(false);
  };

  return (
    <ProductCard>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <span>{product.name}</span>
      <span>R${product.price.toFixed(2)}</span>
      <EditButton onClick={onEdit}>Editar Produto</EditButton>
      <DeleteButton onClick={handleDeleteClick}>Excluir Produto</DeleteButton>
      {isConfirmationVisible && (
        <div>
          Tem certeza de que deseja excluir este produto?
          <button onClick={handleCancelDelete}>Cancelar</button>
          <button onClick={handleConfirmDelete}>Confirmar</button>
        </div>
      )}
    </ProductCard>
  );
};

export default ProductItem;
