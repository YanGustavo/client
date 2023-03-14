'use client';
import React from "react";
import * as SBannerName from './styles';

function BannerName({ name, discount, more }) {
  const currency = "R$: ";
  return (
    <SBannerName.BannerNameStyle>
      <div id="stage"  className="container banner">
      <div >
  <div id="road">
    <div id="stripes"></div>
  </div>
</div>
    <div className="bannerContent">
      <h3>Eai, {name}!</h3>
      <p>
        Consiga desconto de até <span>{`${currency}${discount}`}</span>{" "}
        na sua compra
      </p>
      <a href={more}>Saiba Mais</a>
    </div>    
    <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
          </div>
    </SBannerName.BannerNameStyle>
  );
}

export default BannerName;
{/* <SBannerName.BannerNameStyle>
      <div  className="banner">
    <div className="bannerContent">
      <h3>Eai, {name}!</h3>
      <p>
        Consiga desconto de até <span>{`${currency}${discount}`}</span>{" "}
        na sua compra
      </p>
      <a href={more}>Saiba Mais</a>
    </div>
    
    <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
          </div>
    </SBannerName.BannerNameStyle> */}