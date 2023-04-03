import React from 'react';
import CartPage from '../pages/cart';
import ProfilePage from '../pages/profile';
import LoginPage from '../pages/login';
import Loading from "components/Loading";
import {useBaseContext} from "context/base-context";
import * as actionTypes from 'context/base-context/action-types';

interface UseRightMenuReturn {
menu_right_page: string;
size_media_query: string;
menu_right_visible: boolean;
data: string;
isPending: boolean;
content: JSX.Element;
count_cart_items: number;
setNewPage: (type: string) => void;
actions: any;
}

const useRightMenu = (): UseRightMenuReturn => {
const [data, setData] = React.useState<string>("Carregando");
const [page, setPage] = React.useState<string>(actionTypes.LOADING);
const [content, setContent] = React.useState<JSX.Element>(<Loading/>);
const [isPending, startTransition] = React.useTransition();
const [{ count_cart_items, size_media_query, menu_right_visible, menu_right_page, loading }, actions] = useBaseContext();

const setNewPage = (type: string): void => {
switch (type) {
case actionTypes.SET_CART_PAGE:
return actions.setCartPage();
case actionTypes.SET_PROFILE_PAGE:
return actions.setProfilePage();
case actionTypes.SET_LOGIN_PAGE:
return actions.setLoginPage();
}
}

function navigate(page: string): void {
startTransition(() => {
setPage(menu_right_page);
});
if (page === actionTypes.SET_CART_PAGE) {
setData("Carrinho");
setContent(<CartPage/>);
}
else if (page === actionTypes.SET_PROFILE_PAGE) {
setData("Perfil");
setContent(<ProfilePage/>);
}else if (page === actionTypes.SET_LOGIN_PAGE) {
setData("Login");
setContent(<LoginPage/>);
}else{
setData("");
setContent(<CartPage/>);
}
};
React.useEffect(() => {
navigate(menu_right_page);
},[size_media_query, menu_right_visible, count_cart_items, menu_right_page]);

return{
menu_right_page,
size_media_query,
menu_right_visible,
data,
isPending,
content,
count_cart_items,
setNewPage,
actions,
};
}
export default useRightMenu;