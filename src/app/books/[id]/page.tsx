"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Loading from "@/app/loading";
import PdfViewer from "@/app/_Components/PdfViewer/PdfViewer";
import Title from "@/app/_Components/Title/Title";

interface Book {
  id: number;
  covers: string[];
  title: string;
  link?: string;
  pdf?: string;
}

export default function SingleBook() {
  const { id }: { id: string } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await fetch(
          "https://test.drwafaakamel.com/api/v1/categories/5"
        );
        if (!res.ok) throw new Error("فشل في تحميل البيانات");

        const { data } = await res.json();
        const found = data.find((item: Book) => item.id === +id);
        setBook(found);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getBook();
  }, [id]);

  if (isLoading) return <Loading />;
  if (!book)
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        ❌ لم يتم العثور على الكتاب
      </div>
    );

  return (
    <>
      <Title>{`${book.title} 📖`}</Title>
      <div className="container mx-auto flex flex-wrap items-start px-2 py-3">
        <div className="md:w-1/5 mx-auto w-4/5 text-center mb-3 shadow-2xl border border-slate-100 rounded-lg overflow-hidden">
          <Image
            src={book.covers?.[book.covers.length - 1]}
            alt={book.title}
            className="object-cover w-full"
            width={200}
            height={300}
            unoptimized
          />
        </div>

        <div className="p-2 md:w-3/4 w-full">
          {book.link && <PdfViewer driveUrl={book.link} />}
        </div>
      </div>
    </>
  );
}
