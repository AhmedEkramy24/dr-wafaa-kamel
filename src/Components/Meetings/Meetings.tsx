import { useEffect, useState } from "react";
import type { DataItem } from "../../interfaces";
import { fetchData } from "../../Tools/fetchData";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";
import AnimatedContent from "../ReactBits/AnimatedContent";
import { Link } from "react-router-dom";

export default function Meetings() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const res = (await fetchData("/api/v1/categories/7")) || [];
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
      <Title>لقاءت ثقافية وتليفزيونية 📺</Title>
      <AnimatedContent
        direction="horizontal"
        duration={1.2}
        initialOpacity={0.2}
        animateOpacity
      >
        <div className="container flex flex-wrap mx-auto">
          {data.map((item: DataItem, index) => (
            <Link
              to={`/meetings/${item.id}`}
              key={index}
              className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-3 "
            >
              <div className="w-full sm:h-[200px] h-[250px] rounded-2xl overflow-hidden bg-blue-100 text-[#235A93] flex justify-center items-center text-7xl">
                <i className="fas fa-play"></i>
              </div>
              <p className="text-center p-2 font-semibold">{item.title}</p>
            </Link>
          ))}
        </div>
      </AnimatedContent>
    </div>
  );
}
