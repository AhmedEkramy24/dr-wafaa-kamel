import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { DataItem } from "../../interfaces";
import { fetchData } from "../../Tools/fetchData";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";
import PdfViewer from "../PdfViewer/PdfViewer";

export default function SingleWriting() {
  const { id } = useParams();
  const [writing, setWriting] = useState<DataItem | null>(null);

  async function getWriting() {
    const data = await fetchData(
      `https://test.drwafaakamel.com/api/v1/items/${id}`
    );
    setWriting(data);
  }

  useEffect(() => {
    getWriting();
  }, []);

  if (!writing) return <Loading />;
  return (
    <div>
      <Title>{`${writing.title}`}</Title>
      <div className="p-2 md:w-3/4 container mx-auto">
        {writing.covers.length > 0 ? (
          <div className="md:w-2/5 w-full mx-auto rounded-2xl shadow-lg overflow-hidden">
            <img
              src={`${writing.covers[0]}`}
              alt={`${writing.title}`}
              className="w-full object-cover"
            />
          </div>
        ) : (
          <PdfViewer driveUrl={writing?.link || ""} />
        )}
      </div>
    </div>
  );
}
