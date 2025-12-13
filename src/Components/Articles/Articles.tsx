import { useEffect, useState } from "react";
import type { DataItem } from "../../interfaces";
import { fetchData } from "../../Tools/fetchData";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";

export default function Articles() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const res = (await fetchData("/api/v1/categories/10")) || [];
      setData(res);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!data.length) {
    return (
      <div className="text-center text-gray-500 py-10">
        ⚠️ لا توجد بيانات متاحة حاليًا
      </div>
    );
  }

  return (
    <div>
      <Title>بحوث ورسائل علمية منشورة بنيت على أعمالها</Title>
      <div className="container mx-auto p-2 space-y-5">
        {data.reverse().map((item, index) => (
          <div key={index}>
            <p className="leading-10">
              <span className="ml-2 ">{index + 1})</span>
              <span className="font-bold bg-amber-100">{item.title}</span>
              <span className="mr-1">{item.description}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
