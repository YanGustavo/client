'use client'
//import Loading from "components/Loading";

//hooks
import useCartPage from "./hooks/useCartPage";

export default function CartPage() {
  const {content} = useCartPage(); 

  return (
    <>    
      
          
          
        {content}    
            </>
  );
}