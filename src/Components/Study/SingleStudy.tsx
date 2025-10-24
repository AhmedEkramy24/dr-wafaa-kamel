import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { DataItem } from "../../interfaces";
import { fetchData } from "../../Tools/fetchData";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";
import SliderComponent from "../SliderComponent/SliderComponent";
import PdfViewer from "../PdfViewer/PdfViewer";
export default function SingleStudy() {
  const { id } = useParams();
  const [study, setStudy] = useState<DataItem | null>(null);

  async function getStudy() {
    const data = await fetchData(
      `https://test.drwafaakamel.com/api/v1/items/${id}`
    );
    setStudy(data);
  }

  useEffect(() => {
    getStudy();
  }, []);

  if (!study) return <Loading />;

  return (
    <div>
      <Title>{`${study?.title}`}</Title>
      <div className="container mx-auto p-2">
        {study && study?.covers.length > 0 && (
          <>
            <h2 className="font-bold text-3xl my-5">
              صور ملتقتة من كلية الأداب جامعة بغداد 📷
            </h2>
            <SliderComponent>
              {study?.covers.map((item, index: number) => (
                <div key={index} className="p-3">
                  <img
                    src={item}
                    alt={`${study.title}`}
                    className="h-[220px] w-full object-cover object-bottom rounded-md shadow-md"
                  />
                </div>
              ))}
            </SliderComponent>
          </>
        )}
        <h2 className="font-bold text-3xl my-5">
          {study?.title}
          <i className="fas fa-file-pdf mr-3"></i>
        </h2>
        <div className="md:w-3/4 mx-auto shadow-md overflow-hidden rounded-2xl border border-slate-200">
          <PdfViewer driveUrl={`${study?.link}`} />
        </div>
      </div>
    </div>
  );
}
