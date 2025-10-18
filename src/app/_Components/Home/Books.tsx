"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SliderComponent from "../SliderComponent/SliderComponent";

interface Book {
  title: string;
  src: string;
}

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    fetch("/api/bookshome")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error loading books:", err));
  }, []);

  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="px-4">
          <h2 className="text-4xl mb-10 font-bold  text-[#235A93]">
            كتب مؤلفة و مترجمة
          </h2>
        </div>

        <SliderComponent>
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
        </SliderComponent>
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
