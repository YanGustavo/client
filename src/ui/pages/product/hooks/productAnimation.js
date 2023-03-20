import React from "react";
const useProductAnimation = () => {  
// When the user scrolls the page, execute myFunction
React.useLayoutEffect(() => {
  if (typeof window === 'undefined') return;
window.onscroll = function() {myFunction()};

// Get the ProductDetail
var ProductDetail = document.getElementById("product_detail");
// Get the offset position of the navbar
var sticky = ProductDetail.offsetTop;

// Add the sticky class to the ProductDetail when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    ProductDetail.classList.add("sticky");
  } else {
    ProductDetail.classList.remove("sticky");
  }
}
},[]);

}
export default useProductAnimation;