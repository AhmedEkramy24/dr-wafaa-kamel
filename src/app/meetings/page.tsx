import React from "react";
import Title from "../_Components/Title/Title";
import Link from "next/link";
import AnimatedContent from "../_Components/ReactBits/AnimatedContent";

const data = [
  {
    id: 1,
    title: "أمسية ثقافية فاروق شوشة",
  },
  {
    id: 2,
    title: "في المساء مع قصواء مع قصواء الخلالي على قناة CBC",
  },
  {
    id: 3,
    title: "أمسية ثقافية فاروق شوشة",
  },
  {
    id: 4,
    title: "استقبال الدكتورة وفاء كامل بمجمع الغة العربية",
  },
];

export default function Meetings() {
  return (
    <div>
      <Title>لقاءت ثقافية وتليفزيونية 📺</Title>
      <AnimatedContent
        direction="horizontal"
        duration={1.2}
        initialOpacity={0.2}
        animateOpacity
      >
        <div className="container flex flex-wrap mx-auto">
          {data.map((item, index) => (
            <Link
              href={`/meetings/${item.id}`}
              key={index}
              className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-3 "
            >
              <div className="w-full sm:h-[200px] h-[250px] rounded-2xl overflow-hidden bg-blue-100 text-[#235A93] flex justify-center items-center text-7xl">
                <i className="fas fa-play"></i>
                <i className="fas fa-microphone"></i>
              </div>
              <p className="text-center p-2 font-semibold">{item.title}</p>
            </Link>
          ))}
        </div>
      </AnimatedContent>
    </div>
  );
}
