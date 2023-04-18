import  React  from 'react';

type Props = {
  images: { link: string }[];
  alt?: string;
};


const RandomImage: React.FC<Props> = ({ images, alt }) => {
  const [imageIndex, setImageIndex] = React.useState(0);
  const randomInterval = Math.floor(Math.random() * 2000) + 1000;
  React.useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (images.length > 0) {
      intervalId = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, randomInterval);
    }
    return () => clearInterval(intervalId);
  }, [images]);

  return <img src={images.map((image) => image.link)[imageIndex]} alt={alt} />;
};
export default RandomImage;