import React, { useState, useEffect } from 'react';
import OrderPage from '../pages/order';
import FavoritePage from '../pages/favorite';
import MessagePage from '../pages/message';
import ConfigPage from '../pages/config';
import Loading from "components/Loading";
import { useBaseContext } from "context/base-context";
import * as actionTypes from 'context/base-context/action-types';
//Products
//import { Products } from "lib/Products";
interface Order {
id: number;
date: string;
status: string;
totalPrice: number;
}

const orders: Order[] = [
{
id: 1,
date: '2022-03-20',
status: 'Delivered',
totalPrice: 100.0
},
{
id: 2,
date: '2022-03-21',
status: 'Cancelled',
totalPrice: 50.0
},
{
id: 3,
date: '2022-03-22',
status: 'Processing',
totalPrice: 75.0
}
];
const Post = [
  {
    id: 1,
    title: "Como ser mais produtivo no trabalho",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "João da Silva",
    date: "2022-03-20",
    isRead: false,
  },
  {
    id: 2,
    title: "A importância do sono para a saúde",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Maria Oliveira",
    date: "2022-02-10",
    isRead: true,
  },
  {
    id: 3,
    title: "Como se manter motivado durante o dia",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Pedro Santos",
    date: "2022-01-05",
    isRead: false,
  },
  // adicionar mais posts aqui
];
type Post = {
  id: number;
  title: string;
  content: string;
  isRead: boolean;
  date: Date;
}



const useProfile = () => {
const [content, setContent] = useState<JSX.Element>(<Loading/>);
const [{ profile_page, loading }, actions] = useBaseContext();

function navigate() {
if (profile_page === actionTypes.SET_ORDER_PAGE) {
setContent(<OrderPage orders={orders}/>);
// } else if (profile_page === actionTypes.SET_FAVORITE_PAGE) {
// setContent(<FavoritePage favoriteProducts={Products} />);
} else if (profile_page === actionTypes.SET_MESSAGE_PAGE) {
setContent(<MessagePage posts={Post} />);
} else if (profile_page === actionTypes.SET_CONFIG_PAGE) {
setContent(<ConfigPage/>);
} else {
setContent(<OrderPage orders={orders}/>);
}
}

useEffect(() => {
navigate();
}, [profile_page]);

return {
actions,
content,
};
}

export default useProfile;