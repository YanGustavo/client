import React, { useState, useEffect } from 'react';
import OrderPage from '../pages/order';
import FavoritePage from '../pages/favorite';
import MessagePage from '../pages/message';
import ConfigPage from '../pages/config';
import Loading from "components/Loading";
import { useBaseContext } from "context/base-context";
import * as actionTypes from 'context/base-context/action-types';

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
interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}
const products: Product[] = [
  {
  id: 1,
  name: "Product 01",
  description: "Description of Product 1",
  price: 10.0,
  imageUrl: "images/1.png",
  isFavorite: false,
  },
  {
  id: 2,
  name: "Product 2",
  description: "Description of Product 2",
  price: 15.0,
  imageUrl: "images/2.png",
  isFavorite: true,
  },
  {
  id: 3,
  name: "Product 3",
  description: "Description of Product 3",
  price: 20.0,
  imageUrl: "/images/3.png",
  isFavorite: false,
  },
  {
  id: 4,
  name: "Product 4",
  description: "Description of Product 4",
  price: 25.0,
  imageUrl: "images/4.png",
  isFavorite: true,
  },
  {
  id: 5,
  name: "Product 5",
  description: "Description of Product 5",
  price: 30.0,
  imageUrl: "/images/5.png",
  isFavorite: false,
  },
  {
  id: 6,
  name: "Product 6",
  description: "Description of Product 6",
  price: 35.0,
  imageUrl: "images/6.png",
  isFavorite: true,
  },
  {
  id: 7,
  name: "Product 7",
  description: "Description of Product 7",
  price: 40.0,
  imageUrl: "images/7.png",
  isFavorite: false,
  },
  {
  id: 8,
  name: "Product 8",
  description: "Description of Product 8",
  price: 45.0,
  imageUrl: "images/8.png",
  isFavorite: true,
  },
  {
  id: 9,
  name: "Product 9",
  description: "Description of Product 9",
  price: 50.0,
  imageUrl: "images/9.png",
  isFavorite: false,
  },
  ];


const useProfile = () => {
const [content, setContent] = useState<JSX.Element>(<Loading/>);
const [{ profile_page, loading }, actions] = useBaseContext();

function navigate() {
if (profile_page === actionTypes.SET_ORDER_PAGE) {
setContent(<OrderPage orders={orders}/>);
} else if (profile_page === actionTypes.SET_FAVORITE_PAGE) {
setContent(<FavoritePage favoriteProducts={products} />);
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