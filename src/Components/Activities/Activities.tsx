"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import AnimatedContent from "../ReactBits/AnimatedContent";
import { fetchData } from "../../Tools/fetchData";
import type { DataItem } from "../../interfaces";
import Title from "../Title/Title";

export default function Activities() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const res = (await fetchData("/api/v1/categories/14")) || [];
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
      <Title>أنشطة خيرية</Title>
      <AnimatedContent
        direction="horizontal"
        duration={1.2}
        initialOpacity={0.2}
        animateOpacity
      >
        <div className="container flex flex-wrap mx-auto">
          {data.map((item, index) => (
            <Link
              to={`/activities/${item.id}`}
              key={index}
              className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-3 "
            >
              <div className="w-full sm:h-[200px] h-[250px] rounded-2xl overflow-hidden bg-blue-100 text-[#235A93] flex justify-center items-center text-7xl">
                <i className="fas fa-image"></i>
              </div>
              <p className="text-center p-2 font-semibold">{item.title}</p>
            </Link>
          ))}
        </div>
      </AnimatedContent>
    </div>
  );
}
