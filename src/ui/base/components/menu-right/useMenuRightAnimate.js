import React from 'react';
const useMenuRightAnimate = () => {  
  React.useEffect(() => {
    const closeMenu = document.querySelector(".closeMenu");
    closeMenu.addEventListener("click", () => {
      document.querySelector(".menuRight").classList.remove("active");
      document.querySelector(".toggleMenu").classList.remove("hidden");
    });
    });
 return;  
}
export default useMenuRightAnimate;