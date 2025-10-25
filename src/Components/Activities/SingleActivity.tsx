import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { DataItem } from "../../interfaces";
import { fetchData } from "../../Tools/fetchData";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";

export default function SingleActivity() {
  const { id } = useParams<{ id: string }>();
  const [activity, setActivity] = useState<DataItem | null>(null);
  async function getActivity() {
    const data = await fetchData(`/api/v1/items/${id}`);
    setActivity(data);
  }

  useEffect(() => {
    getActivity();
  }, []);

  if (!activity) return <Loading />;

  return (
    <div>
      <Title>{`${activity?.title}`}</Title>
      <div className="container mx-auto p-4">
        <p className="mb-4 font-semibold text-xl leading-10">
          {activity?.description?.replaceAll("المرشحة", "الدكتورة وفاء كامل")}
        </p>
        <div className="flex">
          {activity?.covers.length > 0 ? (
            activity?.covers.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
              >
                <div className="rounded-lg shadow-md overflow-hidden border border-slate-200">
                  <img
                    src={item}
                    alt={`${activity.title}-${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center"> الصور قيد التحديث ...</p>
          )}
        </div>
      </div>
    </div>
  );
}
