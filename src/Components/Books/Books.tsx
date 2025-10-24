import { useEffect, useState } from "react";
import type { DataItem } from "../../interfaces";
import { fetchData } from "../../Tools/fetchData";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";
import AnimatedContent from "../ReactBits/AnimatedContent";
import { Link } from "react-router-dom";

export default function Books() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const res =
        (await fetchData(
          "https://test.drwafaakamel.com/api/v1/categories/5"
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
    <>
      <Title>كتب مؤلفة و مترجمة 📚</Title>
      <AnimatedContent
        direction="horizontal"
        duration={1.2}
        initialOpacity={0.2}
        animateOpacity
      >
        <div className="container mx-auto flex flex-wrap">
          {data?.map((item, index: number) => (
            <div key={index} className="md:w-1/2 lg:w-1/3 xl:w-1/4  w-full p-8">
              <Link to={`/books/${item.id}`}>
                <div className="shadow-2xl group rounded-lg overflow-hidden">
                  <div className="relative overflow-hidden ">
                    <img
                      src={item.covers[0]}
                      alt={`${item.title}`}
                      className="w-full md:h-[300px] object-cover object-top"
                    />
                    <div className="absolute top-full group-hover:top-0 duration-500 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,60%)]   text-white  text-3xl">
                      أقرأ الكتاب 📖
                    </div>
                  </div>
                  <p className="text-center py-3 font-semibold text-lg">
                    {item.title}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </AnimatedContent>
    </>
  );
}
