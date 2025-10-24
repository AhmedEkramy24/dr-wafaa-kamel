import { useEffect, useState } from "react";
import type { DataItem } from "../../interfaces";
import { fetchData } from "../../Tools/fetchData";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";
import AnimatedContent from "../ReactBits/AnimatedContent";
import SliderComponent from "../SliderComponent/SliderComponent";

export default function Programs() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const res =
        (await fetchData(
          "https://test.drwafaakamel.com/api/v1/categories/4"
        )) || [];
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
      <Title>برامج لغوية حاسوبية</Title>
      {data && data.length > 0 ? (
        <AnimatedContent
          direction="horizontal"
          duration={1.2}
          initialOpacity={0.2}
          animateOpacity
        >
          <div className="container mx-auto p-2">
            <div className="imgs">
              <SliderComponent>
                {data.map((item: DataItem, index: number) => (
                  <div className="p-5 " key={index}>
                    <div className="shadow-md rounded-xl overflow-hidden">
                      <img
                        src={item.covers[0]}
                        alt={`${item.title}`}
                        className="w-full h-full object-cover"
                      />
                      <p className="p-2 text-center h-[60px]">{item.title}</p>
                    </div>
                  </div>
                ))}
              </SliderComponent>
            </div>
          </div>
        </AnimatedContent>
      ) : (
        <p className="text-center text-xl my-10">
          لا توجد برامج لعرضها حالياً ❌
        </p>
      )}
    </div>
  );
}
