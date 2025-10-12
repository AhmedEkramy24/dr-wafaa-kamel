"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

interface Award {
  title: string;
  src: string;
}

export default function Awards() {
  const [awards, setAwards] = useState<Award[]>([]);

  useEffect(() => {
    fetch("/api/awards")
      .then((res) => res.json())
      .then((data) => setAwards(data))
      .catch((err) => console.error("Error loading awards:", err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
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

  if (awards.length === 0) {
    return <p className="text-center mt-6">جارٍ تحميل الصور...</p>;
  }

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto py-10">
        <div className="title my-5 flex justify-between items-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#235A93]">
            جوائزي وشهاداتي
          </h2>
          <Link
            href={"/award"}
            className="underline hover:text-[#235A93] text-lg font-semibold"
          >
            عرض المزيد
          </Link>
        </div>
        <div>
          <Slider {...settings}>
            {awards.map((item) => (
              <div key={item.title} className="px-4">
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md ">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-[220px] w-full object-cover rounded-lg"
                  />
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
