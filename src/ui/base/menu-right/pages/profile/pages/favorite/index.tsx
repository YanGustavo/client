import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Product } from "utils/data";

type Props = {
  favoriteProducts: typeof Product[];
}

const FavoritePage: React.FC<Props> = ({ favoriteProducts }) => {
  const [favorites, setFavorites] = useState<typeof Product[]>([]);

  useEffect(() => {
    setFavorites(favoriteProducts);
  }, [favoriteProducts]);

  return (
    <Wrapper>
      <Title>Favoritos</Title>
      {favorites.length === 0 && <Message>Você não tem favoritos ainda</Message>}
      {favorites.length > 0 && (
        <List>
          {favorites.map((product) => (
            <ListItem key={product.id}>
              <Image src={product.image} alt={product.name} />
              <Name>{product.name}</Name>
              <Price>R$ {product.price.toFixed(2)}</Price>
            </ListItem>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  margin-top: 1rem;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 1rem;
`;

const Name = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  font-size: 1.25rem;
`;

export default FavoritePage;