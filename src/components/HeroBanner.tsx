import React from 'react';
import Image from 'next/image';

type HeroBannerProps = Record<string, never>;

const HeroBanner: React.FC<HeroBannerProps> = () => {
  return (
    <div className="w-full p-16 text-center relative flex items-center justify-center">
      <Image
        src="https://placehold.co/1920x1080/52C0F7/FFFFFF?text=Oberoi+Summer+Fun&font=sans-serif"
        alt="Oberoi Summer Fun banner"
        layout="fill"
        objectFit="cover"
      />
      <h1 className="relative z-10 text-white text-5xl font-bold">It&apos;s An Oberoi Summer</h1>
    </div>
  );
};

export default HeroBanner;
