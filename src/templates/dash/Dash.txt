import React, {Suspense} from 'react';
import Link from 'next/link';
import useDash from "./useDash";
import { Skeleton} from 'components/SkeletonComponent';
//import Link from 'next/link';
import * as SDash from './styles';
// import Header from "ui/Dash/header";
// import Footer from "ui/Dash/footer";
// import CreditCard from "ui/Dash/credit-card";
// import CartItem from "ui/Dash/cart-item";
// import MenuBottom from "ui/Dash/menu-bottom";




const Dash = ({
  children,
}: {
  children: React.ReactNode
}) => { 
  // const {} = useDash(); 
  // const [totalPrice, setTotalPrice] = React.useState(0);
  // const {useInfo} = useHomeTemplate(totalPrice);  
  return (
    <SDash.DashStyle>
   
  </SDash.DashStyle>
  );
}  
export default Dash;
