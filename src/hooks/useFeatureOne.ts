import { useBaseContext } from 'context/base-context';
import { useCartStore } from 'context/cart-context';
import React, { useCallback, useState } from 'react';
//Products
import { Product} from 'lib/types/Product';
//Toast
import { toast } from 'react-toastify';

//
type useFeatureProps = {
  product: Product;
  ref: React.RefObject<HTMLImageElement>;
};
type useFeatureReturn = {
  carousel: boolean;
  preview: number;
  carouselPosition: number;
  setCarouselPosition: React.Dispatch<React.SetStateAction<number>>;
  setCarousel: React.Dispatch<React.SetStateAction<boolean>>;
  nextHandler: () => void;
  prevHandler: () => void;
  activeImageHandler: (key: number) => void; 
};

const useFeature = ({ product, ref }: useFeatureProps): useFeatureReturn => {
  const [preview, setPreview] = useState<number>(0);
  const [carousel, setCarousel] = useState<boolean>(false);
  const [carouselPosition, setCarouselPosition] = useState<number>(0);


  const nextHandler = useCallback(() => {
    setPreview((prev) =>
    // @ts-ignore
      prev === (product.images.length || 0) - 1 ? 0 : prev + 1
    );
  }, [product]);

  const prevHandler = useCallback(() => {
    setPreview((prev) =>
    // @ts-ignore
      prev === 0 ? (product.images.length || 0) - 1 : prev - 1
    );
  }, [product]);


  const activeImageHandler = useCallback((key: number) => {
    setPreview(key);
  }, []);

  return {   
    carousel,
    preview,
    carouselPosition,
    setCarousel,
    nextHandler,
    prevHandler,
    activeImageHandler,
    setCarouselPosition,
  };
};

export default useFeature;
