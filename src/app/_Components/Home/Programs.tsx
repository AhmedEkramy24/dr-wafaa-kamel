"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SliderComponent from "../SliderComponent/SliderComponent";

interface Book {
  title: string;
  src: string;
}

export default function Programs() {
  const [programs, setPrograms] = useState<Book[]>([]);

  useEffect(() => {
    fetch("/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data))
      .catch((err) => console.error("Error loading books:", err));
  }, []);

  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="px-4 my-10">
          <h2 className="text-3xl font-bold text-[#235A93]">
            برامج لغوية حاسوبية
          </h2>
        </div>

        <SliderComponent>
          {programs.map((item) => (
            <div key={item.title} className="px-4">
              <div className="flex flex-col items-center bg-slate-50 rounded-xl shadow-md">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={300}
                  height={300}
                  className=" w-full object-cover rounded-lg"
                />
                <p className="mt-3 py-2 text-md font-semibold text-center">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </SliderComponent>
        <Link
          href={"/programes"}
          className="underline hover:text-[#235A93] text-2xl font-semibold text-center block mt-10"
        >
          عرض المزيد
        </Link>
      </div>
    </div>
  );
}
