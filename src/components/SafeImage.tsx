
import React, { useState } from 'react';

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
  fallbackSrc = "/public/lovable-uploads/dfac3cd3-5b28-4f41-84b7-ad8693ed43fa.png" 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

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
    />
  );
};

export default SafeImage;
