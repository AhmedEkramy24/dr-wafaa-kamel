import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { DataItem } from "../../interfaces";
import { fetchData } from "../../Tools/fetchData";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";
import VideoVeiwer from "../VideoViewer/VideoVeiwer";

export default function SingleVolenteering() {
  const { id } = useParams();
  const [volenteering, setVolenteering] = useState<DataItem | null>(null);

  async function getVolenteering() {
    const data = await fetchData(`/api/v1/items/${id}`);
    setVolenteering(data);
  }

  useEffect(() => {
    getVolenteering();
  }, []);

  const links = [
    volenteering?.link,
    volenteering?.link2,
    volenteering?.link3,
    volenteering?.link4,
    volenteering?.link5,
  ].filter((e) => e !== null);

  if (!volenteering) return <Loading />;
  return (
    <>
      <Title>{volenteering?.title || "Default Title"}</Title>
      <div className="container mx-auto flex flex-wrap justify-center">
        {links.map((item, index) => (
          <div className="lg:w-1/3 md:w-1/2 w-full p-3" key={index}>
            <VideoVeiwer
              videoLink={`${item}`}
              title={`${volenteering.title}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
