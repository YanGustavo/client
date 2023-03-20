import React from 'react';
//error
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';
//styles
import {Container, ContainerFlush,  CloseMenu, ToggleIcon, MenuRightTop, MenuRightCenter, MenuRightBottom, DebitCardContainer, AddSomeItem, Body, MenuRightChild,} from './styles/styles';
//hooks
import useMenuRight from "./hooks/useMenuRight";
//components
import MenuBottom from "ui/base/menu-right/components/menu-bottom";

import LayoutTransition from 'components/layoutTransition';
//icons
import CloseIcon from '@mui/icons-material/Close';
//context
import * as actionTypesMediaQuery from 'constants/media-query-constants';

 const MenuRight = ({children}: { children: React.ReactNode }) => {  
  const {size_media_query, menu_right_visibility, isPending, content, actions,} = useMenuRight(); 
  //const yes:any = size ? actionTypesMediaQuery.HUGE_ONE: true ? actionTypesMediaQuery.HUGE : true ? actionTypesMediaQuery.BIG : false ? actionTypesMediaQuery.MEDIUM : false ? actionTypesMediaQuery.SMALL : false;
//console.log("yes"+size_media_query);
console.log("menu visib"+menu_right_visibility);
  return (
  
      <Body className={menu_right_visibility ? 'active': ''}>
        <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    >  
        <CloseMenu>
          <ToggleIcon onClick={() => alert(menu_right_visibility)}><CloseIcon/></ToggleIcon>            
          </CloseMenu>
        <MenuRightTop>                
            </MenuRightTop>
          <MenuRightCenter>
            <LayoutTransition isPending={isPending}>
                {content}
            </LayoutTransition>                      
             </MenuRightCenter>
              <MenuRightBottom>
              <MenuBottom>
            {children}
              </MenuBottom>
              </MenuRightBottom>
              </ErrorBoundary> 
            </Body>

);
}
export default MenuRight;