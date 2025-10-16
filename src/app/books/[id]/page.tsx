"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Loading from "@/loading";

interface Book {
  id: string;
  cover: string | null;
  pdf: string | null;
  title: string;
}

export default function page() {
  const { id }: { id: string } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    fetch(`/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);
  if (!book) return <Loading />;

  return (
    <>
      <div className="container mx-auto flex flex-wrap items-center  px-2 py-3 ">
        <div className="md:w-1/5  mx-auto w-full text-center shadow-2xl border border-slate-100 rounded-lg overflow-hidden">
          <Image
            src={book!.cover!}
            alt={book!.id}
            className=" object-cover mb-4 w-full"
            width={200}
            height={300}
          />
          <h2 className="font-bold text-xl p-5">{book!.title}</h2>
        </div>
        <div className="p-2 md:w-3/4 w-full">
          {book!.pdf && (
            <iframe
              src={book!.pdf}
              className="w-full min-h-[80vh]"
              title={book!.id}
            />
          )}
        </div>
      </div>
    </>
  );
}
