import React from 'react';
import CloudinaryImage from 'ui/CloudinaryImage';

type Props = {
  images: { link: string }[];
  alt?: string;
};

const RandomImage: React.FC<Props> = ({ images, alt }) => {
  const [imageIndex, setImageIndex] = React.useState(0);
  const randomInterval = Math.floor(Math.random() * 2000) + 1000;

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (Array.isArray(images) && images.length > 0) {
      intervalId = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, randomInterval);
    }

    return () => clearInterval(intervalId);
  }, [images]);

  if (images.length === 0) {
    return (
      <img src="/images/no_product_image.png" alt="Não foi possível carregar a imagem do produto!" />
    );
  } else if (!Array.isArray(images)) {
    return <CloudinaryImage publicId={images} alt={alt} />;
  }

  return (
    <CloudinaryImage publicId={images[imageIndex]} alt={alt}/>
  );
};

export default RandomImage;
