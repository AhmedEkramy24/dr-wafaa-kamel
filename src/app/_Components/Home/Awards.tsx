"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

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
      .catch((err) => console.error("Error loading books:", err));
  }, []);

  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderRef = useRef<Slider>(null);
  useEffect(() => {
    // نتأكد إننا في الـ client
    setMounted(true);
    setWindowWidth(window.innerWidth);

    // تحديث السلايدر بعد ما يتحمل بالكامل
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // إجبار react-slick على حساب المقاسات بعد التركيب
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
      sliderRef.current?.slickGoTo(0);
    }, 300);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted || windowWidth === 0) {
    return <p className="text-center mt-6">جارٍ تحميل الصور...</p>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow:
      windowWidth < 640
        ? 1
        : windowWidth < 1024
        ? 2
        : windowWidth < 1280
        ? 3
        : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    centerMode: true,
    centerPadding: "40px",
    rtl: true,
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
          <Slider ref={sliderRef} {...settings}>
            {awards.map((item) => (
              <div key={item.title} className="px-4">
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md ">
                  <Image
                    src={item.src}
                    alt={item.title}
                    data-book
                    className="h-[300px] w-full object-cover rounded-lg"
                    width={300}
                    height={300}
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
