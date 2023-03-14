'use client';
import { AddRounded, RemoveRounded } from "@mui/icons-material";
 import React from "react";
// import { actionType } from "redux/reducer-temp";
// import { useStateValue } from "context/state-provider";
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
  // const [{ cart, total }, dispatch] = useStateValue();

  // React.useEffect(() => {
  //   cartItems = cart;
  //   setItemPrice(parseInt(qty) * parseFloat(price));
  // }, [qty]);

  // const updateQty = (action,id) => {
  //   if (action == "add") {
  //     setQty(qty + 1);
  //   } else {
  //     // initial state value is one so you need to check if 1 then remove it
  //     if (qty == 1) {
  //       cartItems.pop(id);
  //       dispatch({
  //         type: actionType.SET_CART,
  //         cart: cartItems,
  //       });
  //     } else {
  //       setQty(qty - 1);
  //       console.log(qty);
  //     }
  //   }
  // };

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
              onClick={() => updateQty("remove", itemId)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateQty("add", itemId)}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>{" "}
        <span className="itemPriceValue">{itemPrice}</span>
      </p>
    </div>
  );
}

export default CartItem;
