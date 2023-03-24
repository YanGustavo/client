import React from 'react';
import OrderPage from '../pages/order';
import FavoritePage from '../pages/favorite';
import MessagePage from '../pages/message';
import ConfigPage from '../pages/config';
import Loading from "components/Loading";
import {useBaseContext} from "context/base-context";
import * as actionTypes from 'context/base-context/action-types';


const useProfile = () => {  
  const [content, setContent] = React.useState(<Loading/>); 
  const [{ profile_page, loading }, actions] = useBaseContext();

  function navigate(){
    if (profile_page === actionTypes.SET_ORDER_PAGE) {
      setContent(<OrderPage/>);
    }else if (profile_page === actionTypes.SET_FAVORITE_PAGE) {
      setContent(<FavoritePage/>);
    }else if (profile_page === actionTypes.SET_MESSAGE_PAGE) {
      setContent(<MessagePage/>);
    }else if (profile_page === actionTypes.SET_CONFIG_PAGE) {
      setContent(<ConfigPage/>);
    }else{
      setContent(<OrderPage/>);
    }
  }
    
      React.useEffect(() => {
        navigate();
      },[profile_page]);

return{
  actions, 
 content,
};
}
export default useProfile;