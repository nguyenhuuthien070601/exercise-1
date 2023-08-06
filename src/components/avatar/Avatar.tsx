import React from "react";
import Image from "next/image";
import anonymous from "../../../public/anonymous.png";
type avatarProps = {
  src?: StaticImageData;
  title?: string;
};

const Avatar = (props: avatarProps) => {
  const { src, title } = props;

  return (
    <div
      className="bg-[#6A5AF9] text-[#ffffff] 
     rounded-full w-20 h-20 flex justify-center items-center m-5"
    >
      {src && !title && (
        <Image src={src.src} alt="picture" width={100} height={100}></Image>
      )}
      {src && title && (
        <Image src={src.src} alt="picture" width={100} height={100}></Image>
      )}
      {!src && title && (
        <span className="text-2xl uppercase">{title.slice(0, 2)}</span>
      )}
      {!src && !title && <Image src={anonymous} alt="picture"></Image>}
    </div>
  );
};

export default Avatar;
