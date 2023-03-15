import React from 'react';
import {useBaseContext} from "context/base-context";

const useMenuBottom = () => {
  const [{count_cart_items}, actions] = useBaseContext();

 return{
  count_cart_items,
 };  
}
export default useMenuBottom;