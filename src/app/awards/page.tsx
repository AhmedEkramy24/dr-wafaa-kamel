import React from "react";
import Title from "../_Components/Title/Title";
import AwardsClient from "./AwardsClient";
import AnimatedContent from "../_Components/ReactBits/AnimatedContent";

export default async function Awards() {
  const res = await fetch(`https://test.drwafaakamel.com/api/v1/categories/2`, {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    throw new Error("فشل في تحميل البيانات");
  }

  const { data } = await res.json();

  return (
    <div>
      <Title>الجوائز التي حصلت عليها 🏆</Title>
      <AnimatedContent
        direction="horizontal"
        duration={1.2}
        initialOpacity={0.2}
        animateOpacity
      >
        <div className="container mx-auto p-2">
          <div className="imgs">
            <AwardsClient data={data} />
          </div>
          <div className="text-center mt-5 text-xl font-bold space-y-2">
            <p>
              <i className="fas fa-trophy ml-3 text-yellow-500"></i>
              2004 جائزة جامعة القاهرة التشجيعية للعلوم الإنسانية والاجتماعية.
            </p>
            <p>
              <i className="fas fa-trophy ml-3 text-yellow-500"></i>
              2013 جائزة جامعة القاهرة التقديرية للعلوم الإنسانية والتربوية.
            </p>
            <p>
              <i className="fas fa-trophy ml-3 text-yellow-500"></i>
              2016 جائزة جامعة القاهرة للتميز في العلوم الإنسانية والتربوية.
            </p>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
}
