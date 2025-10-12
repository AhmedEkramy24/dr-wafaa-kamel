import React from "react";

export default function Awards() {
  return (
    <div className="p-2">
      <h2 className="font-bold text-xl text-blue-600 mb-5">
        {" "}
        الجوائز التي حصلت عليها
      </h2>
      <div className="space-y-3">
        <p className="font-bold">
          <i className="fas fa-award text-blue-600 ml-1 "></i>
          جائزة جامعة القاهرة التشجيعية للعلوم الإنسانية والاجتماعية.
        </p>
        <p className="font-bold">
          <i className="fas fa-award text-blue-600 ml-1"></i>
          جائزة جامعة القاهرة التقديرية للعلوم الإنسانية والتربوية.
        </p>
        <p className="font-bold">
          <i className="fas fa-award text-blue-600 ml-1"></i>
          جائزة جامعة القاهرة للتميز في العلوم الإنسانية والتربوية.
        </p>
      </div>
      <p className="h-[1px] w-1/3 mx-auto bg-slate-300 my-10"></p>
    </div>
  );
}
