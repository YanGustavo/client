import React from 'react';
const useHeader = () => { 
   React.useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".menuRight").classList.add("active");
      toggleIcon.classList.add("hidden");
    }); 
    
 });
 return;  
}
export default useHeader;