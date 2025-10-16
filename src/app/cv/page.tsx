import React from "react";
import Info from "./Info";
import Shares from "./Shares";
import School from "./School";
import Volenteering from "./Volenteering";
import Title from "../_Components/Title/Title";

export default function Cv() {
  return (
    <div>
      {" "}
      <Title>السيرة الذاتية</Title>
      <div className="container mx-auto text-lg">
        <Info />
        <School />
        <Shares />
        <Volenteering />
      </div>
    </div>
  );
}
