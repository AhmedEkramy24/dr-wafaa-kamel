"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SliderComponent from "../SliderComponent/SliderComponent";

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

  if (awards.length === 0) {
    return <p className="text-center mt-6">جارٍ تحميل الصور...</p>;
  }

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto py-10">
        <div className=" mb-10  px-4">
          <h2 className="text-4xl font-bold  text-[#235A93]">جوائزي</h2>
        </div>
        <div>
          <SliderComponent>
            {awards.map((item) => (
              <div key={item.title} className="p-3">
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md ">
                  <Image
                    src={item.src}
                    alt={item.title}
                    data-book
                    className="h-[250px] w-full object-cover rounded-lg"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            ))}
          </SliderComponent>
          <Link
            href={"/awards"}
            className="underline hover:text-[#235A93] text-2xl font-semibold text-center block mt-10"
          >
            عرض المزيد
          </Link>
        </div>
      </div>
    </div>
  );
}
