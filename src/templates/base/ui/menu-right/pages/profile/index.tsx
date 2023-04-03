import React from 'react';
import {Nav, MenuTrigger, Avatar, Ul, Main,} from "./styles";
import useComponentVisible from "functions/check-click-outside";
//icons
import SummarizeRounded from "@mui/icons-material/SummarizeRounded";
import Favorite from "@mui/icons-material/Favorite";
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
//hooks
import useProfile from "./hooks/useProfilePage";

export default function ProfilePage() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible({ initialIsVisible: true });
  const {actions, content} = useProfile(); 
  return (
    <>    
   <MenuTrigger className={isComponentVisible === true ? `active `: ``} onClick={()=> setIsComponentVisible(!isComponentVisible)}>{isComponentVisible === true ? <CloseIcon/>: <KeyboardArrowRightIcon/>}</MenuTrigger>
<Nav ref={ref} className={isComponentVisible === true ? `active `: ``}>	 

  <Avatar>
		<img src="img/profile_yan.png" />
    <h2>Yan Gustavo</h2>
  </Avatar> 
 
	<Ul>
    <li onClick={() => actions.setOrderPage()}><SummarizeRounded/>Pedidos</li>
    <li onClick={() => actions.setFavoritePage()}><Favorite/> Favorite</li>
    <li onClick={() => actions.setMessagePage()}><EmailIcon/> Mensagens</li>
    <li onClick={() => actions.setConfigPage()}><SettingsIcon/> Settings</li>
  </Ul>
 
</Nav>

<Main >
  {content}
</Main>
  </>
  );
}