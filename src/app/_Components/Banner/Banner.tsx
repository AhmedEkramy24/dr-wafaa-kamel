import Image from "next/image";
import React from "react";
import BlurText from "../ReactBits/BlurText";

export default function Banner() {
  return (
    <>
      <div className="container mx-auto flex flex-col-reverse md:flex-row md:justify-around items-center gap-5 justify-center h-[90vh]">
        <div className="txt p-3">
          <BlurText
            text="الدكتورة / وَفاءُ كامِلٌ"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl lg:text-5xl mb-8 font-bold text-blue-800"
          />
          <BlurText
            text="أستاذة بأدب القاهرة"
            delay={250}
            animateBy="words"
            direction="top"
            className="lg:text-2xl text-xl pr-2 font-bold"
          />
          <BlurText
            text="عضو بمجمعي اللغة العربية بالقاهرة ودمشق"
            delay={250}
            animateBy="words"
            direction="top"
            className="lg:text-2xl text-xl pr-2 font-bold"
          />
        </div>
        <div className="img rounded-full md:size-[400px] size-[300px] overflow-hidden border-2 border-slate-100 shadow-2xl">
          <Image
            src={"/images/dr.jpg"}
            alt="الدكتورة / وَفاءُ كامِلٌ"
            width={300}
            height={300}
            className="w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
