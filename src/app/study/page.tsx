import React from "react";
import Title from "../_Components/Title/Title";
import AnimatedContent from "../_Components/ReactBits/AnimatedContent";
import Link from "next/link";

const data = [
  {
    id: "1",
    title: "رسائل لغوية وبحوث ارتكزت على أعمال المرشحة",
    link: "https://drive.google.com/file/d/1DkfI8dY4zp9Xg5ckK3L4II2Xdjeg-x0I/view?usp=drive_link",
  },
  {
    id: "2",
    title: "نقد وتعليق أ. د. عبد الإله نبهان على المعجم",
    link: "https://drive.google.com/drive/folders/1hS7lSxEtuEWI2sJVduJokw0DMwszQ1Hd?usp=drive_link",
  },
];

export default function Study() {
  return (
    <div>
      <Title>دراسات ونقد لأعمالى 🧾</Title>
      <AnimatedContent
        direction="horizontal"
        duration={1.2}
        initialOpacity={0.2}
        animateOpacity
      >
        <div className="container flex flex-wrap mx-auto">
          {data.map((item, index) => (
            <Link
              href={`/study/${item.id}`}
              key={index}
              className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-3 "
            >
              <div className="w-full sm:h-[200px] h-[250px] rounded-2xl overflow-hidden bg-blue-100 text-[#235A93] flex justify-center items-center text-7xl">
                <i className="fa-solid fa-file-lines"></i>
              </div>
              <p className="text-center p-2 font-semibold">{item.title}</p>
            </Link>
          ))}
        </div>
      </AnimatedContent>
    </div>
  );
}
