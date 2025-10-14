"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

interface Book {
  title: string;
  src: string;
}

export default function Programs() {
  const [programs, setPrograms] = useState<Book[]>([]);
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    fetch("/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data))
      .catch((err) => console.error("Error loading books:", err));
  }, []);

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

  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="title flex justify-between items-center px-4 my-10">
          <h2 className="text-3xl font-bold text-[#235A93]">
            برامج لغوية حاسوبية
          </h2>
          <Link
            href={"/books"}
            className="underline hover:text-[#235A93] text-lg font-semibold"
          >
            عرض المزيد
          </Link>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {programs.map((item) => (
            <div key={item.title} className="px-4">
              <div className="flex flex-col items-center bg-slate-50 rounded-xl shadow-md">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="h-[300px] w-full object-cover rounded-lg"
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
  );
}
