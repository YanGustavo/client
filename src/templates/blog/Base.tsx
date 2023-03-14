import React, {Suspense} from 'react';
//import Link from 'next/link';
//import useBase from "./useBase";
import { Skeleton} from 'components/SkeletonComponent';
import * as SBase from './styles';
import Header from "ui/base/header";
import Footer from "@/ui/base/components/footer";
import MenuRight from "ui/base/menu-right";
import Announcement from "@/ui/base/header/components/announcement";

const Base = ({children}: { children: React.ReactNode }) => { 

  

  // const {} = useBase(); 
  return (
    <SBase.BaseStyle>
    <div className="BaseTemplate">
    <Suspense fallback={<Skeleton/>}>
      <Header>
        <Announcement/>
      </Header>
    </Suspense>
       
    <main>    
    <Suspense fallback={<Skeleton/>}> 
      {children}  
    </Suspense>
    <MenuRight/>
    </main>  
    <Footer/> 
    
    
  </div> 
  </SBase.BaseStyle>
  );
}  
export default Base;
