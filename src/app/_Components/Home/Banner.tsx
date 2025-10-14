import Image from "next/image";
import React from "react";
import BlurText from "../ReactBits/BlurText";
import Link from "next/link";

export default function Banner() {
  return (
    <>
      <div className="container mx-auto flex flex-col-reverse md:flex-row md:justify-around items-center gap-5 justify-center min-h-[60vh]">
        <div className="txt p-3">
          <BlurText
            text="الدكتورة / وَفاءُ كامِلٌ"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl lg:text-5xl mb-8 font-bold text-[#235A93]"
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
          <button className="mt-8 px-6 py-3 bg-[#235a93] text-white rounded-md hover:bg-[#134274]  transition">
            <Link href={"/cv"}>مشاهدة السيرة الذاتية</Link>
          </button>
        </div>
        <div className="img rounded-full md:size-[330px] size-[300px] overflow-hidden border-2 border-slate-100 shadow-2xl">
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
