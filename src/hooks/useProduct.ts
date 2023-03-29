import React, { useState, useCallback, useRef } from 'react';
import { useCartStore } from "context/cart-context";
import { useBaseContext } from "context/base-context";
//Products
import { Products, findProductBySlug, Product } from "lib/Products";
//Toast
import { toast } from 'react-toastify';

//
type UseProductProps = {
  slug: string;
  ref: React.RefObject<HTMLImageElement>;
}
type UseProductReturn = {
  isLoading: boolean;
  product: Product | undefined;
  quantity: number;
  carousel: boolean;
  preview: number;
  carouselPosition: number;
  isModalOpen: boolean;
  setCarousel: React.Dispatch<React.SetStateAction<boolean>>;
  discountPrice: (price: number, percentage: number) => number;
  nextHandler: () => void;
  prevHandler: () => void;
  quantityHandler: (increment: boolean) => void;
  activeImageHandler: (key: number) => void;
  addToCartHandler: (id: string, qty: number, price: number) => void;
}

const useProduct = ({ slug, ref }: UseProductProps): UseProductReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product>();
  const { addToCart } = useCartStore();
  const [, baseActions] = useBaseContext();
  const [quantity, setQuantity] = useState<number>(0);
  const [preview, setPreview] = useState<number>(0);
  const [carousel, setCarousel] = useState<boolean>(false);
  const [carouselPosition, setCarouselPosition] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  

  
  
  const loadPage = useCallback(() => {
    if(slug !== undefined){
     setProduct(findProductBySlug(Products, slug));
    }

    if (slug && product !== undefined) {  
      setIsLoading(false);
  
      if (ref?.current) {
        const imageWidth = ref.current.offsetWidth;
        setCarouselPosition(imageWidth * preview);
      }
    }
  }, [findProductBySlug, preview, slug]);

  const discountPrice = useCallback((price: number, percentage: number) => {
    return price * (percentage / 100);
  }, []);
  
  const nextHandler = useCallback(() => {
    setPreview((prev) => (prev === (product?.images.length || 0) - 1 ? 0 : prev + 1));
  }, [product]);
  
  const prevHandler = useCallback(() => {
    setPreview((prev) => (prev === 0 ? (product?.images.length || 0) - 1 : prev - 1));
  }, [product]);
  
  const quantityHandler = useCallback((increment: boolean) => {
    if (increment) {
      setQuantity((prev) => (prev === 10 ? prev : prev + 1));
    } else {
      setQuantity((prev) => (prev === 0 ? prev : prev - 1));
    }
  }, []);
  
  const activeImageHandler = useCallback((key: number) => {
    setPreview(key);
  }, []);
  
  const addToCartHandler = useCallback((id: string, qty: number, price: number) => {
    if (price > 1000) {
      console.log("entrou no price > 1000"+ price);
  // exibe o modal com a mensagem e o botão "Quero esse produto"
  setIsModalOpen(true);
    
    }else {
      // adiciona o produto no carrinho normalmente
      // ex: addToCart(product);
      try{
        console.log("entrou no try do CartHandler"+ id + qty);
        addToCart(id, qty);
        baseActions.setMenuRightVisible();
        toast.success("Inserimos seu produto ao carrinho!");
        }catch {
          toast.error("Não Conseguimos adiconar seu produto ao carrinho! Tente novamente ou entre em contato diretamente pelo chat!");
        }
    }
  
  }, [addToCart]);

React.useEffect(() => {
    loadPage();  
    console.log("modal is open:"+isModalOpen);
}, [isModalOpen, slug]);

return {
  isLoading,
  product,
  quantity,
  carousel,
  preview,
  carouselPosition,
  isModalOpen,
  setCarousel,
  discountPrice,
  nextHandler,
  prevHandler,
  quantityHandler,
  activeImageHandler,
  addToCartHandler,
  };

}

export default useProduct;







