"use client";

import React, { useEffect, useRef, useState } from "react";
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
          <Slider ref={sliderRef} {...settings}>
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
