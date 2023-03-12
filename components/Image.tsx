import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  blurDataURL: string;
}

export default function Image({
  src,
  alt,
  width,
  height,
  blurDataURL,
}: ImageProps) {
  return (
    <div className="w-full h-full">
      <NextImage
        src={src}
        alt={alt}
        width={parseInt(width)}
        height={parseInt(height)}
        loading="lazy"
        quality={100}
        className="rounded-2xl object-cover object-center"
        placeholder={blurDataURL ? "blur" : undefined}
        blurDataURL={blurDataURL}
      />
    </div>
  );
}
