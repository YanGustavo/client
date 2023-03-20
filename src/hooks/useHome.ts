import React from 'react';
import {useProductContext} from "context/product-context";

const useHome = (keyword, pagenumber) => { 

  const [{loading, error, products, page, pages}, actions] = useProductContext(); 
  
  React.useEffect(() => {
    actions.listProduct(keyword, pagenumber);
  }, [actions, keyword, pagenumber]);

 return{
  loading,
  error,
  products,
  page,
  pages,
 };   
}
export default useHome;