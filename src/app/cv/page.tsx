import React from "react";
import Info from "./Info";
import Shares from "./Shares";
import School from "./School";
import Volenteering from "./Volenteering";
import Image from "next/image";

export default function Cv() {
  return (
    <div>
      {" "}
      <h1 className="md:text-5xl text-3xl font-bold mb-4 text-white md:py-8 py-5 text-center title">
        السيرة الذاتية
      </h1>
      <div className="container mx-auto text-lg">
        <Info />
        <School />
        <Shares />
        <Volenteering />
      </div>
    </div>
  );
}
