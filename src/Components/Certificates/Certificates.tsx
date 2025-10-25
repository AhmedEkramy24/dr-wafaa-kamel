import { useEffect, useState } from "react";
import type { DataItem } from "../../interfaces";
import { fetchData } from "../../Tools/fetchData";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";
import AnimatedContent from "../ReactBits/AnimatedContent";
import SliderComponent from "../SliderComponent/SliderComponent";

export default function Certificates() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const res = (await fetchData("/api/v1/categories/3")) || [];
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
  const txts = data.filter((item) => item.title);

  return (
    <div>
      <Title>التكريم وشهادات التقدير</Title>
      <AnimatedContent
        direction="horizontal"
        duration={1.2}
        initialOpacity={0.2}
        animateOpacity
      >
        <div className="container mx-auto p-2">
          <div className="imgs">
            <SliderComponent>
              {data.map((item, index) => (
                <div className="p-5" key={index}>
                  <div className="h-[200px] shadow-md rounded-xl overflow-hidden">
                    <img
                      src={item.covers?.[0] || "/placeholder.png"}
                      alt={item?.title || "Certificate Image"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </SliderComponent>
          </div>

          <div className="mt-5 text-xl font-bold space-y-2">
            {txts.map((item, index) => (
              <p key={index}>
                <span className="ml-2 text-[#235a93]">
                  <i className="fas fa-certificate"></i>
                </span>
                {item.title}
              </p>
            ))}
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
}
