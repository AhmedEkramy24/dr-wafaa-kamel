"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function Meetings() {
  const videos = [
    {
      title:
        "مفاتيح| الجزء الاول من حوار الدكتور وفاء كامل عضو المجمع اللغوي مع مفيد فوزي",
      src: "https://www.youtube.com/watch?v=BsjxJEO14zE",
    },
    {
      title:
        "مفاتيح| الجزء الثاني من حوار الدكتورة وفاء كامل عضو المجمع اللغوي مع مفيد فوزي",
      src: "https://www.youtube.com/watch?v=t8dC12WHPUA",
    },
    {
      title:
        "مفاتيح| مفيد فوزي والدكتورة وفاء كامل يعرضان الاخطاء اللغوية فى اجتماع مجلس الوزراء",
      src: "https://www.youtube.com/watch?v=3FBeWLsHbow",
    },
    {
      title:
        "مفاتيح| الدكتور وفاء كامل عضو بالمجمع اللغوي تكشف لماذا يفشل الكثير فى الاعراب",
      src: "https://www.youtube.com/watch?v=3wmQAng_AYM",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    centerMode: true,
    centerPadding: "40px",
    rtl: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, centerPadding: "30px" },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "20px" },
      },
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "10px" } },
    ],
  };

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto py-10">
        <div className="title my-5 flex justify-between items-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#235A93]">
            لقاءات ثقافية تليفزيونية
          </h2>
          <Link
            href={"/books"}
            className="underline hover:text-[#235A93] text-lg font-semibold"
          >
            عرض المزيد
          </Link>
        </div>
        <div>
          <Slider {...settings}>
            {videos.map((item) => (
              <div key={item.title} className="px-4">
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md ">
                  <iframe
                    src={item.src}
                    className="h-[230px] w-full"
                    allowFullScreen
                  ></iframe>
                  <p className="mt-3 py-2 text-md font-semibold text-center">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
