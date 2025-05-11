
import React, { useState, useEffect } from 'react';

// Array of available images in public folder with correct paths
const availableImages = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png"
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
  // Normalize src path - remove public/ prefix if present
  const normalizedSrc = src.startsWith('/public/') ? src.substring(7) : src;
  
  const [imgSrc, setImgSrc] = useState(normalizedSrc);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset error state when src changes
    setHasError(false);
    // Normalize src path when it changes
    setImgSrc(src.startsWith('/public/') ? src.substring(7) : src);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      // Make sure fallback src is also normalized
      const normalizedFallback = fallbackSrc.startsWith('/public/') 
        ? fallbackSrc.substring(7) 
        : fallbackSrc;
      setImgSrc(normalizedFallback);
      setHasError(true);
      console.log(`Image error, using fallback: ${normalizedFallback}`);
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
