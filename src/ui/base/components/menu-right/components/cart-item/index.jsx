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

function CartItem(data) { // : CartItemProps
  const product = data.data;
   const [qty, setQty] = React.useState(1);
   const [itemPrice, setItemPrice] = React.useState(parseInt(qty) * parseFloat(product.price));
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
    <div className="cartItem" id={product._id}>
      <div className="imgBox">
        <img src={product.image} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{product.name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateCart("remove", product._id)}
             //onClick={() => actions.removeFromCart(itemId)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateCart("add", product._id)}
              //onClick={() => actions.addToCart(itemId)}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>{" "}
        <span className="itemPriceValue">{product.price}</span>
        <span onClick={() => updateCart("remove", product._id)}><DeleteIcon/></span>
      </p>
    </div>
  );
}

export default CartItem;
