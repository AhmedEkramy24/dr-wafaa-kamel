import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { DataItem } from "../../interfaces";
import { fetchData } from "../../Tools/fetchData";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";
import PdfViewer from "../PdfViewer/PdfViewer";

export default function GoodWard() {
  const { id } = useParams();
  const [goodward, setGoodWard] = useState<DataItem | null>(null);

  async function getGoodWard() {
    const data = await fetchData(`/api/v1/items/${id}`);
    setGoodWard(data);
  }

  useEffect(() => {
    getGoodWard();
  }, []);

  if (!goodward) return <Loading />;
  return (
    <div>
      <Title>{`${goodward.title}`}</Title>
      <div className="p-2 md:w-3/4 container mx-auto">
        <PdfViewer driveUrl={goodward?.link || ""} />
      </div>
    </div>
  );
}
