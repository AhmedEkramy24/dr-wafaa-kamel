import React from "react";
import Title from "../_Components/Title/Title";
import Image from "next/image";
import AnimatedContent from "../_Components/ReactBits/AnimatedContent";
import Link from "next/link";

interface Book {
  id: number;
  covers: string[];
  title: string;
}

export default async function Books() {
  const res = await fetch(`https://test.drwafaakamel.com/api/v1/categories/5`, {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    throw new Error("فشل في تحميل البيانات");
  }

  const { data } = await res.json();

  return (
    <>
      <Title>كتب مؤلفة و مترجمة 📚</Title>
      <AnimatedContent
        direction="horizontal"
        duration={1.2}
        initialOpacity={0.2}
        animateOpacity
      >
        <div className="container mx-auto flex flex-wrap">
          {data?.map((item: Book, index: number) => (
            <div key={index} className="md:w-1/2 lg:w-1/3 xl:w-1/4  w-full p-8">
              <Link href={`/books/${item.id}`}>
                <div className="shadow-2xl group rounded-lg overflow-hidden">
                  <div className="relative overflow-hidden ">
                    <Image
                      unoptimized
                      src={item.covers[item.covers.length - 1]}
                      alt={item.title}
                      width={200}
                      height={300}
                      className="w-full md:h-[300px] object-cover object-top"
                    />
                    <div className="absolute top-full group-hover:top-0 duration-500 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,60%)]   text-white  text-3xl">
                      أقرأ الكتاب 📖
                    </div>
                  </div>
                  <p className="text-center py-3 font-semibold text-lg">
                    {item.title}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </AnimatedContent>
    </>
  );
}
