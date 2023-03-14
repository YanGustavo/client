import React from 'react';

const useCardAnimate = () => { 
  React.useEffect(() => {
    const container = document.querySelector(".cards");
    const color1 = document.querySelector(".color-1");
    const color2 = document.querySelector(".color-2");
    const product1 = document.querySelector(".product-1");
    const product2 = document.querySelector(".product-2");
    color2.addEventListener("click", () => {
      container.classList.add("change");
      product1.classList.remove("opacity");
      product2.classList.add("opacity");
    });
    
    color1.addEventListener("click", () => {
      container.classList.remove("change");
       product2.classList.remove("opacity");
      product1.classList.add("opacity");
    });
    
// menu Card active class changer
// const cards = document
// .querySelector(".cards")
// .querySelectorAll(".card");

// function setCardsActive() {
//   cards.forEach((n) =>{
//   n.classList.remove("active");
//   this.classList.add("active");
// });
// }
// cards.forEach((n) => n.addEventListener("click", setcardsActive));

 }, []); 
 return;  
}
export default useCardAnimate;