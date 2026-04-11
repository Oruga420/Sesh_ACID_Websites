"use client";

interface BrandImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackGradient?: string;
}

export default function BrandImage({ src, alt, className = "", fallbackGradient }: BrandImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (fallbackGradient) {
          target.style.display = "none";
        }
      }}
    />
  );
}
