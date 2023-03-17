import React from 'react';
import * as SMenuBottom from './styles';
import useAnimate from "./useAnimate";


const MenuBottom = ({children}: { children: React.ReactNode }) => {
  useAnimate(); 
  return (
    <SMenuBottom.MenuBottomStyle>
      {/* Left menu */}
    <div className="menuBottom">
      <ul id="menu">
        {children}
          <div className="indicator"></div>
      </ul>
    </div> 
    </SMenuBottom.MenuBottomStyle>
  );
}
export default MenuBottom;