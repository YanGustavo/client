import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'components/Modal';
type GalleryProps = {
  images?: string[];
  videos?: string[];
};

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GalleryItem = styled.div`
  margin: 1rem;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
`;

const GalleryVideo = styled.video`
  width: 100%;
  height: auto;
`;

const Gallery: React.FC<GalleryProps> = ({ images, videos }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleVideoClick = (videoUrl: string) => {
    setSelectedImage(videoUrl);
  };

  return (
    <>
      <GalleryContainer>
        {images  && (images.map((imageUrl) => (
          <GalleryItem key={imageUrl}>
            <GalleryImage
              src={imageUrl}
              alt="Gallery image"
              onClick={() => handleImageClick(imageUrl)}
            />
          </GalleryItem>
        )))}
        {videos && (videos.map((videoUrl) => (
          <GalleryItem key={videoUrl}>
            <GalleryVideo
              src={videoUrl}
              onClick={() => handleVideoClick(videoUrl)}
            />
          </GalleryItem>
        )))}
      </GalleryContainer>
      {selectedImage && (
        <Modal open={true} onClose={() => setSelectedImage(null)}>
          {selectedImage.includes('.mp4') ? (
            <GalleryVideo src={selectedImage} controls />
          ) : (
            <GalleryImage src={selectedImage} alt="Selected image" />
          )}
        </Modal>
      )}
    </>
  );
};

export default Gallery;