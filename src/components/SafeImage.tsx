
import React, { useState, useEffect } from 'react';

// Array of available images in public folder
const availableImages = [
  "/public/1.png",
  "/public/2.png",
  "/public/3.png",
  "/public/4.png"
];

// Get a random image from the available images
export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * availableImages.length);
  return availableImages[randomIndex];
};

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc = getRandomImage()
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset error state when src changes
    setHasError(false);
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
};

export default SafeImage;
