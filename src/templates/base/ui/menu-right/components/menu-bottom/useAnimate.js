import React from 'react';
const useAnimate = () => { 
   React.useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) =>{
        n.classList.remove("active");
        this.classList.add("active");
      });
    }

    menuLi.forEach((n) => n.addEventListener("mouseover", setMenuActive));
 });
 return;  
}
export default useAnimate;
