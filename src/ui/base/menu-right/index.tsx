import React from 'react';
//error
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';
//styles
import {Container} from 'templates/base';
import * as SMenuRight from './styles/styles';
//hooks
import useMenuRight from "./hooks/useMenuRight";
//components
import MenuBottom from "ui/base/menu-right/components/menu-bottom";

import LayoutTransition from 'components/layoutTransition';
//icons
import CloseIcon from '@mui/icons-material/Close';


 const MenuRight = ({children}: { children: React.ReactNode }) => {  
  const {isPending, content} = useMenuRight(); 
return (
  
      <SMenuRight.MenuRight className ="menuRight">
        <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    >  
        <SMenuRight.CloseMenu className = "closeMenu">
            <CloseIcon className="toggleIcon"/>
          </SMenuRight.CloseMenu>
        <SMenuRight.MenuRightTop>
         <Container>
          </Container>                  
            </SMenuRight.MenuRightTop>
          <SMenuRight.MenuRightCenter>
            <LayoutTransition isPending={isPending}>
                {content}
            </LayoutTransition>                      
             </SMenuRight.MenuRightCenter>
              <SMenuRight.MenuRightBottom>
              <MenuBottom>
            {children}
              </MenuBottom>
              </SMenuRight.MenuRightBottom>
              </ErrorBoundary> 
            </SMenuRight.MenuRight>

);
}
export default MenuRight;