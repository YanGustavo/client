import React from "react";
import { useCartStore } from "context/cart-context";
import { useBaseContext } from "context/base-context";

type Item = {
id: number;
name: string;
image: string;
price: number;
qty: number;
};

//type UseItemsCartPageProps = {};

const useItemsCartPage = () => {//{ history }: UseItemsCartPageProps
const [loading, setLoading] = React.useState<boolean>(true);
const [total, setTotal] = React.useState<number>(0);
const { cartItems } = useCartStore();
const [baseState, baseActions] = useBaseContext();

const checkOutHandler = () => {
// history.push("/login?redirect=shipping");
};

const continueToShopping = () => {
baseActions.setMenuRightHidden();
};

const getCartItems = () => {
baseActions.setCountCartItems(cartItems.length);
setTotal(
cartItems.reduce((a, i) => {
return a + i.qty * i.price;
}, 0).toFixed(2)
);
setLoading(false);
};

React.useEffect(() => {
getCartItems();
}, [cartItems]);

return {
loading,
cartItems,
total,
checkOutHandler,
continueToShopping,
};
};

export default useItemsCartPage;