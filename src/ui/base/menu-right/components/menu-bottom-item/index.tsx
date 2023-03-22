import React from "react";
import Link from 'next/link';

type MenuBottomItemProps = {
  link: Object,
  icon: any,
  isActive?:Boolean,
  title: string,
  counter?: number,
  handleClick: any,
  param: any,
}

const MenuBottomItem = ({ link, icon, isActive=false,title, counter, handleClick, param}: MenuBottomItemProps ) => {
  return (
    <li onClick={() => handleClick(param)} className={isActive ? `active` : ``}>
      <Link href={link}>
        <span className="icon">{icon}</span>        
      </Link>
      {!(counter === 0 || counter === undefined) && (<span className="counter"><i>{counter}</i></span>)}       
        <span className="title">{title}</span>
    </li>
  );
}

export default MenuBottomItem;
