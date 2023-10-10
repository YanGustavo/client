import React from 'react';
import axios from 'axios';
import Category from 'lib/types/Category';

interface useCategoriesProps {
  categories: Category[];
}

const useCategories = (): useCategoriesProps => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>('https://localhost:5000/api/categories'); // Especifique o tipo de retorno como Category[]
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  React.useEffect(() => {
    fetchCategories();
  }, []); // Executar a função uma vez ao montar o componente

  return { categories };
};

export default useCategories;
