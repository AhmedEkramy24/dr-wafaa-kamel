import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { DataItem } from "../../interfaces";
import { fetchData } from "../../Tools/fetchData";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";
import PdfViewer from "../PdfViewer/PdfViewer";

export default function SingleBook() {
  const { id } = useParams<{ id?: string }>();
  const [book, setBook] = useState<DataItem | null>(null);

  async function getBook() {
    const data = await fetchData(`/api/v1/items/${id}`);
    setBook(data);
  }

  useEffect(() => {
    getBook();
  }, []);

  if (!book) return <Loading />;

  return (
    <>
      <Title>{`${book.title} 📖`}</Title>
      <div className="container mx-auto flex flex-wrap items-start px-2 py-3">
        <div className="md:w-1/5 mx-auto w-4/5 text-center mb-3 shadow-2xl border border-slate-100 rounded-lg overflow-hidden">
          <img
            src={book.covers[0]}
            alt={`${book.title}`}
            className="object-cover w-full"
          />
        </div>

        <div className="p-2 md:w-3/4 w-full ">
          {book.link && <PdfViewer driveUrl={book.link} />}
        </div>
      </div>
    </>
  );
}
