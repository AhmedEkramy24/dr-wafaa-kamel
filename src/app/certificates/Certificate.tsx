"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

interface Certificate {
  covers: string[];
  title: string;
}

export default function Certificate({ data }: { data: Certificate[] }) {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
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
    slidesToShow: windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3,
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
      <Slider {...settings} ref={sliderRef}>
        {data.map((item, index) => (
          <div className="p-5 " key={index}>
            <div className="h-[200px]  shadow   rounded-xl overflow-hidden">
              <Image
                src={item.covers[item.covers.length - 1]}
                alt={item.title}
                width={300}
                height={300}
                unoptimized
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
