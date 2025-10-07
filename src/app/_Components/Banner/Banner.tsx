import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <>
      <div className="container mx-auto">
        <Image
          src={"/images/banner.jpg"}
          alt="البانر الرئيسي"
          className=" w-full h-[90vh] object-cover"
          width={1920}
          height={400}
        />
      </div>
    </>
  );
}
