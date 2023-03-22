import React from 'react'; //, {Suspense} 
import Link from 'next/link';
import {Body, Logo, CTA,} from './styles';
import HomeRounded from "@mui/icons-material/HomeRounded";
const StepsMenu = ({children}: { children: React.ReactNode }) => {
return (
      <Body>
  <Logo>
    <img src="favicon.png" className="logo" />
    <CTA>
      <Link href="/">
      <HomeRounded/>
      </Link>
      </CTA>
  </Logo>
  {children}  
  </Body>
);
}
export default StepsMenu;