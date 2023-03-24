'use client'
import AddRounded from "@mui/icons-material/AddRounded";
import RemoveRounded from "@mui/icons-material/RemoveRounded";
import DeleteIcon from '@mui/icons-material/Delete';
 import React from "react";
 import {useCartContext} from "context/cart-context";
 import {CartItemBody, ImageBox, ItemSection, ItemName, ItemQuantity, Quantity, ItemPrice, DolorSign, ItemPriceValue,} from "./styles";
//let cartItems = [];

// type CartItemProps = {
//   itemId: Number,
//   name: String,
//   imgSrc: any, 
//   price:any,
// }

function CartItem({ itemId, name, imgSrc, price }) { // : CartItemProps
   const [qty, setQty] = React.useState(1);
   const [itemPrice, setItemPrice] = React.useState(parseInt(qty) * parseFloat(price));
  const [state, actions] = useCartContext();

  // React.useEffect(() => {
  //   cartItems = cart;
  //   setItemPrice(parseInt(qty) * parseFloat(price));
  // }, [qty]);

  const updateCart = (action,id) => {
    if (action === "add") {
      setQty(qty + 1);
      actions.addToCart(id, qty);
    }if (action === "remove") {
      setQty(qty - 1);
      actions.addToCart(id, qty);
    }else if(action === "remove") {
        setQty(0);
        actions.removeFromCart(id);
      }
  };

  return (
    <CartItemBody id={itemId}>
      <ImageBox>
        <img src={imgSrc} alt="" />
      </ImageBox>
      <ItemSection>
        <ItemName>{name}</ItemName>
        <ItemQuantity>
          <span>x {qty}</span>
          <Quantity>
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateCart("remove", itemId)}
             //onClick={() => actions.removeFromCart(itemId)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateCart("add", itemId)}
              //onClick={() => actions.addToCart(itemId)}
            />
          </Quantity>
        </ItemQuantity>
      </ItemSection>
      <ItemPrice>
        <DolorSign>$</DolorSign>{" "}
        <ItemPriceValue>{price}</ItemPriceValue>
        <span onClick={() => updateCart("remove", itemId)}><DeleteIcon/></span>
      </ItemPrice>
    </CartItemBody>
  );
}

export default CartItem;
