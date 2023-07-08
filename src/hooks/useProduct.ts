import React from 'react';
import { Product } from 'lib/types/Product';
import { toast } from 'react-toastify';
import axios from 'axios';

type UseProductProps = {
};

type UseProductReturn = {
  discountPrice: (price: number, percentage: number) => number;
  handleSubmitCalculate: (cep: string) => Promise<number | null>; // Alterado o tipo de retorno para incluir 'null'
  onlineUsers: number;
  getOnlineUsers: () => Promise<number>;
  findProductBySlug: (slugValue: string) => Promise<Product[]>; // Adicionado o tipo de retorno
  findProductBySKU: (skuValue: string) => Promise<Product[]>; // Adicionado o tipo de retorno
};

const useProduct = (): UseProductReturn => {
  const [onlineUsers, setOnlineUsers] = React.useState<number>(0);

  const discountPrice = React.useCallback((price: number, percentage: number) => {
    return price * (percentage / 100);
  }, []);

  const handleSubmitCalculate = async (cep: string): Promise<number | null> => {
    if (!navigator.onLine) {
      toast.error('Você está offline, verifique sua conexão.');
      return null;
    }

    try {
      const response = await axios.get(`https://localhost:5000/api/functions/shipping/${cep}`);
      const shippingCost = response.data.cost;
      return shippingCost;
    } catch (error) {
      toast.error('Ocorreu um erro ao calcular o frete. Por favor, tente novamente mais tarde.' + cep);
      return null;
    }
  };

  const getOnlineUsers = async (): Promise<number> => {
    try {
      const response = await axios.get('https://localhost:5000/api/functions/onlineUsers');
      const onlineUsers = response.data.onlineUsers;
      setOnlineUsers(onlineUsers);
      return onlineUsers;
    } catch (error) {
      console.error('Error retrieving online users:', error);
      return 0;
    }
  };

  const findProductBySlug = async (slugValue: string): Promise<Product[]> => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products/slug/${slugValue}`);// /slug/${slugValue}
      const product = response.data.products;
      console.log("product d"+product);
      return product ? [product] : [];
    } catch (error) {
      console.error('Error retrieving product:', error);
      return [];
    }
  };
  const findProductBySKU = async (skuValue: string): Promise<Product[]> => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products/sku/${skuValue}`);
      const product = response.data;
      return product ? [product] : [];
    } catch (error) {
      console.error('Error retrieving product:', error);
      return [];
    }
  };

  return {
    onlineUsers,
    discountPrice,
    handleSubmitCalculate,
    getOnlineUsers,
    findProductBySlug,
    findProductBySKU,
  };
};

export default useProduct;
