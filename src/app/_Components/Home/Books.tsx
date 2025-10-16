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

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    fetch("/api/bookshome")
      .then((res) => res.json())
      .then((data) => setBooks(data))
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
        <div className="px-4">
          <h2 className="text-4xl mb-10 font-bold  text-[#235A93]">
            كتب مؤلفة و مترجمة
          </h2>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {books.map((item) => (
            <div key={item.title} className="px-4">
              <Link href={"/books"}>
                <div className="flex flex-col items-center bg-slate-100 rounded-xl shadow-md">
                  <Image
                    src={item.src}
                    alt={item.title}
                    className=" w-full object-cover rounded-lg"
                    width={300}
                    height={300}
                  />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
        <Link
          href={"/books"}
          className="underline hover:text-[#235A93] text-2xl font-semibold text-center block mt-10"
        >
          عرض المزيد
        </Link>
      </div>
    </div>
  );
}
