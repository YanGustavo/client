import AddRounded from "@mui/icons-material/AddRounded";
import RemoveRounded from "@mui/icons-material/RemoveRounded";
import DeleteIcon from '@mui/icons-material/Delete';
 import React from "react";
 import {useCartContext} from "context/cart-context";
let cartItems = [];

// type CartItemProps = {
//   itemId: Number,
//   name: String,
//   imgSrc: any, 
//   price:any,
// }

function CartItem({ itemId, name, imgSrc, price}) { // : CartItemProps
   const [qty, setQty] = React.useState(1);
   const [itemPrice, setItemPrice] = React.useState(parseInt(qty) * parseFloat(price));
  const [{ cart, total }, actions] = useCartContext();

  React.useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  const updateCart = (action,id) => {
    if (action === "add") {
      setQty(qty + 1);
      actions.addToCart(itemId, qty);
    }if (action === "remove") {
      setQty(qty - 1);
      actions.addToCart(itemId, qty);
    }else if(action === "remove") {
        setQty(0);
        actions.removeFromCart(itemId);
      }
  };

  return (
    <div className="cartItem" id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
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
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>{" "}
        <span className="itemPriceValue">{itemPrice}</span>
        <span onClick={() => updateCart("remove", itemId)}><DeleteIcon/></span>
      </p>
    </div>
  );
}

export default CartItem;
