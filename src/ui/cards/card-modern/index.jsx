import React from 'react';
import * as SCard from './styles';
import useCard from "./useCard";
import useCardAnimation from "./useCardAnimation";
import Rating from "components/Rating";
import AddRounded from "@mui/icons-material/AddRounded";
import Favorite from "@mui/icons-material/Favorite";
import StarRounded from "@mui/icons-material/StarRounded";


 const Card = (data) => {
  const product = data.product;
  const {isFavourite, setIsFavourite, setCart, handleClick, addToCart} = useCard();
  useCardAnimation(); 
  console.log(product);
return (
  <SCard.CardStyle>
      <section className="card-wrapper">
        <div className="card">
          <div className="card-top">  
          <div
        className={`isFavourite ${isFavourite ? "active" : ""}`}
        onClick={(e) => setIsFavourite(e = !isFavourite)}
      >
        <Favorite />
      </div>
          <div className="card-line-top">            
            <h1>{product.brand}</h1>            
            </div>
            <div className="card-top-text">
            <div className="stars">
              {/* {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? "orange" : "gray"}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))} */}
            </div>              
            </div>
            {/* { product.images.map((image) => (                
                <img key={image.id} src={image.url} className="product-1 opacity" />   
           ))} */}
            <img src={product.image} className="product-1 opacity" />           
            <img src="/img/iphone-12-2.png" className="product-2" />
          </div>
          <div className ="card-line-center">                     
            <span>Lançamento 2020</span>
            <span>Vitrine</span>
          </div>
          <div className="card-bottom">  
          <span className="product-name">{product.handle}</span>           
            <div className="size">
              <h4>Capacidade</h4>
              <div className="sizes">
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span className="active">10</span>
                <span>11</span>
              </div>
            </div>
            <div className="color">
              <h4>Cor</h4>
              <div className="colors">
                <div className="color-1"></div>
                <div className="color-2"></div>
              </div>
            </div>
            <div className="price">
              <span>R$</span>
                <span>{product.price}</span>
            </div> 
            <img src="/img/brand/apple.png" className="logo" />  
            <i
            className="addToCart"
            onClick={addToCart(product._id)}
          >
            <AddRounded />
          </i>         
          </div>
        </div>
      </section>
  </SCard.CardStyle>
);
}
export default Card;