import React from "react";
import Image from "next/image";

type ImageProps = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
};

const Img = ({ src, width, height, alt }: ImageProps) => {
  return (
    <Image
      src={src}
      width={width ? width : 500}
      height={height ? height : 300}
      alt={alt ? alt : "image"}
    />
  );
};

export default Img;
