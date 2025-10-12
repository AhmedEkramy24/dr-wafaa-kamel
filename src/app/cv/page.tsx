import React from "react";
import Info from "./Info";
import Awards from "./Awards";
import Certificates from "./Certificates";

export default function Cv() {
  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold mb-4 text-blue-900 mt-6 text-center ">
        السيرة الذاتية
      </h1>
      <Info />
      <Awards />
      <Certificates />
    </div>
  );
}
