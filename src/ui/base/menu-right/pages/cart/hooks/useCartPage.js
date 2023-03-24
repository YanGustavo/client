import React from 'react';
import ItemsCartPage from '../pages/items-cart';
import ShippingCartPage from '../pages/shipping';
import PaymentCartPage from '../pages/payment';
import PlaceOrderCartPage from '../pages/place-order';
import Loading from "components/Loading";
import {useBaseContext} from "context/base-context";
import * as actionTypes from 'context/base-context/action-types';

const useCartPage = () => {
    const [content, setContent] = React.useState(<Loading/>); 
    const [{ cart_page, loading }, actions] = useBaseContext();
  
    function navigate(){
      if (cart_page === actionTypes.SET_CART_ITEMS_PAGE) {
        setContent(<ItemsCartPage actions={actions}/>);
      }else if (cart_page === actionTypes.SET_CART_SHIPPING_PAGE) {
        setContent(<ShippingCartPage actions={actions}/>);
      }else if (cart_page === actionTypes.SET_CART_PAYMENT_PAGE) {
        setContent(<PaymentCartPage actions={actions}/>);
      }else if (cart_page === actionTypes.SET_CART_PLACE_ORDER_PAGE) {
        setContent(<PlaceOrderCartPage actions={actions}/>);
      }else{
        setContent(<ItemsCartPage actions={actions}/>);
      }
    }
      
        React.useEffect(() => {
          navigate();
        },[cart_page]);
  
  return{ 
   content,
  };

}
export default useCartPage;