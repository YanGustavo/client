import React from 'react';
 import { MenuItems, Items } from "utils/data";
 import axios from "axios";
 import api from "services/api";
 import {useQuery} from "@tanstack/react-query";

 type TodosProps = {
  userId: number;
  title: string;
  id: number;
 }
const getTodos = async () => {
  const response = await api.get<TodosProps[]>('/');
  return response.data;
}

const useHome = () => { 
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  const [products, setProducts]:any = React.useState();
  const sendGetRequest = React.useCallback(async () => {
    //'https://accounts.cartx.io/api/eai-chefinho/products',
    //https://stoplight.io/mocks/cartx/cartx-api-doc/4235477/e/products
    try {
        const resp = await axios.get('https://bling.com.br/Api/v2/produtos/json&apikey=204381037', {
            headers: {
              'Content-Type': 'application/json',
              'authorization': 'Bearer Y6TPosMhWM2GjTWrvKeGv2W6cR8kSg39EwND9tdnM98yBEcJthsFEHaYALbY'
            },
            transformResponse: (data) => JSON.parse(data),
        });
        setProducts(resp.data.products.data);
        console.log(resp.data.products);//response.data.products.data[0].seo_title
    } catch (err) {
        console.error(err);
    }
},[]);

  React.useEffect(() => {
    sendGetRequest();
  }, [sendGetRequest]);  

  const [isMainData, setMainData] = React.useState(
    Items.filter((element) => element.itemId == "iPhone")
 );
 const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId == itemId));
  };

 return{ 
  data,
  isLoading,
  products, 
  MenuItems,
  isMainData,
  setData,
};  
}
export default useHome;