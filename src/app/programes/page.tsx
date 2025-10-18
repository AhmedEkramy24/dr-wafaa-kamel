import React from "react";
import Title from "../_Components/Title/Title";
import AnimatedContent from "../_Components/ReactBits/AnimatedContent";
import ProgramesClient from "./Programes";

export default async function Programes() {
  const res = await fetch(`https://test.drwafaakamel.com/api/v1/categories/4`, {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    throw new Error("فشل في تحميل البيانات");
  }

  const { data } = await res.json();

  return (
    <div>
      <Title>برامج لغوية حاسوبية</Title>
      <AnimatedContent
        direction="horizontal"
        duration={1.2}
        initialOpacity={0.2}
        animateOpacity
      >
        <div className="container mx-auto p-2">
          <div className="imgs">
            <ProgramesClient data={data} />
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
}
