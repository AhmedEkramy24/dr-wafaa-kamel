import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { DataItem } from "../../interfaces";
import { fetchData } from "../../Tools/fetchData";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";
import VideoVeiwer from "../VideoViewer/VideoVeiwer";

export default function Meeting() {
  const { id } = useParams<{ id: string }>();
  const [meeting, setMetting] = useState<DataItem | null>(null);

  async function getMetting() {
    const data = await fetchData(`/api/v1/items/${id}`);
    setMetting(data);
  }

  useEffect(() => {
    getMetting();
  }, []);

  const links = [
    meeting?.link,
    meeting?.link2,
    meeting?.link3,
    meeting?.link4,
    meeting?.link5,
  ].filter((e) => e !== null);

  if (!meeting) return <Loading />;

  return (
    <>
      <Title>{meeting?.title || "Default Title"}</Title>
      <div className="container mx-auto flex flex-wrap justify-center">
        {links.map((item, index) => (
          <div className="lg:w-1/3 md:w-1/2 w-full p-3" key={index}>
            <VideoVeiwer videoLink={`${item}`} title={`${meeting.title}`} />
          </div>
        ))}
      </div>
    </>
  );
}
