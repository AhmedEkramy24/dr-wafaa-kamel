import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { DataItem } from "../../interfaces";
import { fetchData } from "../../Tools/fetchData";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";
import PdfViewer from "../PdfViewer/PdfViewer";

export default function SingleMedia() {
  const { id } = useParams();
  const [media, setMedia] = useState<DataItem | null>(null);

  async function getMedia() {
    const data = await fetchData(
      `https://test.drwafaakamel.com/api/v1/items/${id}`
    );
    setMedia(data);
  }

  useEffect(() => {
    getMedia();
  }, []);

  if (!media) return <Loading />;
  return (
    <div>
      <Title>{`${media.title}`}</Title>
      <div className="p-2 md:w-3/4 container mx-auto">
        {media.link?.startsWith("https://drive.google.com") ? (
          <PdfViewer driveUrl={media?.link || ""} />
        ) : (
          <div className="md:w-2/5 w-full mx-auto rounded-2xl shadow-lg overflow-hidden">
            <p>اضغط على الرابط 👈 {media.link}</p>
          </div>
        )}
      </div>
    </div>
  );
}
