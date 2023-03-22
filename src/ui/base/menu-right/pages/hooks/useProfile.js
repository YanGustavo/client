import React from 'react';
import OrderPage from '../order';
import FavoritePage from '../favorite';
import MessagePage from '../message';
import ConfigPage from '../config';
import Loading from "components/Loading";
import {useBaseContext} from "context/base-context";
import * as actionTypes from 'context/base-context/action-types';


const useProfile = () => {  
  const [content, setContent] = React.useState(<Loading/>); 
  const [{ profile_page, loading }, actions] = useBaseContext();

  function navigate(){
    if (profile_page === actionTypes.ORDER) {
      setContent(<OrderPage/>);
    }else if (profile_page === actionTypes.FAVORITE) {
      setContent(<FavoritePage/>);
    }else if (profile_page === actionTypes.MESSAGE) {
      setContent(<MessagePage/>);
    }else if (profile_page === actionTypes.CONFIG) {
      setContent(<ConfigPage/>);
    }else{
      setContent(<OrderPage/>);
    }
  }
    
      React.useEffect(() => {
        navigate();
      },[profile_page]);

return{ 
 content,
};
}
export default useProfile;