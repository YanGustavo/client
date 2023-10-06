import React from 'react';
import { Menu } from 'lib/types/Menu';
import { toast } from 'react-toastify';
import axios from 'axios';

type UseMenuProps = {};

type UseMenuReturn = {
  discountPrice: (price: number, percentage: number) => number;
  handleSubmitCalculate: (cep: string) => Promise<number | null>;
  onlineUsers: number;
  getOnlineUsers: () => Promise<number>;
  findMenuBySlug: (slugValue: string) => Promise<Menu[]>;
  findMenuBySKU: (skuValue: string) => Promise<Menu[]>;
};

const useMenu = (): UseMenuReturn => {
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
      const response = await axios.get(`https://localhost:5000/functions/shipping/${cep}`);
      const shippingCost = response.data.cost;
      return shippingCost;
    } catch (error) {
      toast.error('Ocorreu um erro ao calcular o frete. Por favor, tente novamente mais tarde.');
      return null;
    }
  };

  const getOnlineUsers = async (): Promise<number> => {
    try {
      const response = await axios.get('http://localhost:5000/functions/onlineUsers');
      const onlineUsers = response.data.onlineUsers;
      setOnlineUsers(onlineUsers);
      return onlineUsers;
    } catch (error) {
      console.error('Error retrieving online users:', error);
      return 0;
    }
  };

  const findMenuBySlug = async (slugValue: string): Promise<Menu[]> => {
    try {
      const response = await axios.get('http://localhost:5000/Menus/slug/iphone-8-plus');
      const Menu = response.data;
      console.log('Menu data:', Menu);
      return Menu ? [Menu] : [];
    } catch (error) {
      console.error('Error retrieving Menu:', error);
      return [];
    }
  };

  const findMenuBySKU = async (skuValue: string): Promise<Menu[]> => {
    try {
      const response = await axios.get(`http://localhost:5000/Menus/sku/${skuValue}`);
      const Menu = response.data;
      return Menu ? [Menu] : [];
    } catch (error) {
      console.error('Error retrieving Menu:', error);
      return [];
    }
  };

  return {
    onlineUsers,
    discountPrice,
    handleSubmitCalculate,
    getOnlineUsers,
    findMenuBySlug,
    findMenuBySKU,
  };
};

export default useMenu;
