"use client";

import Title from "@/app/_Components/Title/Title";
import { useParams } from "next/navigation";
import React from "react";

const data = [
  {
    id: 1,
    title: "أمسية ثقافية فاروق شوشة",
    src: [
      "https://www.youtube.com/watch?v=NdbVf8-S-uY",
      "https://www.youtube.com/watch?v=SqihvTFCYm4",
    ],
  },
  {
    id: 2,
    title: "في المساء مع قصواء مع قصواء الخلالي على قناة CBC",
    src: ["https://www.youtube.com/watch?v=3OEAkDIUM1A"],
  },
  {
    id: 3,
    title: "مفاتيح مفيد فوزي",
    src: [
      "https://www.youtube.com/watch?v=BsjxJEO14zE",
      "https://www.youtube.com/watch?v=t8dC12WHPUA",
      "https://www.youtube.com/watch?v=3FBeWLsHbow",
      "https://www.youtube.com/watch?v=3wmQAng_AYM",
    ],
  },
  {
    id: 4,
    title: "استقبال الدكتورة وفاء كامل بمجمع الغة العربية",
    src: ["https://www.youtube.com/watch?v=2Rn7FByLpLs"],
  },
];

export default function Meeting() {
  const { id }: { id: string } = useParams();
  const meeting = data.find((item) => Number(id) === item.id);

  return (
    <>
      <Title>{meeting?.title || "Default Title"}</Title>
      <div className="container mx-auto flex flex-wrap justify-center">
        {meeting?.src.map((item, index) => (
          <div className="lg:w-1/3 md:w-1/2 w-full p-3" key={index}>
            <iframe
              src={item.replace("watch?v=", "embed/")}
              title={meeting.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full rounded-xl h-[300px]"
            />{" "}
          </div>
        ))}
      </div>
    </>
  );
}
