import React from 'react';

import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';

import * as SMenuRight from './styles';
import useMenuRight from "./useMenuRight";
import useMenuRightAnimate from "./useMenuRightAnimate";
import MenuBottom from "ui/base/components/menu-right/components/menu-bottom";
import CloseIcon from '@mui/icons-material/Close';
import {Container} from 'templates/base/styles';



import LayoutTransition from 'components/layoutTransition';

 const MenuRight = () => {  
  const {data, isPending, content} = useMenuRight(); 
  useMenuRightAnimate(); 
  
return (
  <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    >  
      <SMenuRight.MenuRight className ="menuRight">
        <SMenuRight.CloseMenu className = "closeMenu">
            <CloseIcon className="toggleIcon"/>
          </SMenuRight.CloseMenu>
        <SMenuRight.MenuRightTop>
         <Container>
          {data}
          </Container>                  
            </SMenuRight.MenuRightTop>
<SMenuRight.MenuRightCenter>
            <LayoutTransition isPending={isPending}>
                {content}
            </LayoutTransition>                      
             </SMenuRight.MenuRightCenter>
              <SMenuRight.MenuRightBottom>
              <MenuBottom/>
              </SMenuRight.MenuRightBottom>
  </SMenuRight.MenuRight>
  </ErrorBoundary> 
);
}
export default MenuRight;