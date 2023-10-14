import AddRounded from '@mui/icons-material/AddRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRounded from '@mui/icons-material/RemoveRounded';
import { useCartStore } from 'context/cart-context';
import RandomImage from 'ui/RandomImage';
import { ProductCart } from 'lib/types/Product';
import React from 'react';
import {
  CartItemBody,
  DolorSign,
  ImageBox,
  ItemName,
  ItemPrice,
  ItemPriceValue,
  ItemQuantity,
  ItemSection,
  Quantity
} from './styles';

interface CartItemProps {
  sku: string;
  name: string;
  image: { link: string; validity?: string; storageType?: string }[]; // Atualize o tipo de 'image'
  price: number;
  stock: number;
  quantity: number;
  children?: React.ReactNode;
}

const CartItem = ({
  sku,
  name,
  image,
  price,
  stock,
  quantity,
  children // Certifique-se de incluir a propriedade children
}: CartItemProps) => {
  const [qty, setQty] = React.useState(quantity);
  const [itemPrice, setItemPrice] = React.useState(qty * price);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const updateCartQuantity = (action: string) => {
    if (action === 'add' && qty < stock) {
      setQty(qty + 1);
      addToCart(sku, qty);
    } else if (action === 'remove' && qty > 1) {
      setQty(qty - 1);
      addToCart(sku, qty);
    } else if (action === 'delete') {
      setQty(0);
      removeFromCart(sku);
    }
  };

  React.useEffect(() => {
    setItemPrice(qty * price);
  }, [qty]);

  return (
    <CartItemBody id={sku}>
      <ImageBox>
        <RandomImage images={image} alt={name} />
      </ImageBox>
      <ItemSection>
        <ItemName>{name}</ItemName>
        <ItemName>{sku}</ItemName>
        <ItemQuantity>
          <span>x {qty}</span>
          <Quantity>
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateCartQuantity('remove')}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateCartQuantity('add')}
            />
          </Quantity>
        </ItemQuantity>
      </ItemSection>
      <ItemPrice>
        <DolorSign>R$:</DolorSign>{' '}
        <ItemPriceValue>{itemPrice.toFixed(2)}</ItemPriceValue>
        <span onClick={() => updateCartQuantity('delete')}>
          <DeleteIcon />
        </span>
      </ItemPrice>
      {children} {/* Renderize os children aqui, se necessário */}
    </CartItemBody>
  );
};

export default CartItem;
