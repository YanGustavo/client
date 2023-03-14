import React from 'react'; //, {Suspense} 
//import Link from 'next/link';
import * as SStepsCheckout from './styles';
//import { Skeleton} from 'components/Skeleton';
import useStepsCheckout from "./useStepsCheckout";
import useStepsCheckoutAnimate from "./useStepsCheckoutAnimate";
import AccountBalanceWalletRounded from "@mui/icons-material/AccountBalanceWalletOutlined";
import Chat from "@mui/icons-material/Chat";
import Favorite from "@mui/icons-material/Favorite";
import HomeRounded from "@mui/icons-material/HomeRounded";
import SummarizeRounded from "@mui/icons-material/SummarizeRounded";


 const StepsCheckout = () => {
  useStepsCheckout();
  
  //useStepsCheckoutAnimate(nav); 
//   React.useEffect(() => {
//   const nav  = React.useRef();
//   const navA = nav.current.querySelectorAll("a");
//  function setLeftMenuActive() {
//   navA.forEach((n) => {
//    n.classList.remove("active");
//    this.classList.addClass("active");

//     if(this.id === !"payment"){
//       document.querySelector(".payment").addClass("noshow");
//   }
//   else if(this.id === "payment") {
//     document.querySelector(".payment").removeClass("noshow");
//     document.querySelector(".rightbox").children().not(".payment").addClass("noshow");
//   }
//   else if (this.id === "profile") {
//     document.querySelector(".profile").removeClass("noshow");
//     document.querySelector(".rightbox").children().not(".profile").addClass("noshow");
//   }
//   else if(this.id === "subscription") {
//     document.querySelector(".subscription").removeClass("noshow");
//     document.querySelector(".rightbox").children().not(".subscription").addClass("noshow");
//   }
//     else if(this.id === "privacy") {
//       document.querySelector(".privacy").removeClass("noshow");
//       document.querySelector(".rightbox").children().not('.privacy').addClass("noshow");
//   }
//   else if(this.id === "settings") {
//     document.querySelector(".settings").removeClass("noshow");
//     document.querySelector(".rightbox").children().not(".settings").addClass("noshow");
//   }
//  });
//  }
// navA.forEach((n) => n.addEventListener("click", setLeftMenuActive()));
  // },[]); 

return (
      <SStepsCheckout.StepCheckoutStyle>
        <div className="container mx-auto px-4">
  <div id="logo"><img src="favicon.png" className="logo" />
    <div className="CTA">
      <h1>Get $10</h1>
      </div>
  </div>
  <div className="leftbox">
    {/* <nav ref={nav}> */}
    <nav>
      <a id="profile" className="active"><HomeRounded/></a>
      <a id="payment"><Chat/></a>
      <a id="subscription"><AccountBalanceWalletRounded/></a>
      <a id="privacy"><Favorite/></a>
      <a id="settings"><SummarizeRounded/></a>
    </nav>
  </div>
  <div className="rightbox">
    <div className="profile">
      <h1>Personal Info</h1>
      <h2>Full Name</h2>
      <p>Julie Park <button className="btn">update</button></p>
      <h2>Birthday</h2>
      <p>July 21</p>
      <h2>Gender</h2>
      <p>Female</p>
      <h2>Email</h2>
      <p>example@example.com <button className="btn">update</button></p>
      <h2>Password </h2>
      <p>••••••• <button className="btn">Change</button></p>
    </div>
    
    <div className="payment noshow">
      <h1>Payment Info</h1>
      <h2>Payment Method</h2>
      <p>Mastercard •••• •••• •••• 0000 <button className="btn">update</button></p>
      <h2>Billing Address</h2>
      <p>1234 Example Ave | Seattle, WA <button className="btn">change</button></p>
      <h2>Zipcode</h2>
      <p>999000</p>
      <h2>Billing History</h2>
      <p>2018<button className="btn">view</button></p>
      <h2>Redeem Gift Subscription </h2>
      <p><input type="text" placeholder="Enter Gift Code"></input> <button className="btn">Redeem</button></p>
    </div>

    <div className="subscription noshow">
      <h1>Your Subscription</h1>
      <h2>Payment Date</h2>
      <p>05-15-2018 <button className="btn">pay now</button></p>
      <h2>Your Next Charge</h2>
      <p>$8.48<span> includes tax</span></p>
      <h2>Hulu Base Plan</h2>
      <p>Limited Commercials <button className="btn">change plan</button></p>
      <h2>Add-ons</h2>
      <p>None <button className="btn">manage</button></p>
      <h2>Monthly Recurring Total </h2>
      <p>$7.99/month</p>
    </div>

    <div className="privacy noshow">
      <h1>Privacy Settings</h1>
      <h2>Manage Email Notifications<button className="btn">manage</button></h2>
      <p></p>
      <h2>Manage Privacy Settings<button className="btn">manage</button></h2>
      <p></p>
      <h2>View Terms of Use <button className="btn">view</button></h2>
      <p></p>
      <h2>Personalize Ad Experience <button className="btn">update</button></h2>
      <p></p>
      <h2>Protect Your Account <button className="btn">protect</button></h2>
      <p></p>
    </div>
 <div className="settings noshow">
      <h1>Account Settings</h1>
      <h2>Sync Watchlist to My Stuff<button className="btn">sync</button></h2>
      <p></p>
      <h2>Hold Your Subscription<button className="btn">hold</button></h2>
      <p></p>
      <h2>Cancel Your Subscription <button className="btn">cancel</button></h2>
      <p></p>
      <h2>Your Devices <button className="btn">Manage Devices</button></h2>
      <p></p>
      <h2>Referrals <button className="btn">get $10</button></h2>
   <p></p>
    </div>
    
  </div>
</div>
      </SStepsCheckout.StepCheckoutStyle>
);
}
export default StepsCheckout;