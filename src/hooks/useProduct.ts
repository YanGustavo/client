import React from 'react';
//Products
import {Product} from 'lib/types/Product';
import { toast } from 'react-toastify';
import axios from 'axios';
type UseProductProps = {
  product: Product;
};
type UseProductReturn = {  
  discountPrice: (price: number, percentage: number) => number;
  handleSubmitCalculate: (cep: string) => Promise<number>;
  onlineUsers: number;
  getOnlineUsers: () => Promise<number>;
};
const useProduct = ({ product}: UseProductProps): UseProductReturn => {
  const [onlineUsers, setOnlineUsers] = React.useState<number>(0);
  const discountPrice = React.useCallback((price: number, percentage: number) => {
    return price * (percentage / 100);
  }, []);
  const handleSubmitCalculate = async (cep: string) => {
    // Verificar se o usuário está online
    if (!navigator.onLine) {
      // Exibir o toast de erro
      toast.error('Você está offline, verifique sua conexão.');
      return;
    }
  
    try {
      // Fazer a requisição HTTP aqui
      const response = await axios.get(`https://localhost:5000/api/functions/shipping/${cep}`);
    const shippingCost = response.data.cost;
      return shippingCost;
    } catch (error) {
      // Exibir uma mensagem de erro caso a requisição falhe
      toast.error('Ocorreu um erro ao calcular o frete. Por favor, tente novamente mais tarde.'+cep);
      return null;
    }
  };
  
  const getOnlineUsers = async (): Promise<number> => {
    const response = await axios.get('https://localhost:5000/api/functions/onlineUsers');
    const onlineUsers = response.data.onlineUsers;
    setOnlineUsers(onlineUsers);
    return onlineUsers;
  };


  return {
    discountPrice,
    handleSubmitCalculate,
    onlineUsers,
    getOnlineUsers,
  };
};

export default useProduct;
