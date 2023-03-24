'use client'
import React from 'react';
import useComponentVisible from "functions/check-click-outside";
//error
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';
//styles
import { MenuRightTop, MenuRightCenter, MenuRightBottom, Body,} from './styles';
//hooks
import useMenuRight from "./hooks/useMenuRight";
//components
import MenuBottom from "ui/base/menu-right/components/menu-bottom";

import LayoutTransition from '@/ui/base/menu-right/layout';
//context
import * as actionTypesMediaQuery from 'constants/media-query-constants';

 const MenuRight = ({children}: { children: React.ReactNode }) => {  
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);
  const {size_media_query, menu_right_visible, isPending, content, actions,} = useMenuRight(); 
  const yes:any = size_media_query ? actionTypesMediaQuery.HUGE_ONE: true ? actionTypesMediaQuery.HUGE : true ? actionTypesMediaQuery.BIG : false ? actionTypesMediaQuery.MEDIUM : false ? actionTypesMediaQuery.SMALL : false;
console.log("yes"+yes);
  return (
  <Body ref={ref} className={menu_right_visible === true ? `active `: ``}>
        <ErrorBoundary
    fallbackRender={({error, resetErrorBoundary}) => (<ErrorFallback error={error}
      resetErrorBoundary={resetErrorBoundary}/>
    )}
    >  
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