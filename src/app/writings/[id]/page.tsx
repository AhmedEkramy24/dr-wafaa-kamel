"use client";

import PdfViewer from "@/app/_Components/PdfViewer/PdfViewer";
import Title from "@/app/_Components/Title/Title";
import { useParams } from "next/navigation";
import React from "react";

const data = [
  {
    id: "1",
    title: "المؤتمر الرابع لمجمع دمشق",
    link: "https://drive.google.com/file/d/1CNplOpb5cH2BK4lbAfkqSYwlvx-r8PGI/view?usp=drive_link",
  },
  {
    id: "2",
    title: "المؤتمر السابع لمجمع دمشق",
    link: "https://drive.google.com/file/d/1-fywPrl6MGq2EiR0MRtuAPCuvkRhrC3g/view?usp=drive_link",
  },
  {
    id: "3",
    title: "المجلة العربية للعلوم الإنسانية  | الأفعال المضعفة وأبوابها",
    link: "https://drive.google.com/file/d/11cKlJWev5inSyke26Z5wPhdZjIxqND4N/view?usp=drive_link",
  },
  {
    id: "4",
    title: "بحثي في مجلة عالم الفكر",
    link: "https://drive.google.com/file/d/1tFibksWc0DqeV8cHShL382hll9dWp0W5/view?usp=drive_link",
  },
  {
    id: "5",
    title: "مؤتمر ماليزيا- المعاجم القطاعية",
    link: "https://drive.google.com/file/d/1ETAED9IlBSW3DFMBt5zodyCC7zPTOS50/view?usp=drive_link",
  },
  {
    id: "6",
    title: "مجلة الثقافة الجديدة",
    link: "https://drive.google.com/file/d/1jqXeMNpMteei_VcKwUBUo2DctFKaXPmw/view?usp=drive_link",
  },
  {
    id: "7",
    title: "مجلة الكاتب",
    link: "https://drive.google.com/file/d/1IuDSBH2Wz0qdB3o4fJDNpKiZ5Ao3NmHg/view?usp=drive_link",
  },
  {
    id: "8",
    title: "مجلة تراثيات",
    link: "https://drive.google.com/file/d/14WIeH0CCBT2Q--vCbMEY8zRSZ8E-D7UP/view?usp=drive_link",
  },
  {
    id: "9",
    title: "ملخصات مؤتمر جامعة برلين",
    link: "https://drive.google.com/file/d/1QXP2qOjtDeuF9l1dSDWK9fY8m3ukFSIO/view?usp=drive_link",
  },
];

export default function SingleWriting() {
  const { id } = useParams();
  console.log(id);
  const writings = data.find((item) => item.id === id);
  return (
    <div>
      {writings ? (
        <>
          <Title>{`${writings.title}`}</Title>
          <div className="p-2 md:w-3/4 container mx-auto">
            <PdfViewer driveUrl={writings.link} />
          </div>
        </>
      ) : (
        <p>Writing not found.</p>
      )}
    </div>
  );
}
