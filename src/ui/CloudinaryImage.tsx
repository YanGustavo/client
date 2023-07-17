import React, { useEffect, useState, memo } from 'react';
import { Image } from 'cloudinary-react';

interface CloudinaryImageProps {
  publicId: string;
  width?: number;
  height?: number;
  alt?: string;
  onClick?: () => void;
  imageKey?: React.Key;
}

const ImageCache: {
  [publicId: string]: string;
} = {};

const CloudinaryImage: React.FC<CloudinaryImageProps> = memo(
  ({ publicId, width = 300, height = 200, alt = '', onClick, imageKey }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
      if (ImageCache[publicId]) {
        setImageUrl(ImageCache[publicId]);
      } else {
        const cloudinaryUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/${publicId}`;
        ImageCache[publicId] = cloudinaryUrl;
        setImageUrl(cloudinaryUrl);
      }
    }, [publicId]);

    if (!imageUrl) {
      return null; // Render a placeholder/loading state if desired
    }

    return (
      <Image
        cloudName={`${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}`}
        publicId={publicId}
        width={width}
        height={height}
        alt={alt}
        secure
        onClick={onClick}
        key={imageKey}
      />
    );
  }
);

export default CloudinaryImage;

