"use client";

import PdfViewer from "@/app/_Components/PdfViewer/PdfViewer";
import SliderComponent from "@/app/_Components/SliderComponent/SliderComponent";
import Title from "@/app/_Components/Title/Title";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const data = [
  {
    id: "1",
    title: "رسائل لغوية وبحوث ارتكزت على أعمال المرشحة",
    link: "https://drive.google.com/file/d/1DkfI8dY4zp9Xg5ckK3L4II2Xdjeg-x0I/view?usp=drive_link",
  },
  {
    id: "2",
    title: "نقد وتعليق أ. د. عبد الإله نبهان على المعجم",
    link: "https://drive.google.com/file/d/1pDmrF0h0ZooSxVB0EXWyEFcvjRndbG-F/view?usp=drive_link",
  },
];

interface Study {
  title: string;
  src: string;
}

export default function SingleStudy() {
  const { id } = useParams();
  const singleStudy = data.find((item) => item.id === id);
  const [studyImages, setStudyImages] = useState([]);

  const getStudy = async () => {
    try {
      const res = await fetch("/api/study");
      if (!res.ok) throw new Error("فشل في تحميل البيانات");

      const data = await res.json();

      setStudyImages(data);
    } catch (err) {
      console.error(err);
    }
    console.log(studyImages);
  };

  useEffect(() => {
    getStudy();
  }, []);

  return (
    <div>
      <Title>{`${singleStudy?.title}`}</Title>
      <div className="container mx-auto p-2">
        {id === "1" && (
          <>
            <h2 className="font-bold text-3xl my-5">
              صور ملتقتة من كلية الأداب جامعة بغداد 📷
            </h2>
            <SliderComponent>
              {studyImages.map((item: Study, index: number) => (
                <div key={index} className="p-3">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="h-[220px] object-cover object-bottom rounded-md shadow-md"
                  />
                </div>
              ))}
            </SliderComponent>
          </>
        )}
        <h2 className="font-bold text-3xl my-5">
          {singleStudy?.title}
          <i className="fas fa-file-pdf mr-3"></i>
        </h2>
        <div className="md:w-3/4 mx-auto shadow-md overflow-hidden rounded-2xl border border-slate-200">
          <PdfViewer driveUrl={`${singleStudy?.link}`} />
        </div>
      </div>
    </div>
  );
}
