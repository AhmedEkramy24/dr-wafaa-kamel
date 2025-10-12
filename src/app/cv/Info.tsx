import React from "react";

export default function Info() {
  return (
    <div className="p-2">
      <h2 className="font-bold text-xl text-blue-600 mb-5 ">
        {" "}
        البيانات الشخصية:
      </h2>
      <div className="space-y-3">
        <p>
          <span className="font-bold">الاســــــــــــم : </span>وفاء محمد كامل
          أمين فايـد{" "}
        </p>
        <p>
          <span className="font-bold">الجـنـســية : </span>
          مصـرية
        </p>
        <p>
          <span className="font-bold"> الـوظـيــفـة : </span> أستاذة متفرغة،
          بقسم اللغة العربية وآدابها- كلية الآداب ، بجامعة القاهرة.
        </p>
        <p>
          <span className="font-bold">المؤهلات العلمية : </span>
          ليسانس، وماجستير، ودكتوراه في الآداب، من قسم اللغة العربية بآداب
          القاهرة بمرتبة الشرف الأولى 1980.
        </p>
      </div>
      <p className="h-[1px] w-1/3 mx-auto bg-slate-300 my-10"></p>
    </div>
  );
}
