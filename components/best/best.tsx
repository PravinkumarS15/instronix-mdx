"use client"

import React from 'react';

interface LandscapeImageProps {
  src: string;
  alt: string;
}

const LandscapeImage: React.FC<LandscapeImageProps> = ({ src, alt }) => {
  return (
    <div className="w-full lg:w-1/2 md:flex-1 md:m-2">
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
};

const FlexRowLandscapeImages: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 md:m-2 sm:m-1 xs:m-1">
      <LandscapeImage src="/assets/dept/i1.png" alt="Image 1" />
      <LandscapeImage src="/assets/dept/i2.png" alt="Image 2" />
    </div>
  );
};

export default FlexRowLandscapeImages;
