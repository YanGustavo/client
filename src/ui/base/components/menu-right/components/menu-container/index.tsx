import React from "react";
import Link from 'next/link';
import {useBaseContext} from "context/base-context";
import * as actionTypes from 'context/base-context/action-types';

type MenuContainerProps = {
  link: Object,
  icon: any,
  isHome?:Boolean,
  click?: string,
  title: string,
  counter?: number,
}

const MenuContainer = ({ link, icon, isHome=false, click, title, counter}: MenuContainerProps ) => {

  
  const [{state}, actions] = useBaseContext();

  React.useEffect(() => {
    actions.reset();
  },[actions]);

  function handleClick(type) {
  switch (type) {
    case actionTypes.HOME: {
      return actions.home(); 
    }
    case actionTypes.ORDER: {
      return actions.order(); 
    }
    case actionTypes.FAVORITE: {
      return actions.favorite(); 
    }
  }
  }

  return (
    <li onClick={() => handleClick(click)} className={isHome ? `active` : ``}>
      <Link href={link}>
        <span className="icon">{icon}</span>        
      </Link>
      {!(counter === 0 || counter === undefined) && (<span className="counter"><i>{counter}</i></span>)}       
        <span className="title">{title}</span>
    </li>
  );
}

export default MenuContainer;
